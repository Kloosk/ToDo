import React from 'react';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import {ThemeProvider} from "styled-components";
import Add from "./containers/add";

const theme = {
    btnBg: "#2EBAEE",
    btnTxt: "#ffffff",
    bg: "#46529D",
    color: "#ffffff",
};
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;
function App() {
  return (
      <>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Add/>
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
      </>
    );
}

export default App;
