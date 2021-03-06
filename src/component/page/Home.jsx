/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'; 
import {Link} from 'react-router-dom';
import '../../index.css';
import styled from 'styled-components';
import BottomLink from '../BottomLink';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Card} from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
// icons
import {FaBasketballBall, FaSkiing, FaChild, FaFacebook, FaPaperPlane} from "react-icons/fa";
import {GiJumpAcross, GiSawedOffShotgun, GiTeamDowngrade} from "react-icons/gi";
import {BiSwim} from "react-icons/bi";
// Image 
import Montage from '../../image/default.png';
import Para from '../../image/paralympique.jpeg';
import Handi from '../../image/handicap.jpeg';

const useStyles = makeStyles({
    title: {
     fontFamily:'ubuntu',
    },
    img: {
        width: 500,
        // marginLeft: -45,
        borderRadius: 20,
    },
    navleft: {
        width: 160,
        backgroundColor: 'grey',
        color: 'black',
        borderRadius: 20,
    },
    linetwo: {
        marginTop: 20,
    },
    linethree: {
        marginTop:20,
    },
    cardtxt: {
        padding: 20,
        backgroundColor: 'grey',
        borderTopRightRadius: 60,
        borderBottomLeftRadius: 60,
    },
    cardtxtTwo: {
        padding: 20,
        backgroundColor: 'grey',
        borderTopRightRadius: 60,
        borderBottomLeftRadius: 60,
        paddingTop: 60,
        paddingBottom:60,
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
    },
    peopleimg: {
        width: 400,
        marginLeft: 30,
        marginTop:45,
    }

});

const StyledBody = styled.div`
  

//   position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
//   width: 100%;
  height: 200%;
`;
export default function Home(){
    const classes = useStyles();
    


return (
<StyledBody>
<div>
<Grid container xs={12} direction="row" justify="center" alignItems="center">
        <h1 className={classes.title}>Bienvenue ?? l'ASHHV</h1>
    </Grid>
        <Grid sx={12} container direction="row"  alignItems="center" justify="space-between">
            <Grid xs={2}alignItems="flex-start">
            <MenuList className={classes.navleft}>
            <MenuItem className={classes.listline}>
                <Link to="/basket-fauteuil">
                <Typography variant="inherit" className={classes.align}>Basket</Typography>
                </Link>
                <ListItemIcon>
                        <FaBasketballBall/>
                </ListItemIcon>
            </MenuItem>
            <MenuItem>
                <Typography variant="inherit">Athl??tisme$</Typography>
                <ListItemIcon>
                        <GiJumpAcross/>
                </ListItemIcon>
            </MenuItem>
            <MenuItem>
                <Typography variant="inherit">Natation$</Typography>
                <ListItemIcon>
                        <BiSwim/>
                </ListItemIcon>
            </MenuItem>
            <MenuItem>
                <Typography variant="inherit">Sky Alpin$</Typography>
                <ListItemIcon>
                        <FaSkiing/>
                </ListItemIcon>
            </MenuItem>
            <MenuItem>
                <Typography variant="inherit">Tir Sportif$</Typography>
                <ListItemIcon>
                        <GiSawedOffShotgun/>
                </ListItemIcon>
            </MenuItem>
            <MenuItem>
                <Typography variant="inherit">Section Jeune$</Typography>
                <ListItemIcon>
                        <FaChild/>
                </ListItemIcon>
            </MenuItem>
            <MenuItem>
                <Typography variant="inherit">Jo??lette$</Typography>
                <ListItemIcon>
                        <GiTeamDowngrade/>
                </ListItemIcon>
            </MenuItem>
            </MenuList>
        </Grid>
            <Grid xs={6}>
            <img src={Montage}className={classes.img}/>
            </Grid>
        <Grid xs={2}alignItems="flex-start">
        <MenuList className={classes.navleft}>
        <MenuItem className={classes.listline}>
            <Typography variant="inherit" className={classes.align}>Contact$</Typography>
            <ListItemIcon>
                    <FaPaperPlane/>
            </ListItemIcon>
        </MenuItem>
        <MenuItem>
            <Typography variant="inherit">Facebook$</Typography>
            <ListItemIcon>
                    <FaFacebook/>
            </ListItemIcon>
        </MenuItem>
        </MenuList>
        </Grid>
    </Grid>
    <Grid xs={12} className={classes.linetwo} container direction="row" justify="center">
        <Grid xs={5}>
            <Card className={classes.cardtxt}>
                <p>Comme le disait si bien <span className={classes.bold}>Stephen Hawking</span> <span className={classes.underline}>???Le handicap ne peut pas ??tre un handicap???</span> .
                    ??tre Handicap?? c???est ??tre diff??rent mais ne pas savoir vivre malgr?? cela est le seul vrai Handicap . Aussi handicap?? qu???est pu ??tre <span className={classes.bold}>Stephen Hawking</span> il a montr?? que s???il ne pouvait s'??lever par le corps il le pouvait par l'esprit .  Au sein de l??? <span className={classes.bold}>ASHHV</span> handicap?? comme valide surmonte les barri??res et les limites des handicaps autour de pratique sportive  . Venir se d??penser ?? l???ASHHV c???est laisser tomber les pr??jug??s et se trouver apr??s l'entra??nement aussi (voir parfois plus) fatigu?? qu'apr??s un entra??nement dans des sport ???valide??? mais en se trouvant ??clair?? sur le handicap et heureux de s?????tre bien marr?? . 
                </p>
            </Card>
        </Grid>
        <Grid xs={5}>
            <img src={Para} alt="image d'une course durant une comp??tition d'athl??tisme" className={classes.paraimg}/>
        </Grid>
    </Grid>
    <Grid xs={12} className={classes.linethree} container direction="row" justify="center">
        <Grid xs={5}>
            <img src={Handi} alt="ombre de persone qui se croise valide dont un handicaper en fauteuil roulant"  className={classes.peopleimg}/>
        </Grid>
        <Grid xs={5}>
            <Card className={classes.cardtxtTwo}>
            <p>Parce que tout <span className={classes.bold}>handicap??</span> ?? un jours connu ces <span className={classes.bold}>regards</span> , ses <span className={classes.bold}>pr??jug??s</span> sur le <span className={classes.bold}>Handicap</span> .
            L??? <span className={classes.bold}>ASHHV</span> ce n???est pas un club d???Handicap?? r??serv?? au Handicap?? .Nous sommes un <span className={classes.bold}>club de sport multisport</span> ouvert au <span className={classes.bold}>Handicap?? mais pas seulement</span>
             ! Toute personne peut <span className={classes.bold}>venir faire du sport ?? l???ASHHV</span> , si cette personne est handicap?? elle se sentira comme les autres et si cette personne est valide elle sera <span className={classes.bold}></span>d??lester des pr??jug??s et comme tout sportif : fatigu??! </p>
            </Card>
        </Grid>
    </Grid>
    <BottomLink/>
</div>
</StyledBody> 
)
}
