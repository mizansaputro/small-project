export function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}

export const isEmpty = (str: any): boolean => {
    return (
        str === "" ||
        str === null ||
        str === undefined ||
        str === "undefined" ||
        (Array.isArray(str) && !str.length) ||
        (typeof str === "object" && Object.entries(str).length === 0)
    );
};
