import * as React from 'react';
// import { useState } from 'react';
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

const MovieCard = ({ movie }) => {

  // const [favorite, setFavorite] = useState(0)
  const classes = useStyles();

  const handleClick = (e) => {
    console.log(e.target);
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        height="500"
        image={ movie.img_link }
        alt={ movie.name }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { movie.name }
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Genre: { movie.genre }
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Year: { movie.year }
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Rating: { movie.rating }
        </Typography>   
      </CardContent>
      <CardActions onClick={handleClick}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>         
      </CardActions>
    </Card>
  );
}

export default MovieCard