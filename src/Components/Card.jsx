import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { images } from "./utils/images";
import { ContextGlobal } from "./utils/global.context";
import { Typography, Card as MaterialCard, CardMedia, CardContent, Button } from "@mui/material";


const Card = ({ name, username, id }) => {

    const { dentistImage } = images;
    const { dentistSrc, dentistAlt } = dentistImage;
    const { store } = useContext(ContextGlobal);
    const { state, dispatch } = store;
    const { dentistFavs, activeDarkTheme } = state;

    const isFav = (id) => {
        return dentistFavs.filter(dentist => dentist.id === id).length > 0
    }

    const handleFav = (dentistFavs, name, username, id) => {
        let newStorageDentists = dentistFavs;
        if (newStorageDentists.filter(e => e.id === id) < 1) {
            newStorageDentists.push({ name, username, id })
            alert("Dentist added succesfully");
        } else {
            newStorageDentists = newStorageDentists.filter(e => e.id !== id)
            alert("Dentist removed succesfully");
        }
        localStorage.setItem("favs", JSON.stringify(newStorageDentists));
        dispatch({ type: "dentistFavs", dentistFavs: newStorageDentists })

    }

    return (
        <MaterialCard sx={{ width: 250 }}>
            <CardMedia
                component="img"
                height="220"
                image={dentistSrc}
                alt={dentistAlt}
            />
            <CardContent>
                <Typography sx={{ 
                    fontSize: "15px", 
                    padding: "0", 
                    textAlign: "center" 
                    }}>
                    <Link className={activeDarkTheme ? "linkDark" : ""} to={`/detail/${id}`}>{name}</Link>
                </Typography>
                <Typography sx={{ 
                    paddingBottom: "10px", 
                    margin: "0", 
                    textAlign: "center" 
                    }}>{username}</Typography>
                <Button sx={{ 
                    backgroundColor: "rgba(136, 136, 136, 0.468)", 
                    '&:hover': { 
                        backgroundColor: "#0047AB" 
                        } }} onClick={() => handleFav(dentistFavs, name, username, id)} 
                        className="favButton"> {isFav(id) ? "❌" : "⭐"}
                        </Button>
            </CardContent>
        </MaterialCard>
    );
};

export default Card;
