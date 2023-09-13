"use client";

// Demo styles, see 'Styles' section below for some notes on use.
// import "react-accessible-accordion/dist/fancy-example.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import React from "react";

export default function FooAccordian() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Click to see more</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
            occaecat ut occaecat consequat est minim minim esse tempor laborum
            consequat esse adipisicing eu reprehenderit enim.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Click to see more</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
            nostrud velit in irure cillum tempor laboris sed adipisicing eu esse
            duis nulla non.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
