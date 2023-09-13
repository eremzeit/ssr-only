"use client";

import { Checkbox, FormControlLabel, FormGroup, Switch } from "@mui/material";

import React from "react";

export default function MuiSwitch() {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <FormControlLabel required control={<Switch />} label="Required" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
  );
}
