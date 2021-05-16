import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    }
}))


const Dashboard = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <NavBar />
                </Grid>
            </Grid>
        </div>
    );
}

export default Dashboard;
