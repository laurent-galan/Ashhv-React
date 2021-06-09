/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Navbar from '../NavbarBasket'
import { makeStyles } from '@material-ui/core/styles';
import {Grid,} from '@material-ui/core';
import BottomLink from '../BottomLink';
// import {Link} from 'react-router-dom';




const useStyles = makeStyles({
    title: {
       color: 'white',
    },
    img: {
        width:500,
        borderTopRightRadius: 120,
        borderBottomLeftRadius: 120,
    }
    
});


    
export default function basket() {
    const classes = useStyles();
    return (
<div>
        <Navbar/>
    <Grid xs={12} container direction="row" justify="center" alignItems="center">
        <h1 className={classes.title}>Séction Basket-Fauteuil</h1>
    </Grid>
    <Grid xs={12} container justify="center" alignItems="center">
        <Grid xs={6} >
            <img src="http://88.127.124.43:32768/share/WKMtKVBJwC1Bznkd/equipe.jpg" className={classes.img}/>    
        </Grid>
        <Grid xs={4}>
            <p>La section Basket de l'ASHHV est Entrainer par Jean-Michel Pittavino
                elle évolue en Nationnal 2 et s'entraine deux fois par semaine .
                L'équipe se compose de personne handicapé mais aussi de personne 
                Valide . La photos présente actuellement est une photos du dernier
                match (2020) et tout les membres de l'équipe n'y figure pas tous 
                Nous n'avions pas anticipé que nous ne jourions plus de l'année et qu'il 
                nous faudrais une photo d'équipe .</p>
        </Grid>        
    </Grid>
            <BottomLink/>
</div>
    )
}
