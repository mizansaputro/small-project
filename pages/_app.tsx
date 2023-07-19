import React from "react";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { createEmotionCache } from "@utils/cache";
import globalTheme from "@styles/theme";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

function App({
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
}: MyAppProps): JSX.Element {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={globalTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;
