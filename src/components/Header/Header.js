import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import bground from '../../images/rectangle1.png';
import logo from '../../images/logo2.png';
import sreemangal from '../../images/Sreemongol.png'
import sundarban from '../../images/sundorbon.png'
import { fade, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Fab from '@material-ui/core/Fab';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import Home from '../Home/Home';
import { UserContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    backgroundColor: "none"
  },
  media: {
    height: 280,
  },
  grid: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: theme.palette.transparent,
  },
  bukinLoginBtn: {
    backgroundColor: 'yellow', color: '#000', width: '100px', height: '45px',
  },
  appBarContainer: {
    paddingTop: theme.spacing(3)
  },
  menubar: {
    flexGrow: 1,
    color: 'white',
    boxShadow: 'none'
  },
  title: {

    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(8),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '10ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  lnkroot: {
    marginLeft: '20px',
    color: 'white',
    fontSize: '20px',
    textDecoration: 'none'
  },
}));

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser.name);
  const classes = useStyles();
  return (
    <div className="header">
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <div className={classes.menubar}>
          <AppBar color="transparent" position="static" style={{ boxShadow: "none" }}>
            <Toolbar>

              <Typography className={classes.title} variant="h6" noWrap>
                <img className="logo" src={logo} alt="" />
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <Link to="/home" className={classes.lnkroot}>news</Link>
              <Link to="/home" className={classes.lnkroot}>Destination</Link>
              <Link to="/home" className={classes.lnkroot}>Blog</Link>
              <Link to="/book" className={classes.lnkroot}>Contact</Link>
              {!loggedInUser.isSignedIn ? (
                <Link to='/logins' style={{ backgroundColor: 'yellow', marginLeft: '20px' }}>
                  Login
                </Link>
              ) : (
                  <Link
                    onClick={() => setLoggedInUser({})}
                    to='/home'
                    style={{ backgroundColor: 'yellow', marginLeft: '20px' }}
                  >
                    Sign Out
                  </Link>
                )}

            </Toolbar>
          </AppBar>
        </div>
      </Container>
      <div>
      </div>

    </div>
  );
};

export default Header;