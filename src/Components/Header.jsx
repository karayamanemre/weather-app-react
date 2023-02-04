import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';

const Header = (props) => {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <header>
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <form onSubmit={props.handleSubmit} style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <TextField name="city" label="Search City" variant="outlined" style={{ width: "100%" }} />
          <Button type="submit" variant="contained" style={{ width: "100%" }}>Search City</Button>
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
      </div>
    </header>
  );
};

export default Header;
