import React, { useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, Checkbox, FormGroup, FormHelperText} from '@material-ui/core';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));


const NewMovie = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    img_link: '',
    genre: '',
    year: 0,
    rating: '',
    favorite: ''
  })

  const [radioValue, setRadioValue] = useState('no-favorite')
  const [state, setState] = React.useState({
    action: false,
    drama: false,
    horror: false,
    comedy: false,
    romance: false,
    mystery: false,
    adventure: false,
    animation: false,
    scifi: false,
    documentary: false,
    thriller: false,
    crime: false
  });  
  
  const { action, drama, horror, comedy, romance, mystery, adventure, animation, scifi, documentary, thriller, crime } = state;
  // const { name, img_link, year, rating } = formData
  const paperStyle={padding: '50px 20px 80px', width: 700, margin: "80px auto", height: 700, backgroundColor: "#FEFBE7"}
  const headerStyle={margin:20}
  const avatarStyle={backgroundColor: 'blue'}     

  const handleCheck = e => {
    // console.log(e.target.name);
    setState({ ...state, [e.target.name]: e.target.checked })
  }

  const handleRadioButton = e => {
    // console.log(e.target.value);
    setRadioValue(e.target.value)
  }

  const handleChange = e => {
    console.log("Target name:", e.target.name)
    console.log("Target value:", e.target.value)
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault() 
    const movieGenreList = Object.entries(state).filter(item => item[1]).map(item => item[0]).join(', ')   
    console.log("Movie Genre List:", movieGenreList)
    console.log("formData:", formData)
    const createdMovie = {
      name: formData.name,
      img_link: formData.img_link,
      genre: movieGenreList,
      year: formData.year,
      rating: formData.rating,
      favorite: radioValue
    }
    console.log("Created Movie:", createdMovie)
  }

  return (
    <div>
    <Grid align="center">
      <Paper elevation={20} style={paperStyle}>
        <Grid>
          <Avatar style={avatarStyle}>
            <LocalMoviesIcon/>
          </Avatar>
        </Grid>
        <h2 style={headerStyle}>INSERT MOVIE</h2>
        <Typography variant="caption">
          Please fill this form to insert your favorite movie into Database!
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Movie Title" placeholder='Enter Movie Title' onChange={handleChange}/>
          <TextField fullWidth label="Image Link" placeholder='Enter Link Address' onChange={handleChange}/>
          <TextField fullWidth label="Year" placeholder='Enter Year' onChange={handleChange}/>
          <TextField fullWidth label="Rating" placeholder='Enter Rating' onChange={handleChange}/>  
          <h3 style={{marginBottom: 0}}>Genre</h3>
          <div className={classes.root}>          
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={action} onChange={handleCheck} name="action" />}
                  label="Action"
                />
                <FormControlLabel
                  control={<Checkbox checked={drama} onChange={handleCheck} name="drama" />}
                  label="Drama"
                />
                <FormControlLabel
                  control={<Checkbox checked={horror} onChange={handleCheck} name="horror" />}
                  label="Horror"
                />
              </FormGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>      
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={comedy} onChange={handleCheck} name="comedy" />}
                  label="Comedy"
                />
                <FormControlLabel
                  control={<Checkbox checked={romance} onChange={handleCheck} name="romance" />}
                  label="Romance"
                />
                <FormControlLabel
                  control={<Checkbox checked={mystery} onChange={handleCheck} name="mystery" />}
                  label="Mystery"
                />
              </FormGroup>
              <FormHelperText>Pick all that applies</FormHelperText>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={adventure} onChange={handleCheck} name="adventure" />}
                  label="Adventure"
                />
                <FormControlLabel
                  control={<Checkbox checked={animation} onChange={handleCheck} name="animation" />}
                  label="Animation"
                />
                <FormControlLabel
                  control={<Checkbox checked={scifi} onChange={handleCheck} name="scifi" />}
                  label="Sci-Fi"
                />
              </FormGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={documentary} onChange={handleCheck} name="documentary" />}
                  label="Documentary"
                />
                <FormControlLabel
                  control={<Checkbox checked={thriller} onChange={handleCheck} name="thriller" />}
                  label="Thriller"
                />
                <FormControlLabel
                  control={<Checkbox checked={crime} onChange={handleCheck} name="crime" />}
                  label="Crime"
                />
              </FormGroup>
            </FormControl>
          </div>        
          <FormControl component="fieldset" style={{mt: 10, mb: 30}}>            
            <RadioGroup aria-label="favorite" name="favorite" value={radioValue} style={{display: 'initial'}} onChange={handleRadioButton}>
              <h3 style={{marginBottom: 20}}>Favorite</h3>
              <FormControlLabel value='favorite' control={<Radio />} label="Yes" />
              <FormControlLabel value='no-favorite' control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl> 
          <div style={{marginTop: 50}}>
            <Button type="submit" variant="contained" color="primary">Create Movie</Button>
          </div>             
        </form>
      </Paper>
    </Grid>
    </div>
  )
}

export default NewMovie