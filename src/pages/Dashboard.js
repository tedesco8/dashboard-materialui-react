import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../components/NavBar";
import "fontsource-roboto";
import "../assets/css/Dashboard.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PublicIcon from "@material-ui/icons/Public";
import VideocamIcon from "@material-ui/icons/Videocam";
import CardHeader from "../components/CardHeader";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  iconos: {
    color: "white",
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12} sm={4} md={4} ls={4} xl={4}>
          <CardHeader icono={<YouTubeIcon className={classes.iconos} />} titulo="CANAL" texto="TedescoDev" color="rgba(246, 80, 50, 1)" font="white" />
        </Grid>
        <Grid item xs={12} sm={4} md={4} ls={4} xl={4}>
          <CardHeader icono={<PublicIcon className={classes.iconos} />} titulo="WEB" texto="TedescoDev" color="rgba(255, 165, 50, 1)" font="white" />
        </Grid>
        <Grid item xs={12} sm={4} md={4} ls={4} xl={4}>
          <CardHeader icono={<VideocamIcon className={classes.iconos} />} titulo="VIDEOS" texto="TedescoDev" color="rgba(60, 179, 113, 1)" font="white" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
