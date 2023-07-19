import axios, { AxiosInstance } from "axios";
import get from "lodash/get";

import { API_URL } from "@constants/config";
import { isEmpty } from "@utils/validation";

let cancelSource = null;

export enum ApiVersion {
    DEFAULT = "default",
    API_V1 = "v1",
    API_V2 = "v2",
}

export enum ErrorCode {
    OTP_INVALID = "OTP_INVALID",
    OTP_EXPIRED = "OTP_EXPIRED",
}

const convertUrl = (url: string, version: ApiVersion): string => {
    const urlParts = url.split("/");
    if (urlParts.length === 0 || version === ApiVersion.DEFAULT) {
        return url;
    }

    return [
        ...urlParts.slice(0, 1),
        version,
        ...urlParts.slice(1, urlParts.length + 1),
    ].join("/");
};

// Cancel axios request
export const cancelRequest = (request = "cancel"): void => {
    if (cancelSource && typeof cancelSource.cancel === "function") {
        cancelSource.cancel(request);
    }
};

// Custom interceptor for error response
const interceptorResponseError = (error) => {
    // Check if the error already in string
    if (typeof error === "string") {
        return Promise.reject(error);
    }

    const { response, message, config } = error;

    // Handle error when the response is undefined
    if (!response && message) {
        return Promise.reject(message);
    }

    // Get response real data from response.data (axios response)
    const data = get(response, "data");

    if (data) {
        // Handle when server give string data response
        if (typeof data === "string") {
            if (data.indexOf("html") >= 0) {
                return Promise.reject("Internal Service Error");
            }

            return Promise.reject(data);
        }

        // Check data is object
        else if (typeof data === "object") {
            return Promise.reject(data);
        }

        // Check ArrayBuffer response type (Download file)
        else if (
            get(response, "request.responseType") === "arraybuffer" &&
            data.toString() === "[object ArrayBuffer]"
        ) {
            const res = JSON.parse(Buffer.from(data).toString("utf8"));

            return Promise.reject(
                get(res, "message", "Internal Service Error"),
            );
        }

        // Handle when error response is JSON and has message attribute
        else if (data.data && data.data.errors) {
            const errors = data.data.errors;

            if (Array.isArray(errors)) {
                if (errors[0] && errors[0].message) {
                    return Promise.reject(errors[0].message);
                }
            }
        } else if (data.errors && data.errors.message) {
            if (typeof data.errors.message === "string") {
                if (data.errors.message === "Session not active") {
                    return Promise.reject("Session not active");
                }

                return Promise.reject(data.errors.message);
            } else if (
                data.errors.message.error &&
                data.errors.message.error.error_description
            ) {
                if (
                    typeof data.errors.message.error.error_description ===
                    "string"
                ) {
                    return Promise.reject(
                        data.errors.message.error.error_description,
                    );
                }
            }
        }

        // Handle when error response is JSON and has message attribute
        else if (data.message) {
            // If data.message already a string
            if (typeof data.message === "string") {
                // Clear storage if message is for session not active
                if (data.message === "Session not active") {
                    return Promise.reject("Session not active");
                }

                return Promise.reject(data.message);
            }

            // If data.message is an object and need to be destructed
            const getMessage = get(data.message, "error.errors.message");
            if (getMessage) {
                return Promise.reject(getMessage);
            }
        }
    }

    // Return a message where there is an error from server
    return Promise.reject(data || "Internal Service Error");
};

// Custom interceptor for success response
const interceptorResponse = (response) => response;

// Custom instance of axios with custom response
const createBasicInstance = async (
    version: ApiVersion,
    baseURL = API_URL,
    customHeaders = [],
    token: boolean = false,
): Promise<AxiosInstance> => {
    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
    };

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    if (!isEmpty(customHeaders)) {
        customHeaders.forEach((header) => {
            const { key, value } = header;
            headers[key] = value;
        });
    }

    cancelSource = axios.CancelToken.source();

    // New instance of Axios
    const instance = axios.create({
        baseURL: baseURL,
        data: [],
        cancelToken: cancelSource.token,
        headers,
    });

    instance.interceptors.response.use(
        interceptorResponse,
        interceptorResponseError,
    );

    // exception for assignment for prefix
    instance.interceptors.request.use((config: any) => {
        // add prefix
        if (!config._withPrefix) {
            config.url = convertUrl(config.url ?? "", version);
            config._withPrefix = true;
        }
        return config;
    });

    return instance;
};

// Custom instance of axios with custom request and
// automatic refresh token
const createInstance = async (
    version: ApiVersion,
    customHeaders = [],
): Promise<AxiosInstance> => {
    const axiosInstance = await createBasicInstance(
        version,
        undefined,
        customHeaders,
        true,
    );

    axiosInstance.interceptors.request.use(
        // exception for assignment for prefix
        (config: any) => {
            // add prefix
            if (!config._withPrefix) {
                config.url = convertUrl(config.url ?? "", version);
                config._withPrefix = true;
            }

            return config;
        },
        (err) => {
            return Promise.reject(err);
        },
    );

    return axiosInstance;
};

// instances without refresh token
export const baseApi: (
    baseURL?: string,
    customHeaders?: Array<{ [key: string]: string }>,
) => Promise<{ [key in ApiVersion]: AxiosInstance }> = async (
    baseURL = API_URL,
    customHeaders = [],
) => ({
    default: await createBasicInstance(
        ApiVersion.DEFAULT,
        baseURL,
        customHeaders,
    ),
    v1: await createBasicInstance(ApiVersion.API_V1, baseURL, customHeaders),
    v2: await createBasicInstance(ApiVersion.API_V2, baseURL, customHeaders), // for later use
});

// instances with refresh token
export const instances: (
    customHeaders?: Array<{ [key: string]: string }>,
) => Promise<{
    [key in ApiVersion]: AxiosInstance;
}> = async (customHeaders = []) => ({
    default: await createInstance(ApiVersion.DEFAULT, customHeaders),
    v1: await createInstance(ApiVersion.API_V1, customHeaders),
    v2: await createInstance(ApiVersion.API_V2, customHeaders), // for later use
});

export default instances;
