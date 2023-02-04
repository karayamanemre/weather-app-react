import React from 'react';
import { Input, Button, Switch, FormControlLabel } from '@mui/material';

const Header = (props) => {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <header>
      <form onSubmit={props.handleSubmit}>
        <Input type="text" name="city" placeholder="Enter a city name" />
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
          label={`${checked? '°C':'°F'}`}
        />
      </form>
    </header>
  );
};

export default Header;