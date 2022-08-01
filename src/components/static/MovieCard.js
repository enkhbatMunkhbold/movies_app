import React, { useState} from 'react';
import Card from '@mui/material/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
// import MovieDetails from './MovieDetails'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  deleteBtn: {
    marginLeft: 60
  }
}));

const MovieCard = ({ movie, handleUpdate, handleRemoveMovie }) => {
  const { id, name, img_link, genre, favorite } = movie
  const [anchorEl, setAnchorEl] = useState(null)

  const classes = useStyles();
 
  const handleClick = () => {
    fetch(`http://localhost:3001/movies/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        favorite: !favorite 
      })
    }).then(res => res.json())
      .then(movieData => handleUpdate(movieData))
  }

  const handleDelete = () => {
    fetch(`http://localhost:3001/movies/${id}`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(data => console.log("Movie is successfully deleted!", data)) 
      handleRemoveMovie(id)   
  }

  
  const handleMoreBtnClick = e => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
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
        <Typography gutterBottom variant="6" component="div">
          Genre: { genre }
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton 
          aria-label="add to favorites"  
          color={favorite ? 'secondary' : 'inherit'} 
          onClick={handleClick}>
          <FavoriteIcon/>
        </IconButton>
        {/* < Link to={`/movies/${id}`} style={{textDecoration: "none"}}>Learn More</Link>  */}
          {/* <Route path={`/movies/${id}`}  element={<MovieDetails movie={movie}/>}/> */}
        <IconButton
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Button size="small" onClick={handleMoreBtnClick}>Learn More</Button>
        </IconButton>          
        <IconButton
          aria-label='delete'
          onClick={handleDelete}
          style={{marginLeft: 'auto'}}
        >    
          <DeleteRoundedIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default MovieCard