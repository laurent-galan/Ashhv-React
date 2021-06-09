/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Tabs, Tab, Grid,} from '@material-ui/core';
import {Link} from 'react-router-dom';
// Image 
import Logo from '../image/ashhv.png';



const useStyles = makeStyles({
    navbar: {
       color: 'white',
       backgroundColor: 'red',
       borderRadius: 40,
    },
    logo: {
        width:100,
        borderRadius: 20,
    }
});

export default function Navbar() {
    const classes = useStyles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState(2);

   

return(
    <Grid container  direction="row"  justify="space-between"  alignItems="stretch" spacing={3}>
        <Grid item xs={2}>
      <Link to="/home">
        <img src={Logo} alt="logo représentant une béquille, un prothése devant une roue de fauteuil avec inscrit ASHHV" className={classes.logo}/>
      </Link>
        </Grid>
        <Grid item xs={10}>
            <Tabs 
            className={classes.navbar}
            value={value}
            indicatorColor="primary"
            textColor="black"
            onChange={handleChange}
            aria-label="disabled tabs example"
            >
          <Link to="/home">
            <Tab label="Home" />
          </Link>
          <Link to="/basket-fauteuil/principe">
            <Tab label="Principe" />
          </Link>
          <Link to="/">
            <Tab label="Resultats" />
          </Link>
          <Link to="/">
            <Tab label="Actions"/>
          </Link>
          <Link to="/">
            <Tab label="contact"/>
          </Link>
            </Tabs>
        </Grid>
    </Grid>
)
}