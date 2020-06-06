import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles, createStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";
import { Menu, MenuItem } from "@material-ui/core";

const styles = createStyles({ // definicja styli css
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
});

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  handleMobileMenuOpen = event => {
    const { currentTarget } = event;
    this.setState(() => ({
      anchorEl: currentTarget,
    }));
  };

  handleMobileMenuClose = () => {
    this.setState(() => ({
      anchorEl: null,
    }));
  };

  render() {
    const { classes } = this.props; // style
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">

            {/* NAWIGACJA WIDOCZNA NA MOBILCE */}
            <div className={classes.mobileNavWrapper}>
              {/* IKONA HAMBURGERA */}
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                onClick={this.handleMobileMenuOpen}
              >
                <MenuIcon />
              </IconButton>

              {/* NAWIGACJA POJAWIAJĄCA SIĘ PO NACISNIĘCIU PRZYCISKU HAMBURGERA */}
              <Menu
                id="mobile-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={this.handleMobileMenuClose}
                onClick={this.handleMobileMenuClose}
                classes={{ paper: classes.mobileNav }}
              >
                <MenuItem>
                  <NavLink // Komponent z react-router-dom odpowiedzialny za załadowanie innego komponentu
                    to="/planets"
                    activeClassName={classes.menuListItemAnchorActive}
                    className={classes.menuListDesktopItemAnchor}
                  >
                    <p>Planets</p>
                  </NavLink>
                </MenuItem>

                <MenuItem>
                  <NavLink  // Komponent z react-router-dom odpowiedzialny za załadowanie innego komponentu
                    to="/people"
                    activeClassName={classes.menuListItemAnchorActive}
                    className={classes.menuListDesktopItemAnchor}
                  >
                    <p>People</p>
                  </NavLink>
                </MenuItem>

                <MenuItem>
                  <NavLink
                    to="/vehicles"  // Komponent z react-router-dom odpowiedzialny za załadowanie innego komponentu
                    activeClassName={classes.menuListItemAnchorActive}
                    className={classes.menuListDesktopItemAnchor}
                  >
                    <p>Vehicles</p>
                  </NavLink>
                </MenuItem>

              </Menu>
            </div>

            {/* NAZWA APLIKACJI */}
            <Typography variant="h6" color="inherit">
              STAR WARS
            </Typography>

            {/* NAWIGACJA WIDOCZNA NA DESKTOP */}
            <ul className={classes.menuListDesktop}>
              <li className={classes.menuListDesktopItem}>
                <NavLink // Komponent z react-router-dom odpowiedzialny za załadowanie innego komponentu
                  to="/planets"
                  activeClassName={classes.menuListItemAnchorActive}
                  className={classes.menuListDesktopItemAnchor}
                >
                  <p>Planets</p>
                </NavLink>
              </li>
              <li className={classes.menuListDesktopItem}>
                <NavLink // Komponent z react-router-dom odpowiedzialny za załadowanie innego komponentu
                  to="/people"
                  activeClassName={classes.menuListItemAnchorActive}
                  className={classes.menuListDesktopItemAnchor}
                >
                  <p>People</p>
                </NavLink>
              </li>
              <li className={classes.menuListDesktopItem}>
                <NavLink // Komponent z react-router-dom odpowiedzialny za załadowanie innego komponentu
                  to="/vehicles"
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

export default withStyles(styles)(Navigation); // dodanie styli css do this.props naszego komponentu
