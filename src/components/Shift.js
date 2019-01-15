import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PropTypes from "prop-types";

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Shift = ({ handleChange, value }) => {
  return (
    <FormControl>
      <InputLabel htmlFor="shift">Shift</InputLabel>
      <Select
        value={value}
        onChange={e => handleChange(e.target.value)}
        inputProps={{
          name: "shift",
          id: "shift"
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map(i => (
          <MenuItem key={i} value={i}>
            {i}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

Shift.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default Shift;
