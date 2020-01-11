import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      marginLeft: 25
    }
  })
);

const Header = () => {
  const classes = useStyles();
  const activeStyle = { color: "#FFFFFF" };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            <NavLink to="/" activeStyle={activeStyle} exact>
              Home
            </NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/about" activeStyle={activeStyle}>
              About
            </NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/courses" activeStyle={activeStyle}>
              Courses
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
