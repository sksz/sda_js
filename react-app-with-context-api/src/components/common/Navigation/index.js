import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles, createStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";
import { Menu, MenuItem } from "@material-ui/core";
import SearchBar from "./SearchBar";

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "15px",
  },
  mobileNavWrapper: {
    display: "block",
    "@media (min-width:600px)": {
      display: "none",
    },
  },
  mobileNav: {
    backgroundColor: "#3f51b5",
  },
  menuListDesktop: {
    padding: 0,
    justifyContent: "space-between",
    alignItems: "center",
    listStyleType: "none",
    display: "none",
    "@media (min-width:600px)": {
      display: "flex",
    },
  },
  menuListDesktopItem: {
    padding: "20px",
  },
  menuListDesktopItemAnchor: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      color: "#ccc",
    },
  },
  menuListItemAnchorActive: {
    textDecoration: "underline",
  },
  search: {
    position: "relative",
    borderRadius: 0,
    backgroundColor: "#fff",
    marginRight: "10px",
    paddingLeft: "15px",
    width: "100%",
    "@media (min-width:600px)": {
      marginLeft: "15px",
      width: "auto",
    },
  },
});

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  handleClick = (event) => {
    const { currentTarget } = event;
    this.setState(() => ({
      anchorEl: currentTarget,
    }));
  };

  handleClose = () => {
    this.setState(() => ({
      anchorEl: null,
    }));
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <div className={classes.mobileNavWrapper}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                aria-controls="mobile-menu"
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="mobile-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                classes={{ paper: classes.mobileNav }}
              >
                <MenuItem onClick={this.handleClose}>
                  <NavLink
                    to="/planets"
                    aria-label="go to planets page"
                    activeClassName={classes.menuListItemAnchorActive}
                    className={classes.menuListDesktopItemAnchor}
                  >
                    <p>Planets</p>
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={this.handleClose}>
                  <NavLink
                    to="/people"
                    aria-label="go to planets page"
                    activeClassName={classes.menuListItemAnchorActive}
                    className={classes.menuListDesktopItemAnchor}
                  >
                    <p>People</p>
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={this.handleClose}>
                  <NavLink
                    to="/vehicles"
                    aria-label="go to planets page"
                    activeClassName={classes.menuListItemAnchorActive}
                    className={classes.menuListDesktopItemAnchor}
                  >
                    <p>Vehicles</p>
                  </NavLink>
                </MenuItem>
              </Menu>
            </div>

            <Typography variant="h6" color="inherit" component="h1">
              STAR WARS
            </Typography>

            <SearchBar />

            <ul className={classes.menuListDesktop}>
              <li className={classes.menuListDesktopItem}>
                <NavLink
                  to="/planets"
                  aria-label="go to planets page"
                  activeClassName={classes.menuListItemAnchorActive}
                  className={classes.menuListDesktopItemAnchor}
                >
                  <p>Planets</p>
                </NavLink>
              </li>
              <li className={classes.menuListDesktopItem}>
                <NavLink
                  to="/people"
                  aria-label="go to planets page"
                  activeClassName={classes.menuListItemAnchorActive}
                  className={classes.menuListDesktopItemAnchor}
                >
                  <p>People</p>
                </NavLink>
              </li>
              <li className={classes.menuListDesktopItem}>
                <NavLink
                  to="/vehicles"
                  aria-label="go to planets page"
                  activeClassName={classes.menuListItemAnchorActive}
                  className={classes.menuListDesktopItemAnchor}
                >
                  <p>Vehicles</p>
                </NavLink>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navigation);
