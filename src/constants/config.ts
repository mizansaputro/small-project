import { isEmpty } from "@utils/validation";

export const APP_ENV = process.env.APP_ENV;
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const APP_STORE = "https://play.google.com/store/apps/details?id=id.rey";
export const STORE_APP = {
    ANDROID: "https://play.google.com/store/apps/details?id=id.rey",
    IOS: "https://apps.apple.com/us/app/rey/id1594536971",
};

export const DOWNLOAD_APP_MOBILE_URL =
    "https://reyid.page.link/download-rey-mobile";

export const OUR_CERTIFICATE = {
    iso: "https://www.cbqaglobal.com/validation/company/pt-vertika-technologies-nusantara-rey-id/?cred_referrer_form_id=58",
    sectigo:
        "https://www.trustlogo.com/ttb_searcher/trustlogo?v_querytype=W&v_shortname=SCAS&v_search=http://www.rey.id&x=6&y=5",
    kominfo:
        "https://drive.google.com/file/d/1tVuSQrNnLNVtmZH_3o5EiwkKa39sWaTl/view",
};

export const DEEP_LINK_ID = "rey-id:/";

export const DEEP_LINK_PATH = {
    sign_in: "/sign-in",
};
