import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter as Router} from 'react-router-dom'

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

import {Provider} from "react-redux"
import store from "./redux"
import {FirebaseProvider} from "./context/FirebaseContext";
import {SWRConfig} from "swr";

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Montserrat, Arial',
        fontSize: 14,

        h5: {
            fontSize: "16px",
            fontWeight: 600
        },
        h4: {
            fontSize: "20px",
            fontWeight: 600
        },
        h3: {
            fontSize: "24px",
            fontWeight: 600
        },
        h2: {
            fontSize: "36px",
            fontWeight: 600
        },
        h1: {
            fontSize: "62px",
            fontWeight: 600
        },
        button: {
            fontWeight: 600
        }
    },
    palette: {
        primary: {
            main: "#FD6746",
            contrastText: "#FFFFFF"
        },
        text: {
            primary: "#474E63",
            secondary: "#474E63"
        },
        secondary: {
            main: "#231651"
        }
    }
});



ReactDOM.render(
    <React.StrictMode>
        <SWRConfig value={{
            revalidateOnFocus: false,
            dedupingInterval: 99999
        }}>
            <FirebaseProvider>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <Router>
                            <App/>
                        </Router>
                    </ThemeProvider>
                </Provider>
            </FirebaseProvider>
        </SWRConfig>
    </React.StrictMode>,
    document.getElementById('root')
);
