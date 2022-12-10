import React, { useContext } from "react"
import { ContextGlobal } from "./utils/global.context";
import { images } from "./utils/images";
import { Box, Grid, Button, Container } from "@mui/material";


const Footer = () => {
    const { store } = useContext(ContextGlobal);
    const { icons, logos } = images;
    const { logoSrc, logoAlt } = logos;
    const { state } = store;
    const { activeDarkTheme } = state;

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <footer style={{ display: "flex", flexDirection: "column" }}>
            <Button variant="contained" onClick={() => scrollToTop()}
                sx={{
                    width: "100%",
                    fontSize: "15px",
                    padding: "1rem",
                    borderRadius: "0",
                    color: "#fff",
                    backgroundColor: "#e61919",
                    "&:hover": {
                        backgroundColor: "#ff4040",
                        color: "#fff",
                    },
                }}>
                Ir hacia arriba
            </Button>

            <Box component="footer">
                <Container >
                    <Grid container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <Grid item>
                            <img className={activeDarkTheme ? "footerImgs" : ""}
                                style={{ width: "260px" }}
                                src={logoSrc} alt={logoAlt}>
                            </img>
                        </Grid>
                        <Grid item sx={{display: "flex", gap: "12px"}}>
                            {
                                icons.map(({ iconSrc, iconAlt }) => {
                                    return (
                                        <img
                                            key={iconAlt}
                                            className={activeDarkTheme ? "" : "footerImgs"}
                                            style={{ width: "27px" }}
                                            src={iconSrc}
                                            alt={iconAlt}>
                                        </img>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer
