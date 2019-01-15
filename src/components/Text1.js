import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const Text1 = ({ text, handleChange }) => {
  return (
    <TextField
      id="plain"
      placeholder="Plain Text"
      value={text}
      onChange={e => handleChange(e.target.value)}
      margin="normal"
    />
  );
};

Text1.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Text1;
