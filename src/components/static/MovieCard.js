import * as React from 'react';
import Card from '@mui/material/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';

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
  }
}));

const MovieCard = ({ movie }) => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
          Rating: { movie.Rating }
        </Typography>       
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>       
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>          
          <Typography paragraph>
           {movie.comment}
          </Typography>         
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default MovieCard