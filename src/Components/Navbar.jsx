import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import { ContextGlobal } from './utils/global.context';
import { Grid, AppBar, Box, Toolbar, Typography, Button } from '@mui/material';


const Navbar = () => {

    const { store } = useContext(ContextGlobal);
    const { state, dispatch } = store;
    const { theme, activeDarkTheme } = state;

    const buttonSize = {
        maxWidth: '45px',
        maxHeight: '45px',
        minWidth: '45px',
        minHeight: '45px'
    }

    const linkColor = {
        color: theme.palette.text.primary
    }

    const themeButton = {
        white: { 
            backgroundColor: "white", 
            borderRadius: "10%" },
        dark: { 
            backgroundColor: "black", 
            borderRadius: "10%" },
    }

    const cambiarTema = (activeDarkTheme) => {
        dispatch({ type: "theme", activeDarkTheme: activeDarkTheme })
        //console.log(activeDarkTheme)
    }

    return (
        <Box className={theme} sx={{ marginBottom: "80px" }}>
            <AppBar position="fixed">
                <Toolbar sx={{ marginInline: "75px" }}>
                    <Typography variant="h5" sx={{ flexGrow: "1" }}>
                        <span style={{ color: "red", fontSize: "30px" }}>D</span>H odonto
                    </Typography>
                    <Grid item>
                        <Grid container item direction="row">
                            <Button><Link style={linkColor} to="">Home</Link></Button>
                            <Button><Link style={linkColor} to="contact">Contact</Link></Button>
                            <Button><Link style={linkColor} to="favs">Favs</Link></Button>
                            <Button sx={buttonSize} style={activeDarkTheme ? themeButton.white : themeButton.dark }
                                onClick={() => cambiarTema(activeDarkTheme)}>
                                {activeDarkTheme ?
                                    <LightModeIcon sx={{ color: "black" }} /> : <Brightness2Icon sx={{ color: "yellow" }} />
                                }
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar