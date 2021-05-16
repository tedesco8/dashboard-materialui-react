import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../assets/img/TedescoDevBlanco.jpg';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "16px",
  },
  title: {
    flexGrow: 1,
  },
  imagen: {
    borderRadius: "50%",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            TedescoDev
          </Typography>
          <IconButton color="inherit">
            <img
              src={Logo}
              alt=""
              width="40px"
              height="40px"
              className={classes.imagen}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
