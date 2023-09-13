import { Autocomplete, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { FC } from "react";

const options = [
  { label: "The Godfather", id: 1 },
  { label: "Pulp Fiction", id: 2 },
  { label: "The Fifth Element", id: 3 },
];

export const MuiDatePicker: FC<{}> = ({}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker />
    </LocalizationProvider>
  );
};
