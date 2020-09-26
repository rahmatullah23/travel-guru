import { Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../FakeData/index';
import StarIcon from '@material-ui/icons/Star';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
// import './Hotel.css';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 50,
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
const Hotel = () => {
    const classes = useStyles();
  const { title } = useParams();
  const hotels = fakeData.filter(item => item.origin === title);
 
  return (
    <div style={{backgroundColor:'grey', padding:'10px'}}>
      <h5 >Stay in {title}</h5>
   
        <div >
          {hotels.map((hotel) => (
            <div >
              <div >
                <img
                  style={{ maxWidth: 180 }}
                  src={require('../../images/' + hotel.img)}
                  alt=''
                />
              </div>
              <div >
                <h4>{hotel.title}</h4>
                <p>{hotel.details}</p>
                <h5>$ {hotel.price}</h5>
              </div>
            </div>
          ))}
        </div>      
         </div>
  );
};

export default Hotel;
