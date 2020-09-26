import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

const Destination = (props) => {
   
  const { id, title, img } = props.location;
  console.log(title);


  return (
    <div>
      <Link to={`/booking/${id}`}>
        <Card>
          <CardActionArea>
            <div style={{ position: 'relative' }}>
              <CardMedia
                component='img'
                alt='Contemplative Reptile'
                height='240'
                image={require('../../images/' + img)}
               
              />
              <div
                style={{
                  position: 'absolute',
                  color: 'white',
                  bottom: 8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                {title}
              </div>
            </div>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

export default Destination;
