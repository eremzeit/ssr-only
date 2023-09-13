"use client";

import React, { FC } from "react";

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { SubSectionHeader } from "../helpers";

interface Item {
  id: number;
  name: string;
}

const items = [
  {
    id: 0,
    name: "Cobol",
  },
  {
    id: 1,
    name: "JavaScript",
  },
  {
    id: 2,
    name: "Basic",
  },
  {
    id: 3,
    name: "PHP",
  },
  {
    id: 4,
    name: "Java",
  },
];

const formatResult = (item: Item) => {
  return (
    <>
      <span style={{ display: "block", textAlign: "left" }}>id: {item.id}</span>
      <span style={{ display: "block", textAlign: "left" }}>
        name: {item.name}
      </span>
    </>
  );
};

export const FooAutocomplete: FC<{}> = ({}) => {
  return (
    <ReactSearchAutocomplete
      items={items}
      //   onSearch={handleOnSearch}
      //   onHover={handleOnHover}
      //   onSelect={handleOnSelect}
      //   onFocus={handleOnFocus}
      //   autoFocus
      formatResult={formatResult}
    />
  );
};
