/* eslint-disable jsx-a11y/alt-text */
import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Card} from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
// icons
import {FaBasketballBall, FaSkiing, FaChild} from "react-icons/fa";
import {GiJumpAcross, GiSawedOffShotgun, GiTeamDowngrade} from "react-icons/gi";
import {BiSwim} from "react-icons/bi";

const useStyles = makeStyles({
    title: {
     fontFamily:'ubuntu',
    },
    img: {
        width: 600,
        marginLeft: -45,
    },
    navleft: {
        width: 170,
        backgroundColor: 'grey',
        color: 'black',
        marginRight: 80,
        marginLeft: -40,
        borderRadius: 20,
    },
    navright: {
        width: 200,
    },
    linetwo: {
        marginTop: 20,
    },
    cardtxt: {
        padding: 20,
        backgroundColor: 'grey',
        borderTopRightRadius: 60,
        borderBottomLeftRadius: 60,
    },
    bold: {
        fontWeight: 700,
    },
    underline: {
        textDecorationLine: 'underline',
    },
    paraimg: {
        width: 500,
        marginTop: 70,
    }

});

export default function Home(){
    const classes = useStyles();
    


return (
<div>
    <Grid container xs={12} direction="row" justify="center" alignItems="center">
        <h1 className={classes.title}>Bienvenue à l'ASHHV</h1>
    </Grid>
    <Grid sx={12} container direction="row"  alignItems="flex-start" justify="space-evenly">
        <Grid xs={2}alignItems="flex-start">
        <MenuList className={classes.navleft}>
        <MenuItem className={classes.listline}>
            <Typography variant="inherit" className={classes.align}>Basket</Typography>
            <ListItemIcon>
                    <FaBasketballBall/>
            </ListItemIcon>
        </MenuItem>
        <MenuItem>
            <Typography variant="inherit">Athlétisme</Typography>
            <ListItemIcon>
                    <GiJumpAcross/>
            </ListItemIcon>
        </MenuItem>
        <MenuItem>
            <Typography variant="inherit">Natation</Typography>
            <ListItemIcon>
                    <BiSwim/>
            </ListItemIcon>
        </MenuItem>
        <MenuItem>
            <Typography variant="inherit">Sky Alpin</Typography>
            <ListItemIcon>
                    <FaSkiing/>
            </ListItemIcon>
        </MenuItem>
        <MenuItem>
            <Typography variant="inherit">Tir Sportif</Typography>
            <ListItemIcon>
                    <GiSawedOffShotgun/>
            </ListItemIcon>
        </MenuItem>
        <MenuItem>
            <Typography variant="inherit">Section Jeune</Typography>
            <ListItemIcon>
                    <FaChild/>
            </ListItemIcon>
        </MenuItem>
        <MenuItem>
            <Typography variant="inherit">Joëlette</Typography>
            <ListItemIcon>
                    <GiTeamDowngrade/>
            </ListItemIcon>
        </MenuItem>
        </MenuList>
        </Grid>
        <Grid xs={6}>
        <img src='http://88.127.124.43:32768/share/USyJapJDlENWnweZ/default.png'className={classes.img}/>
        </Grid>
    </Grid>
    <Grid xs={12} className={classes.linetwo} container direction="row" justify="center">
        <Grid xs={5}>
            <Card className={classes.cardtxt}>
                <p>Comme le disait si bien <span className={classes.bold}>Stephen Hawking</span> <span className={classes.underline}>“Le handicap ne peut pas être un handicap”</span> .
                    Être Handicapé c’est être différent mais ne pas savoir vivre malgré cela est le seul vrai Handicap . Aussi handicapé qu’est pu être <span className={classes.bold}>Stephen Hawking</span> il a montré que s’il ne pouvait s'élever par le corps il le pouvait par l'esprit .  Au sein de l’ <span className={classes.bold}>ASHHV</span> handicapé comme valide surmonte les barrières et les limites des handicaps autour de pratique sportive  . Venir se dépenser à l’ASHHV c’est laisser tomber les préjugés et se trouver après l'entraînement aussi (voir parfois plus) fatigué qu'après un entraînement dans des sport “valide” mais en se trouvant éclairé sur le handicap et heureux de s’être bien marré . 
                </p>
            </Card>
        </Grid>
        <Grid xs={5}>
            <img src='http://88.127.124.43:32768/share/T1uGaSpEXUr1bdo2/paralympique.jpeg' className={classes.paraimg}/>
        </Grid>
    </Grid>
    <Grid>
        <p>Contact</p>
    </Grid>

</div>
)
}
