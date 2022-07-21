import * as React from 'react';
import Card from '@mui/material/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  }
}));

const MovieCard = ({ movie, handleUpdate }) => {
  const {id, name, img_link, genre, year, rating, favorite} = movie

  const classes = useStyles();
 
  const handleClick = () => {

    // console.log('MOVIE:', movie)
    // setFavorite(favorite => !favorite)
    fetch(`http://localhost:3001/movies/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        favorite: !favorite 
      })
    }).then(res => res.json())
      .then(movieData => {
        handleUpdate(movieData)
      })
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        height="500"
        image={ img_link }
        alt={ name }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { name }
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Genre: { genre }
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Year: { year }
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Rating: { rating }
        </Typography>   
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites" color={favorite ? 'secondary' : 'inherit'} onClick={handleClick}>
          <FavoriteIcon/>
        </IconButton>         
      </CardActions>
    </Card>
  );
}

export default MovieCard