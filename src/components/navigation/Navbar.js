import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Search from '../static/Search'
// import Search from '@material-ui/icons/Search';

const drawerWidth =240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },  
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }  
}));

const handleDrawerToggle = () => {
  // const genres = ['Action', 'Drama', 'Horror', 'Western', 'Romance', 'Science fiction']
 
}

const Navbar = ({ movies, setMovies }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
          <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            World of Movies
          </Typography>
          <Button color="inherit" component={ Link } to="/">Home</Button>
          <Button color="inherit" component={ Link } to="/movies/new">Create Movie</Button>
          <Search movies={movies} setMovies={setMovies}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar
