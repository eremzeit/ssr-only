"use client";

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Rating,
  Switch,
} from "@mui/material";

import React from "react";

export default function MuiRating() {
  return (
    <FormGroup>
      <Rating name="read-only" value={4} readOnly />
    </FormGroup>
  );
}
