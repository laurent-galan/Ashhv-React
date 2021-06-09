/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Navbar from '../NavbarBasket'
import { makeStyles } from '@material-ui/core/styles';
import {Grid,} from '@material-ui/core';
import BottomLink from '../BottomLink';
// import {Link} from 'react-router-dom';
// Image 
import faut from '../../image/fauteuil.jpeg'




const useStyles = makeStyles({

    title: {
       color: 'white',
    },
    faut: {
        width: 300,
        borderTopRightRadius: 120,
        borderBottomLeftRadius: 120,
    }
    
});


    
export default function Principe() {
    const classes = useStyles();
    return (
<div className={classes.all}>
        <Navbar/>
    <Grid xs={12} container direction="row" justify="center" alignItems="center">
        <h1 className={classes.title}>Principe du Basket-Fauteuil</h1>
    </Grid>
    <Grid xs={12} container justify="center" alignItems="center">
        <Grid xs={4}>
            <img src={faut} alt="fauteuil roulant de basket" className={classes.faut}/>
        </Grid>
        <Grid xs={6}>
            <h2>Régles de Bases</h2>
            <p>Le Basket Fauteuil est en de nombreux point Similaire au Basket Ball Valide , les paniers sont à la même hauteur , le terrain est le même le nombre de joueur et aussi le même . 
Ce qui diffère :</p>
            <ul>
                <li>Les reprises de Dribble n'existent pas (on peut arrêter son dribble et le reprendre quand on le souhaite).</li>
                <li>Le Marché existe mais ne sont pas 3 pas sans dribble mais 3 Actions sur le roue sans dribble . </li>
                <li>Les Marche arrière : en basket-Fauteuil l’on ne peut percuté un autre fauteuil en ligne droite en marche arrière.</li>
                <li>Les faute fauteuil : en basket-Fauteuil les contact entre fauteuil peuvent être une faute selon certaine conditions</li>
                <li>les points de chaque joueur : si chaque équipe joue avec 5 joueurs sur le terrain, le total des points de chaque joueur ne doit pas dépasser un certain nombre selon le niveau . (règle permettant d’équilibré le handicap des équipes )</li>
            </ul>
        </Grid>
        
    </Grid>
        <BottomLink/>
</div>
    )
}

