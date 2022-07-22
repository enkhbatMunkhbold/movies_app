import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Search from '../static/Search'
import { Menu, MenuItem } from '@material-ui/core';

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

// const handleDrawerToggle = () => {
//   const genres = ['Action', 'Drama', 'Horror', 'Western', 'Romance', 'Science fiction'] 
// }

// const handleMenuClick = (e) => {
//   console.log("MenuIcon is clicked!");
// }

const Navbar = ({ movies, setMovies, setFilteredMovies, setSearchGenre }) => {
  const genreList = ["All", "Action", "Drama", "Horror", "Comedy", "Romance", "Mystery", "Adventure", "Animation", "Sci-Fi", "Documentary", "Thriller", "Crime"]
    
  const classes = useStyles();
  const[anchorEl, setAnchorEl] = useState(null);

  const isIncludes = (m, g) => {
    const arr = m.genre.split(',').map(el => el.trim())
    if(!arr.includes(g)){
      return false 
    } else {
      return true
    }
  }

  const handleFilter = (movieGenre) => {  
    if(movieGenre === "All") {
      setFilteredMovies(movies)
    } else {
      const filtered = movies.filter(movie =>{
        return (isIncludes(movie, movieGenre))
      })
      setFilteredMovies(filtered)
    }     
  }

  const handleClick = e => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = (e) => {
    setAnchorEl(null)
    handleFilter(e.currentTarget.innerText)
    setSearchGenre(e.currentTarget.innerText)
  }

  // const nativeOnChange = e => {
  //   const detail = {
  //     selectedIndex: e.target.selectedIndex
  //   }
  //   e.target.selectedIndex = 0
  //   e.target.dispatchEvent(new CustomEvent('itemClick', { detail }))
  // }
  // const itemClick = e => {
  //   console.log('item clicked' + e.detail)
  // }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            aria-controls="simple-menu"
            onClick={handleClick}
          >
          <MenuIcon/>                  
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {genreList.map((genre, index) => (
              <MenuItem onClick={handleClose} key={index} value={genre}>
                {genre}
              </MenuItem>
            ))}
          </Menu>
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
