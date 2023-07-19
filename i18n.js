module.exports = {
    locales: ["default", "id", "en"],
    defaultLocale: "default",
    localeDetection: false,
    pages: {
        "*": ["common"],
        "/": ["home"],
    },
    loadLocaleFrom: (locale, namespace) => {
        const lang = locale === "default" ? "id" : locale;
        const importLang = require(`./locales/${lang}/${namespace}.json`);
        return Promise.resolve(importLang);
    },
};
