import React from 'react';
// import './Home.css';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Destination from '../Destination/Destination';
import fakeData from '../FakeData/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();

  const location = fakeData;
    console.log(location)
  return (
    <div className='marginTop'>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item md={4} className={classes.detail}>
            <div style={{color: 'white'}}>
              <h1>COX'S BAZAR</h1>
              <p>Cox's Bazar is a town on the southeaset coast of Bangladesh. It's knowns for it's very long, sandy, beachfront, stretching from sea beach in the north to Kolatoli Beach in the south. Aggameda khyang monsastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
              <a href='/booking/1' className='btn btn-warning my-2 mr-sm-0'>
                Booking
              </a>
            </div> 
            </Grid>
            <Grid container item md={8} spacing={2} >
          
          <Grid item md={2}>
            <Destination location={location[0]}></Destination>
          </Grid>
          <Grid item md={2}>
            <Destination location={location[1]}></Destination>
          </Grid>
          <Grid item md={2}>
            <Destination location={location[2]}></Destination>
          </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
