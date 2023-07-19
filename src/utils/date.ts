import {
    differenceInMonths,
    differenceInYears,
    format,
    isAfter,
    isBefore,
    parseISO,
    subYears,
} from "date-fns";
import { isEmpty } from "@utils/validation";
import { id, enUS } from "date-fns/locale";

export const SET_DOB = (year: number): string =>
    format(
        new Date(new Date().setFullYear(new Date().getFullYear() - year)),
        "yyyy-MM-dd",
    );

export const getLocaleForAdapter = (locale: string): Locale =>
    locale === "id" ? id : enUS;

export const setDateByYear = (year: number): Date =>
    new Date(new Date().setFullYear(new Date().getFullYear() - year));

export const setDateByYearWithDate = (
    year: number,
    count: number,
    before: boolean = true,
): Date => {
    const formattedDate = new Date();
    formattedDate.setFullYear(new Date().getFullYear() - year);
    formattedDate.setDate(
        before ? new Date().getDate() + count : new Date().getDate() - count,
    );
    return formattedDate;
};

export const checkValueDate = (date: string | Date) =>
    typeof date === "string" ? parseISO(date) : date;

export const isDateExpired = (date: Date | string) =>
    isAfter(new Date(), checkValueDate(date));

export const getCurrentDate = () => parseISO(format(new Date(), "dd-MM-yyyy"));

export const getCurrentYear = () => format(new Date(), "yyyy");

export const setYearFromNow = (year: number): Date =>
    subYears(new Date(), year);

export const defaultDateFormat = (date: Date) => format(date, "yyyy-MM-dd");

export const defaultFullDateFormat = (date: Date) =>
    format(date, "yyyy-MM-dd HH:mm");

export const defaultDateTimeFormat = (date: Date) =>
    format(date, "dd MMMM yyyy HH:mm");

export const isDateBetweenSpecificDate = (
    date: string | Date,
    date1: string | Date,
    date2: string | Date,
    count: number,
    before: boolean = true,
) => {
    const formattedDate = new Date(date1);
    formattedDate.setDate(
        before
            ? new Date(date1).getDate() - count
            : new Date(date1).getDate() + count,
    );

    return (
        isBefore(checkValueDate(date), checkValueDate(date2)) &&
        isAfter(checkValueDate(date), checkValueDate(formattedDate))
    );
};

export const getDifferentMonthFromNow = (date: string | Date) =>
    differenceInMonths(new Date(), checkValueDate(date));

export const getDifferentYearFromNow = (date: string | Date) =>
    differenceInYears(new Date(), checkValueDate(date));

export const minimumSlashDateFormat = (date: string | Date) =>
    format(checkValueDate(date), "dd/MM/yyyy");

export const minimumMonthReadableDateFormat = (
    date: string | Date,
    locale: "id" | "en" = "id",
) => {
    if (!isEmpty(date)) {
        return format(checkValueDate(date), "dd MMM yyyy", {
            locale: locale === "id" ? id : enUS,
        });
    }

    return null;
};

export const minimumTimestampDate = (
    date: string | Date,
    locale: "id" | "en" = "id",
) =>
    format(checkValueDate(date), "dd/MM/yyyy HH.mm zzzz", {
        locale: locale === "id" ? id : enUS,
    });

export const minimumReadableDateFormat = (
    date: string | Date,
    locale: "id" | "en" = "id",
) => {
    if (!isEmpty(date)) {
        return format(checkValueDate(date), "dd MMMM yyyy", {
            locale: locale === "id" ? id : enUS,
        });
    }

    return null;
};
export const readableDateFormat = (
    date: string | Date,
    locale: "id" | "en" = "id",
) =>
    format(checkValueDate(date), "EEEE, dd MMMM yyyy HH:mm", {
        locale: locale === "id" ? id : enUS,
    });

export const readableDateGMTFormat = (
    date: string | Date,
    locale: "id" | "en" = "id",
) =>
    format(checkValueDate(date), "EEEE, dd MMMM yyyy HH.mm zzzz", {
        locale: locale === "id" ? id : enUS,
    });
