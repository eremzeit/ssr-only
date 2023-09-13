"use client";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

import DatePicker from "react-date-picker";
import { SubSectionHeader } from "../helpers";
import moment from "moment";
import { useState } from "react";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export function FooDatePicker() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <DatePicker
        onChange={(val: Value) => {
          console.log("new value", moment(val as Date));
          onChange(val);
        }}
        value={value}
      />
    </div>
  );
}
