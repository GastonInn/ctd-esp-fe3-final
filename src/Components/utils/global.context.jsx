import { createContext, useReducer, useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import axios from "axios"


export const initialState = {
    theme: "",
    activeDarkTheme: "",
    data: [],
    dentistFavs: []
}

const palettes = {
    light: createTheme({
        palette: {
            mode: "light",
            primary: {
                main: "#fff",
                light: "#6e6161"
            },
            secondary: {
                main: "#000",
                light: "#514b4bd5d"
            },
            background: {
                default: "#f3f3f3"
            },
            text: {
                primary: "#000",
                secondary: "#000",
            }
        },
    }),
    dark: createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: "#000",
                light: "#514b4bd5d"
            },
            secondary: {
                main: "#dbcfcf",
                light: "#fff"
            },
            background: {
                default: "#000",
            },
            text: {
                primary: "#fff",
                secondary: "#fff",
            }
        }
    })
}

const reducerFunction = (state, action) => {
    switch (action.type) {
        case "theme":
            //console.log(action.activeDarkTheme)
            return {
                ...state,
                activeDarkTheme: action.activeDarkTheme === true ? false : true,
                theme: action.activeDarkTheme === true ? palettes.light : palettes.dark,
            }
        case "dentists":
            return {
                ...state,
                data: action.payload
            }
        case "dentistFavs":
            return {
                ...state,
                dentistFavs: action.dentistFavs
            }
        default:
            return state;
    }
}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {

    initialState.theme = palettes.light;
    initialState.activeDarkTheme = false;
    const [state, dispatch] = useReducer(reducerFunction, initialState);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/")
            .then(res => {
                dispatch({ type: "dentists", payload: res.data })
                //console.log("Cargando datos de odontologos inicial");
            })
            .catch(err => {
                console.log(err)
            })
        const favs = JSON.parse(localStorage.getItem("favs"))
        if (favs) {
            dispatch({ type: "dentistFavs", dentistFavs: favs })
        }
    }, [])

    const store = {
        state,
        dispatch,
    }

    return (
        <ContextGlobal.Provider value={{ store }}>
            <ThemeProvider theme={state.theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ContextGlobal.Provider>
    );
};
