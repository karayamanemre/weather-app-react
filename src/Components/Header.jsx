import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';

const Header = (props) => {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <header>
      <form onSubmit={props.handleSubmit}>
        <TextField name="city" label="Search City" variant="outlined" />
        <Button type="submit" variant="contained">Search City</Button>
        <FormControlLabel
          control={
            <Switch
              defaultChecked
              onChange={e => { props.handleToggle(e); toggleChecked(e) }}
              value="unit"
              color="primary"
            />
          }
          label={`${checked? '°F':'°C'}`}
        />
      </form>
    </header>
  );
};

export default Header;