import { Section, SectionContent, SectionHeader } from "../helpers";
import { Snippet as SnippetData, loadSnippets } from "@/services";

import { BabyCorn } from "./BabyCorn";
import { FC } from "react";
import { Hamburger } from "./Hamburger";
import { PeanutButter } from "./PeanutButter";
import { Salad } from "./Salad";
import { Watermellon } from "./Watermellon";

export const ComplexComponentTreeSection: FC<{}> = ({}) => {
  return (
    <Section>
      <SectionHeader>
        About 200 uniquely generated component definitions (to simulate app
        bloat)
      </SectionHeader>
      <SectionContent>
        <Hamburger prop1={0} />
        <Salad prop1={0} />
        <BabyCorn prop1={0} />
        <PeanutButter prop1={0} />
        <Watermellon prop1={0} />
      </SectionContent>
    </Section>
  );
};
