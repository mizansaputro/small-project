import { isEmpty } from "@utils/validation";

export const separateFullName = (name: string) => {
    let fullName = name || "";
    let result = {
        firstName: "",
        lastName: "",
        secondLastName: "",
    };

    if (fullName.length > 0) {
        var nameTokens =
            fullName.match(
                /[A-ZÁ-ÚÑÜ][a-zá-úñü]+|([aeodlsz]+\s+)+[A-ZÁ-ÚÑÜ][a-zá-úñü]+/g,
            ) || [];

        if (nameTokens.length > 3) {
            result.firstName = nameTokens.slice(0, 2).join(" ");
        } else {
            result.firstName = nameTokens.slice(0, 1).join(" ");
        }

        if (nameTokens.length > 2) {
            result.lastName = nameTokens.slice(-2, -1).join(" ");
            result.secondLastName = nameTokens.slice(-1).join(" ");
        } else {
            result.lastName = nameTokens.slice(-1).join(" ");
            result.secondLastName = "";
        }
    }

    return result;
};

export const readableSlugString = (str: string, uppercase: boolean = false) => {
    if (!isEmpty(str)) {
        const stringReplaced = str.replace("_", " ");

        if (uppercase) {
            return upperCase(stringReplaced);
        }
        return eachWordCapitalize(stringReplaced);
    }

    return "";
};

export const slugCustomString = (str: string, replace: string) => {
    if (!isEmpty(str)) {
        return str.replace("_", replace);
    }

    return "";
};

export const removeTagHTML = (str: string): string => {
    if (!isEmpty(str)) {
        return str.replace(/(<([^>]+)>)/gi, "").replace(/&nbsp;/gi, "");
    }
    return "";
};

export const truncateString = (str: string, num: number): string => {
    if (!isEmpty(num)) {
        if (num <= 3) {
            return str.slice(0, num) + "...";
        }
        if (num >= str.length) {
            return str;
        }
        return str.slice(0, num - 3) + "...";
    }
    return "";
};

export const capitalize = (str: string): string => {
    if (!isEmpty(str)) {
        const words = str.toLowerCase();
        return words.charAt(0).toUpperCase() + words.slice(1);
    }
    return null;
};

export const isSnakeCaseString = (str: string) => str.includes("_");
export const isCamelCaseString = (str: string) => /^[a-z][A-Za-z]*$/.test(str);
export const isPascalCaseString = (str: string) => /^[A-Z][A-Za-z]*$/.test(str);

export const splitWord = (str: string, symbol: string) => str.split(symbol);

export const eachWordCapitalize = (str: string): string => {
    if (!isEmpty(str)) {
        let tempString = "";
        if (isCamelCaseString(str) || isPascalCaseString(str)) {
            tempString = str.replaceAll(/([A-Z])/g, " $1").trim();
        } else if (isSnakeCaseString(str)) {
            tempString = str.replaceAll("_", " ").trim();
        } else {
            tempString = str;
        }

        const splitStr = tempString.toLowerCase().split(" ");
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] =
                splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(" ");
    }
    return "";
};

export const splitString = (str: string, symbol: string, location = 0) => {
    if (!isEmpty(str)) {
        return str.split(symbol)[location] || null;
    }
    return null;
};

export const upperCase = (str: string): string => {
    if (!isEmpty(str)) {
        return str.toUpperCase();
    }
    return "";
};

export const lowerCase = (str: string): string => {
    if (!isEmpty(str)) {
        return str.toLowerCase();
    }
    return "";
};

export const containsText = (text: string, searchText: string) => {
    if (isEmpty(text) && isEmpty(searchText)) {
        return;
    }

    return text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
};

export const convertColor = (color: string) => {
    switch (color) {
        case "primary":
            return "blue";
        case "secondary":
            return "orange";
        case "tertiary":
            return "neutral";
        case "error":
            return "red";
        case "warning":
            return "yellow";
        case "success":
            return "green";
        case "info":
            return "purple";
        default:
            return "blue";
    }
};
