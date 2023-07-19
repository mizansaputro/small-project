import { isEmpty } from "@utils/validation";
import { Translate } from "next-translate";

export const RESPONSE_CODE = {
    API_LIMIT_REACH: "API_LIMIT_REACH",
    VOUCHER_CODE_ALREADY_APPLIED: "VOUCHER_CODE_ALREADY_APPLIED",
    TOKEN_INVALID: "TOKEN_INVALID",
    TOKEN_EXPIRED: "TOKEN_EXPIRED",
    ALREADY_HAS_OTP: "ALREADY_HAS_OTP",
    INVALID_CREDENTIAL: "INVALID_CREDENTIAL",
    INVALID_CREDENTIAL_PHONE: "INVALID_CREDENTIAL_PHONE",
    INVALID_OTP_REQUEST: "INVALID_OTP_REQUEST",
    OTP_INVALID: "OTP_INVALID",
    OTP_EXPIRED: "OTP_EXPIRED",
    USER_ALREADY_EXIST: "USER_ALREADY_EXIST",
    CART_ALREADY_PROCESSED: "CART_ALREADY_PROCESSED",

    CHANGE_EMAIL_SUCCESS: "CHANGE_EMAIL_SUCCESS",
    CHANGE_PHONE_SUCCESS: "CHANGE_PHONE_SUCCESS",
    CHANGE_NAME_SUCCESS: "CHANGE_NAME_SUCCESS",
    CHANGE_ADDRESS_SUCCESS: "CHANGE_ADDRESS_SUCCESS",
    CHANGE_GUARDIAN_SUCCESS: "CHANGE_GUARDIAN_SUCCESS",
    CHANGE_DOMICILE_ADDRESS_SUCCESS: "CHANGE_DOMICILE_ADDRESS_SUCCESS",
    CHANGE_REQUEST_UNAVAILABLE: "CHANGE_REQUEST_UNAVAILABLE",
    CHANGE_REQUEST_WAITING: "CHANGE_REQUEST_WAITING",
    NO_PREVIOUS_DATA: "NO_PREVIOUS_DATA",
    NO_DATA_CHANGED: "NO_DATA_CHANGED",
    PHONE_NUMBER_EXISTS: "PHONE_NUMBER_EXISTS",
    NO_ONGOING_VERIFICATION: "NO_ONGOING_VERIFICATION",
    EMAIL_EXISTS: "EMAIL_EXISTS",

    INCOMPLETE_AUTHENTICATION: "INCOMPLETE_AUTHENTICATION",
    HAS_ONGOING_CHECKOUT_PROCESS: "HAS_ONGOING_CHECKOUT_PROCESS",
    PRODUCT_NOT_MATCH: "PRODUCT_NOT_MATCH",
    PROPERTY_ALREADY_EXIST: "PROPERTY_ALREADY_EXIST",
    NO_PRIMARY_ROLE: "NO_PRIMARY_ROLE",
    MORE_THAN_ONE_PRIMARY_ROLE: "MORE_THAN_ONE_PRIMARY_ROLE",
    UNDERWRITING_NOT_EXIST: "UNDERWRITING_NOT_EXIST",
    HAS_MULTIPLE_ACCOUNT: "HAS_MULTIPLE_ACCOUNT",
    MEMBER_HAS_SUBSCRIPTION: "MEMBER_HAS_SUBSCRIPTION",
    PRIMARY_USER_MUST_LOGGED_USER: "PRIMARY_USER_MUST_LOGGED_USER",

    UNAUTHORIZE_INVOICE: "UNAUTHORIZE_INVOICE",
    NO_ACTIVE_INVOICE: "NO_ACTIVE_INVOICE",
    INVOICE_NOT_FOUND: "INVOICE_NOT_FOUND",
    INVOICE_ALREADY_PAID: "INVOICE_ALREADY_PAID",
    INVOICE_EXPIRED: "INVOICE_EXPIRED",
    UNSUPPORTED_PAYMENT_METHOD: "UNSUPPORTED_PAYMENT_METHOD",
    INVOICE_AMOUNT_MUST_ZERO: "INVOICE_AMOUNT_MUST_ZERO",

    CUSTOMER_RULES_VIOLATED: "CUSTOMER_RULES_VIOLATED",
    MISSING_AMOUNT: "MISSING_AMOUNT",
    MISSING_CUSTOMER: "MISSING_CUSTOMER",
    MULTIPLE_REQUESTS: "MULTIPLE_REQUESTS",
    NOT_FOUND: "NOT_FOUND",
    ORDER_RULES_VIOLATED: "ORDER_RULES_VIOLATED",
    PROMOTION_INACTIVE: "PROMOTION_INACTIVE",
    PROMOTION_NOT_ACTIVE_NOW: "PROMOTION_NOT_ACTIVE_NOW",
    QUANTITY_EXCEEDED: "QUANTITY_EXCEEDED",
    RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
    VOUCHER_DISABLED: "VOUCHER_DISABLED",
    VOUCHER_EXPIRED: "VOUCHER_EXPIRED",
    VOUCHER_NOT_ACTIVE: "VOUCHER_NOT_ACTIVE",
    VOUCHER_NOT_ACTIVE_NOW: "VOUCHER_NOT_ACTIVE_NOW",
    ORGANIZATION_CLIENT_NOT_FOUND: "ORGANIZATION_CLIENT_NOT_FOUND",

    VALIDATION_MUST_IMAGE: "VALIDATION_MUST_IMAGE",
};

export const TRANSLATE_RESPONSE_CODE = {
    CHANGE_EMAIL_SUCCESS: "common:success-change-email-message",
    CHANGE_PHONE_SUCCESS: "common:success-change-phone-message",
    CHANGE_NAME_SUCCESS: "common:success-change-name-message",
    CHANGE_ADDRESS_SUCCESS: "common:success-change-address-message",
    CHANGE_GUARDIAN_SUCCESS: "common:success-change-guardian-message",
    CHANGE_DOMICILE_ADDRESS_SUCCESS:
        "common:success-change-domicile-address-message",
    CHANGE_REQUEST_UNAVAILABLE:
        "common:error-change-request-unavailable-message",
    CHANGE_REQUEST_WAITING: "common:error-change-request-waiting-message",
    NO_PREVIOUS_DATA: "common:error-change-request-no-previous-data-message",
    NO_DATA_CHANGED: "common:error-change-request-no-data-changed-message",
    PHONE_NUMBER_EXISTS:
        "common:error-change-request-phone-number-exists-message",
    NO_ONGOING_VERIFICATION:
        "common:error-change-request-no-ongoing-verification-message",
    EMAIL_EXISTS: "common:error-change-request-email-exists-message",

    API_LIMIT_REACH: "common:error-too-many-request",
    VOUCHER_CODE_ALREADY_APPLIED:
        "common:error-voucher-code-already-applied-message",
    TOKEN_INVALID: "common:error-token-reset-not-valid-message",
    TOKEN_EXPIRED: "common:error-token-reset-not-valid-message",
    INVALID_CREDENTIAL: "common:error-auth-invalid-message",
    INVALID_CREDENTIAL_PHONE: "common:error-auth-invalid-phone-number-message",
    INVALID_OTP_REQUEST: "common:error-otp-invalid-message",
    OTP_INVALID: "common:error-otp-invalid-message",
    OTP_EXPIRED: "common:error-otp-expired-message",
    USER_ALREADY_EXIST: "common:error-auth-already-exist-message",

    INCOMPLETE_AUTHENTICATION: "common:error-card-not-support-message",
    CART_ALREADY_PROCESSED: "common:error-cart-already-processed-message",
    HAS_ONGOING_CHECKOUT_PROCESS:
        "common:error-has-ongoing-checkout-process-message",
    PRODUCT_NOT_MATCH: "common:error-product-not-match-message",
    PROPERTY_ALREADY_EXIST: "common:error-property-already-exist-message",
    NO_PRIMARY_ROLE: "common:error-no-primary-role-message",
    MORE_THAN_ONE_PRIMARY_ROLE:
        "common:error-more-than-one-primary-role-message",
    UNDERWRITING_NOT_EXIST: "common:error-underwriting-not-exist-message",
    HAS_MULTIPLE_ACCOUNT: "common:error-has-multiple-account-message",
    MEMBER_HAS_SUBSCRIPTION: "common:error-member-has-subscription-message",
    PRIMARY_USER_MUST_LOGGED_USER:
        "common:error-member-must-logged-matching-telesales-message",

    UNAUTHORIZE_INVOICE: "common:error-unauthorize-invoice-message",
    NO_ACTIVE_INVOICE: "common:error-no-active-invoice-message",
    INVOICE_NOT_FOUND: "common:error-invoice-not-found-message",
    INVOICE_ALREADY_PAID: "common:error-invoice-already-paid-message",
    INVOICE_EXPIRED: "common:error-invoice-expired-message",
    UNSUPPORTED_PAYMENT_METHOD:
        "common:error-unsupported-payment-method-message",
    INVOICE_AMOUNT_MUST_ZERO: "common:error-invoice-amount-must-zero-message",

    CUSTOMER_RULES_VIOLATED: "common:error-customer-rules-violated-message",
    MISSING_AMOUNT: "common:error-missing-amount-message",
    MISSING_CUSTOMER: "common:error-missing-customer-message",
    MULTIPLE_REQUESTS: "common:error-multiple-request-message",
    ORDER_RULES_VIOLATED: "common:error-order-rules-violated-message",
    PROMOTION_INACTIVE: "common:error-promotion-inactive-message",
    PROMOTION_NOT_ACTIVE_NOW: "common:error-promotion-not-active-now-message",
    NOT_FOUND: "common:error-voucher-code-not-found-message",
    QUANTITY_EXCEEDED: "common:error-quantity-exceeded-message",
    RESOURCE_NOT_FOUND: "common:error-resource-not-found-message",
    VOUCHER_DISABLED: "common:error-voucher-disabled-message",
    VOUCHER_EXPIRED: "common:error-voucher-expired-message",
    VOUCHER_NOT_ACTIVE: "common:error-voucher-not-active-message",
    VOUCHER_NOT_ACTIVE_NOW: "common:error-voucher-not-active-now-message",
    ORGANIZATION_CLIENT_NOT_FOUND:
        "common:error-organization-client-not-found-message",
    VALIDATION_MUST_IMAGE: "common:error-validation-must-image-message",
};

export const getTranslationResponseCode = (
    t: Translate,
    error_code: string,
    data: any = null,
    countdown: number = null,
) => {
    if (error_code === RESPONSE_CODE.API_LIMIT_REACH && (data || countdown)) {
        return t(TRANSLATE_RESPONSE_CODE.API_LIMIT_REACH, {
            time: countdown ?? (data || {}).try_in ?? 0,
        });
    }

    return t(
        isEmpty(TRANSLATE_RESPONSE_CODE[error_code])
            ? "common:error-500-min-message"
            : TRANSLATE_RESPONSE_CODE[error_code],
    );
};
