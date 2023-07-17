import { TextField } from "@mui/material";

const Input = ({ inputProps, ...restProps }) => {
  return <TextField inputProps={inputProps} {...restProps} />;
};

export default Input;
