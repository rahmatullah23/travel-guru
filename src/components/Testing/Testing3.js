import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1.5),
      
      width: 140,
    },
  }));

const Testing3 = () => {
    const classes = useStyles();
    return (
        <div>
            <Container>
            
            <Grid container spacing={3}>
        <Grid container   direction="row"   justify="center"   alignItems="center" item md={6}>
          <Typography>
              <h1>COX'S BAZAR'</h1>
              <p>Cox's Bazar is a town on the southeaset coast of Bangladesh. It's knowns for it's very long, sandy, beachfront, stretching from sea beach in the north to Kolatoli Beach in the south. Aggameda khyang monsastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.  </p>
          </Typography>
        </Grid>
        <Grid  container  justify="center"   alignItems="center" item md={6}>
        
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Origin" fullWidth  />
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Destination" fullWidth  />
        </Grid>
      </Grid>
      <Grid style={{ marginTop:'20px'}} container spacing={3}>
        <form   className={classes.container} >
      <TextField
        id="date"
        label="From"
        type="date"
        defaultValue="2020-09-21"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
        <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="To"
        type="date"
        defaultValue="2020-10-21"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    </Grid>
    <Grid >
    <div style={{marginTop:'20px'}} > 
            
                  <Button size="medium" variant="contained" >
                    Start booking
                  </Button>
             
                
            </div>
    </Grid>
        </Grid>
        </Grid>
            </Container>
        </div>
    );
};

export default Testing3;