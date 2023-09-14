import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Snippet as SnippetData, UserData } from "@/services";
import { loadSnippets, loadUserData } from "@/services";

import { ComplexComponentTreeSection } from "@/components/ComplexComponentTree/ComplexComponentTreeSection";
import { ComplexComponentTreeSectionClient } from "@/components/ComplexComponentTree/ComplexComponentTreeSection.client";
import { FC } from "react";
import { FooForm } from "@/components/FooForm/FooForm";
import { NavBar } from "@/components/NavBar";
import { SnippetsSection } from "@/components/SnippetSection/SnippetsSection";
import SyntaxHighlighter from "react-syntax-highlighter";
import _ from "lodash";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import moment from "moment";

type PageProps = { userData: UserData; snippets: SnippetData[] };

export interface SnippetProps {
  snippet: SnippetData;
}

export const SnippetClient: FC<SnippetProps> = ({ snippet }) => {
  const a = moment().format("MMMM Do YYYY, h:mm:ss a");
  return (
    <div className="z-10 max-w-5xl w-full items-center text-sm mb-8">
      <h3 className="text-m font-bold mb-3">{snippet.title}</h3>
      <div className="mb-3">{snippet.description}</div>
      <SyntaxHighlighter language={snippet.language} style={docco}>
        {snippet.code}
      </SyntaxHighlighter>
    </div>
  );
};
// 76.2 base
// with form - 141
// with complex components 78.1
// with code snippets 397 kb
export const SnippetClientPage: FC<PageProps> = (props) => {
  return (
    <main className="font-mono">
      <NavBar user={props.userData} />
      <div
        className="px-3"
        style={{ maxWidth: 1600, margin: "0px auto", padding: "0px 3rem" }}
      >
        {/* <FooForm /> */}
        <SnippetsSection
          snippetList={props.snippets.map((s, i) => (
            <SnippetClient key={i} snippet={s} />
            // <Snippet key={i} snippet={s} />
          ))}
        />
        {/* <ComplexComponentTreeSectionClient /> */}
      </div>
    </main>
  );
};

export const getServerSideProps = (async (context) => {
  const userData = await loadUserData();
  const snippets = await loadSnippets();
  return { props: { userData, snippets } };
}) satisfies GetServerSideProps<{
  userData: UserData;
  snippets: SnippetData[];
}>;

export default function SnippetPage(props: {
  userData: UserData;
  snippets: SnippetData[];
}) {
  return (
    <SnippetClientPage userData={props.userData} snippets={props.snippets} />
  );
}
