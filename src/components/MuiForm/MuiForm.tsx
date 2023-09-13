"use client";

import {
  ControlWrapper,
  Section,
  SectionContent,
  SectionHeader,
  SubSectionHeader,
} from "../helpers";
import React, { FC, ReactNode } from "react";

import { MuiAccordian } from "./MuiAccordion";
import { MuiAutocomplete } from "./MuiAutocomplete";
import { MuiDatePicker } from "./MuiDatePicker";
import { Pagination } from "@mui/material";

export const MuiForm: FC<{}> = ({}) => {
  return (
    <Section>
      <SectionHeader>
        UI form using MUI components(which are client components)
      </SectionHeader>
      <SectionContent>
        <ControlWrapper headerText="Date Picker">
          <MuiDatePicker />
        </ControlWrapper>
        <ControlWrapper headerText="Auto Complete">
          <MuiAutocomplete />
        </ControlWrapper>
        <ControlWrapper headerText="Accordian">
          <MuiAccordian />
        </ControlWrapper>

        <ControlWrapper headerText="Pagination">
          <Pagination count={10} disabled />
        </ControlWrapper>
      </SectionContent>
    </Section>
  );
};
