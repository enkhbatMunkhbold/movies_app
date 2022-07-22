import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, Checkbox, FormGroup, FormHelperText} from '@material-ui/core';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // backgroundColor: "#ABC9FF"
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));


const NewMovie = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    action: false,
    drama: false,
    horror: false,
    comedy: false,
    romance: false,
    mystery: false,
    adventure: false,
    animation: false,
    sciFi: false,
    documentary: false,
    thriller: false,
    crime: false
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { action, drama, horror, comedy, romance, mystery, adventure, animation, sciFi, documentary, thriller, crime } = state;
  // const error = [action, drama, horror, comedy, romance, mystery, adventure, animation, sciFi, documentary, thriller].filter((v) => v).length !== 2;

  const paperStyle={padding: '80px 20px', width: 700, margin: "80px auto", height: 700, backgroundColor: "#DFF6FF"}
  const headerStyle={margin:10}
  const avatarStyle={backgroundColor: 'blue'}

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
        <form>
          <TextField fullWidth label="Movie Title" placeholder='Enter Movie Title'/>
          <TextField fullWidth label="Image Link" placeholder='Enter Link Address'/>
          <TextField fullWidth label="Year" placeholder='Enter Year'/>
          <TextField fullWidth label="Rating" placeholder='Enter Rating'/>  
          <h3 style={{marginBottom: 0}}>Genre</h3>
          <div className={classes.root}>          
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={action} onChange={handleChange} name="action" />}
                  label="Action"
                />
                <FormControlLabel
                  control={<Checkbox checked={drama} onChange={handleChange} name="drama" />}
                  label="Drama"
                />
                <FormControlLabel
                  control={<Checkbox checked={horror} onChange={handleChange} name="horror" />}
                  label="Horror"
                />
              </FormGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>      
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={comedy} onChange={handleChange} name="comedy" />}
                  label="Comedy"
                />
                <FormControlLabel
                  control={<Checkbox checked={romance} onChange={handleChange} name="romance" />}
                  label="Romance"
                />
                <FormControlLabel
                  control={<Checkbox checked={mystery} onChange={handleChange} name="mystery" />}
                  label="Mystery"
                />
              </FormGroup>
              <FormHelperText>Pick all that applies</FormHelperText>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={adventure} onChange={handleChange} name="adventure" />}
                  label="Adventure"
                />
                <FormControlLabel
                  control={<Checkbox checked={animation} onChange={handleChange} name="animation" />}
                  label="Animation"
                />
                <FormControlLabel
                  control={<Checkbox checked={sciFi} onChange={handleChange} name="sci-Fi" />}
                  label="Sci-Fi"
                />
              </FormGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={documentary} onChange={handleChange} name="documentary" />}
                  label="Documentary"
                />
                <FormControlLabel
                  control={<Checkbox checked={thriller} onChange={handleChange} name="thriller" />}
                  label="Thriller"
                />
                <FormControlLabel
                  control={<Checkbox checked={crime} onChange={handleChange} name="crime" />}
                  label="Crime"
                />
              </FormGroup>
            </FormControl>
          </div>        
          <FormControl component="fieldset" style={{mt: 10, mb: 30}}>            
            <RadioGroup aria-label="gender" name="gender1" style={{display: 'initial'}}>
              <FormLabel component="legend">Favorite</FormLabel>
              <FormControlLabel value="female" control={<Radio />} label="Yes" />
              <FormControlLabel value="male" control={<Radio />} label="No" />
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