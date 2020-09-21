import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import bground from '../../images/rectangle1.png';
import logo from '../../images/logo2.png';
import sreemangal from '../../images/Sreemongol.png'
import sundarban from '../../images/sundorbon.png'
import { fade,makeStyles } from '@material-ui/core/styles';
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
      color:'white',
      fontSize:'20px',
      textDecoration: 'none'
  },
}));

const Header = () => {

    const classes = useStyles();
    return (
        <div  style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bground})` }} className="header">           
            <Container maxWidth="lg" className={classes.blogsContainer}>
            <div  className={classes.menubar}>
      <AppBar color ="transparent" position="static"style={{boxShadow: "none"}}>
        <Toolbar>
          
          <Typography className={classes.title} variant="h6" noWrap>
          <img  className="logo" src={logo} alt="" />
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
          
      
      <Link className={classes.lnkroot}>
        news
      </Link>
      <Link to="/home" className={classes.lnkroot} >
        views
      </Link >
      <Link to="/home" className={classes.lnkroot}>Destination</Link>
      <Link to="/home" className={classes.lnkroot}>Blog</Link>
      <Link to="/book" className={classes.lnkroot}>Contact</Link>
      <Link to="/login"><Button className={classes.bukinLoginBtn}>Login</Button></Link>

          

        </Toolbar>
      </AppBar>
    </div>
                    
                </Container>

           
            
            <nav  className="nav">
                <ul >
                    <li style={{marginTop:'30px'}} >
                        <img  className="logo" src={logo} alt="" />
                    </li>
                    <li>
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
                    </li>
                    <li>
                        <Link to="/home">News</Link>
                    </li>
                    <li>
                        <Link to="/home">Destination</Link>
                    </li>
                    <li>
                        <Link to="/home">Blog</Link>
                    </li>

                    <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>
                    <li >
                        <Link to="/login"><Button className={classes.bukinLoginBtn}>Login</Button></Link>
                    </li>
                </ul>
            </nav>

            <div>
                <Grid style={{ marginTop: '120px', marginLeft: '60px' }} container spacing={5}>
                    <Box>
                        <Typography style={{ height: '300px', width: '400px', color: 'white' }} >
                            <h1 style={{ fontSize: '60px', margin: '0' }}>COX'S BAZAR</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,psum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit. R dicta.</p>
                            <Button variant="contained" className={classes.bukinLoginBtn}>booking  <ArrowForwardIcon /></Button>
                        </Typography>
                    </Box>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={bground}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography align="center" gutterBottom variant="h4" component="h2">
                                        COX'S BAZAR
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={sreemangal}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography align="center" gutterBottom variant="h4" component="h2">
                                        SREEMANGAL
                                        </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={sundarban}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography align="center" gutterBottom variant="h4" component="h2">
                                        SUNDARBANS
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>            
            <div style={{marginTop:"30px"}}>   >
                <Grid container spacing={3}>
                    <Grid container alignItems="flex-start" justify="flex-end" direction="row" item xs={6} >
                        <Fab >
                            <ArrowBackIosRoundedIcon />
                        </Fab>
                    </Grid>
                    <Grid item justify='center' xs={6} >
                        <Fab color="red" aria-label="add">
                            <ArrowForwardIosRoundedIcon />
                        </Fab>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Header;