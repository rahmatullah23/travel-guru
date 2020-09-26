import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import fakeData from '../FakeData/index';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
// import './Booking.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '250px',
      backgroundColor: 'white',
      padding: '10px'
    },
  },
}));

const Booking = () => {
  const classes = useStyles();
  const { id } = useParams();

  const locations = fakeData.filter(item => item.id === parseInt(id));
  const { title, details } = locations[0];

  return (
    <div>
        <Container>
      <Grid container spacing={5}>
        <Grid container   direction="row"   justify="center"   alignItems="center" item md={5}>
          <Typography style={{color: 'white'}}>
            <h1>{title}</h1>
            <p>{details}</p>
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <form className={classes.root} noValidate autoComplete='off'>
            <Grid container direction={'column'} spacing={3}>
              <Grid item>
                <TextField
                  id='cardName'
                  label='Origin'
                  variant='outlined'
                  required
                 
                />
              </Grid>
              <Grid item>
                <TextField
                  id='expDate'
                  label='Destination'
                  variant='outlined'
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  id='date'
                  label='From'
                  type='date'
                  defaultValue='2020-09-24'
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  id='date'
                  label='To'
                  type='date'
                  defaultValue='2020-10-24'
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
              </Grid>
              <Grid item>
                <Link to={`/hotel/${title}`} className='btn btn-warning '>
                  Start Booking
                </Link>
              </Grid>
            </Grid>
          </form>
          
        </Grid>
        </Grid>
 
      </Container>
    </div>
  );
};

export default Booking;
