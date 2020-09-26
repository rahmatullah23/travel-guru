import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, yellow } from '@material-ui/core/colors';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { useHistory } from 'react-router-dom';
import {  Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  
}));

export default function Room({room}){
  const classes = useStyles();
  //  const { title } = useParams();
  // const history = useHistory()
    // const handleBook = (bedType) => {
    //     history.push(`/book/${bedType}`);
    // }
  return (      
    <Card style={{marginTop:'20px'}} >
      <Grid container>
      <Grid container item md={6}>
      <CardMedia
      style={{height: '120px', width: '300px'}}
        className={classes.media}
        image={room.img}
        title="Paella dish"
      />
      </Grid>
      <Grid container item md={6}>
      <CardHeader
        title={room.title}
      />
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
          4 Guest  2bedrooms  2beds  2baths
        </Typography>
      <Typography style={{margin:'10px 0'}} variant="body2" color="textSecondary" component="p">
          Wifi Air Conditioning kitchen 
        </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
          Cancellation flexibility available
        </Typography> 
      </CardContent>
      <CardActions  >
        <IconButton  aria-label="add to favorites">
          <StarIcon style={{ color: yellow[500], fontSize: 16  }}/> <span style={{fontSize:'16px', color:'#000'}}>{room.star}</span> 
        </IconButton>
        <IconButton aria-label="price">
          <AttachMoneyIcon fontSize="small"/> <span style={{fontSize:'16px', color:'#000'}}>{room.price}/night <small>$167 total</small> </span>
        </IconButton>
      </CardActions>
      </Grid>
      </Grid>
    </Card>
  );
}
