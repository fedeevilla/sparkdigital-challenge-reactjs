import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const Text2 = ({ text, handleChange }) => {
  return (
    <TextField
      id="text2"
      placeholder="Ciphertext"
      value={text}
      onChange={e => handleChange(e.target.value)}
      margin="normal"
    />
  );
};

Text2.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Text2;
