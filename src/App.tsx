import './AppStyles';
import {FC} from "react";
import React from 'react';
import {StyledApp} from "./AppStyles";
import TradeTable from "./components/TradeTable";
import {ThemeProvider} from "styled-components";
import {theme} from "./stylingTheme";

const App: FC = () => {
    return (
        <StyledApp>
            <ThemeProvider theme={theme}>
                <TradeTable/>
            </ThemeProvider>
        </StyledApp>
    );
}

export default App;
