import React, { FC, useMemo } from "react";
import useTranslation from "next-translate/useTranslation";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

import { BaseButton, BaseLink } from "@components/Atoms";

import {
    homeBoxContainer,
    homePaperListContainer,
} from "@containers/Home/style";
import { MenuListInterface } from "@containers/Home/interface";
import { MENU_LIST } from "@containers/Home/config";

import { ROUTES_PATH } from "@constants/routes";

const Home: FC = () => {
    const { t, lang } = useTranslation();

    const languageChanged = useMemo(
        () => (lang === "en" ? "id" : "en"),
        [lang],
    );

    const renderTaskItem = (item: string, key: number) => (
        <Stack key={`task-list-item-detail-${key}`}>
            <Typography variant="paragraphSmall">- {t(item)}</Typography>
        </Stack>
    );

    const renderListItem = (item: MenuListInterface, key: number) => (
        <Grid item xs={12} md={6} lg={3} key={`task-list-item-${key}`}>
            <Paper sx={homePaperListContainer}>
                <Stack spacing={5}>
                    <Typography variant="paragraphMediumBold">
                        {t(item.title)}
                    </Typography>
                    {item.task.map((itemDetail, keyDetail) =>
                        renderTaskItem(itemDetail, keyDetail),
                    )}
                    <Stack width="100%" alignItems="flex-end">
                        <BaseLink href={item.url}>
                            <BaseButton noPadding size="small">
                                {t("home:home-start-action")}
                            </BaseButton>
                        </BaseLink>
                    </Stack>
                </Stack>
            </Paper>
        </Grid>
    );

    return (
        <Box sx={homeBoxContainer}>
            <Grid container justifyContent="center" spacing={5}>
                <Grid item xs={12}>
                    <Stack textAlign="center" spacing={5}>
                        <Typography variant="headingMedium">
                            {t("home:home-task-title")}
                        </Typography>
                        <BaseLink
                            href={ROUTES_PATH.home}
                            locale={languageChanged}
                        >
                            <BaseButton>
                                {t("home:home-change-language-action", {
                                    lang: t(
                                        `common:text-language-${languageChanged}`,
                                    ),
                                })}
                            </BaseButton>
                        </BaseLink>
                    </Stack>
                </Grid>
                {MENU_LIST.map((item, key) => renderListItem(item, key))}
            </Grid>
        </Box>
    );
};

export default Home;
