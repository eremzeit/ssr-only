import { Autocomplete, TextField } from "@mui/material";

import { FC } from "react";

const options = [
  { label: "The Godfather", id: 1 },
  { label: "Pulp Fiction", id: 2 },
  { label: "The Fifth Element", id: 3 },
];

export const MuiAutocomplete: FC<{}> = ({}) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
};
