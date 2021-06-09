import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    all: {
        marginTop: 40,
       color: 'white',
    },
    link: {
        color: 'white',
    }
});


export default function BottomLink() {
    const classes = useStyles();

return (
<div>
    <Grid container direction="row"  alignItems="flex-start" justify="space-evenly"className={classes.all}>
        {/* <link to="/"className={classes.link}> */}
            <p>Home</p>
        {/* </link> */}
        {/* <Link to="/" className={classes.link}> */}
            <p>Mentions Légales$</p>
        {/* </Link> */}
        <Link to="/" className={classes.link}>
            <p>Contact$</p>
        </Link>
    </Grid>
</div>
    )
}
