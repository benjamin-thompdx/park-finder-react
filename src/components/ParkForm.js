import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const ParkForm = props => {
  const parks = useSelector(state => state.parks)
  const parkList = parks.map((e) => <MenuItem key={e.id}>{e.name}</MenuItem>)
  
  const classes = useStyles();
  // const [parks] = React.useState('');  

  const handleChange = (event) => {
    console.log("handle change activated!")
    // setPark(event.target.value);
  };
  

  return(
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="park-dropdown-label">Choose a Park</InputLabel>
        <Select
          labelId="park-dropdown-label"
          id="park-dropdown"
          onChange={handleChange}
        >
          {parkList}
        </Select>
      </FormControl>
    </div>
  )
}

export default ParkForm;