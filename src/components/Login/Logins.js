import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'white',
    padding: '20px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Logins = () => {
    const toggleSignUp = () => {
        setNewUser(true);
      };
      const toggleSign = () => {
        setNewUser(false);
      };
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
      isSignedIn: false,
      name: '',
      email: '',
      password: '',
      photo: ''
    });
  
    initializeLoginFramework();
  
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
  
    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
          handleResponse(res, true);
        })
    }
  
    const fbSignIn = () => {
        handleFbSignIn()
        .then(res => {
          handleResponse(res, true);
        })
  
    }
  
    const signOut = () => {
        handleSignOut()
        .then(res => {
            handleResponse(res, false);
        })
    }
  
    const handleResponse = (res, redirect) =>{
      setUser(res);
      setLoggedInUser(res);
      if(redirect){
          history.replace(from);
      }
    }
  
    const handleBlur = (e) => {
      let isFieldValid = true;
      if(e.target.name === 'email'){
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      }
      if(e.target.name === 'password'){
        const isPasswordValid = e.target.value.length > 6;
        const passwordHasNumber =  /\d{1}/.test(e.target.value);
        isFieldValid = isPasswordValid && passwordHasNumber;
      }
      if(isFieldValid){
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
      }
    }
    const handleSubmit = (e) => {
      if(newUser && user.email && user.password){
        createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
      }
  
      if(!newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
      }
      e.preventDefault();
    }
    console.log(handleBlur)
  const classes = useStyles();
  return (
    <Container  component="main" maxWidth="xs">
      <CssBaseline />
      {!loggedInUser.isSignedIn && (
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        {newUser?(
        <Typography component="h1" variant="h5">
          Create an account
        </Typography>):(
        <Typography component="h1" variant="h5">
          Log In
        </Typography>)}
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
              {newUser && (
          <Grid  item >
              <TextField
              onBlur={handleBlur}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="FirstName"
                label="First Name"
                autoFocus
              />
              <TextField
              style={{ marginTop:'20px'}}
              onBlur={handleBlur}
                autoComplete="lname"
                name="lastName"
                variant="outlined"
                required
                fullWidth
                id="LastName"
                label="Last Name"
                autoFocus
              />
              </Grid>)
                }
              
            
            <Grid item xs={12}>
              <TextField 
                onBlur={handleBlur}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                onBlur={handleBlur}   
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            {newUser && (
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm-password"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                autoComplete="current-password"
              />
            </Grid>
            )}
             <Grid  item xs={12}>
                {
                    newUser ? <Button type='submit' fullWidth variant="contained" color="primary" >Create an account</Button>
                    : <Button  type='submit' fullWidth variant="contained" color="primary"> Login </Button>
                } 
                </Grid> 
          </Grid>
           
          <Grid style={{marginTop:'20px'}}>
          {!newUser ? (
            <label className='pt-2 alignCenter'>
              Don't have an account?{' '}
              <Link
                to='/login'
                onClick={toggleSignUp}
                className='customAnchor'
              >
                Create a Account
              </Link>
            </label>
          ) : (
            <label className='pt-2 alignCenter'>
              Already have an account?{' '}
              <Link
                to='/login'
                onClick={toggleSign}
                className='customAnchor'
              >
                Login
              </Link>
            </label>
          )}
          </Grid>
        </form>
      
      
      { user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
        <Button 
        type="submit"
        fullWidth
        variant="outlined"
        color="primary"
        className={classes.submit} 
        onClick={fbSignIn}
        >
            Continue with Facebook
        </Button>
      }
      
      { user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
        <Button 
        style={{ marginTop:0}}
        type="submit"
        fullWidth
        variant="outlined"
        color="primary"
        className={classes.submit} 
         onClick={googleSignIn}
         >
             Continue with Google</Button>
      }
      </div> )}
      
      {user.success && (
        <p style={{ color: 'green' }}>
          {newUser ? 'Create User' : 'Login In'} Successfully
        </p>
      )}
    
    </Container>
  );
};
export default Logins;