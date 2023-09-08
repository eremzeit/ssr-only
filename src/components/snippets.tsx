"use client";

import { FC } from "react";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import _ from "lodash";
import docco from "react-syntax-highlighter/dist/cjs/styles/hljs/an-old-hope";

export interface SnippetProps {
  username: string;
  description: string;
  code: string;
  language: string;
}

export const Snippet: FC<SnippetProps> = ({ language, code }) => {
  return (
    <div className="z-10 max-w-5xl w-full items-center text-sm">
      <SyntaxHighlighter language={language} style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export function NavBar() {
  return (
    <header className="bg-gray-200 h-8 flex">
      {" "}
      <h1 className="mx-6 font-bold h-full leading-8">CodeSnippets.xyz</h1>
      <div className="mx-6 flex flex-grow">
        <div className="mr-10 leading-8">Home</div>
        <div className="mr-10 leading-8">Create Snippet</div>
        <div className="mr-10 leading-8">About</div>
      </div>
      <div className="mr-6 basis-auto">Welcome Alan (0)</div>
    </header>
  );
}

const fakeSnippet: SnippetProps = {
  username: "",
  description: "",
  code: "  let a = {};\n  Object.assign({} ,{});",
  language: "typescript",
};

export function SnippetList() {
  const snippets = _.fill(Array(10), fakeSnippet);

  return (
    <div className="bg-red-100 flex items-stretch flex-col">
      {snippets.map((s, i) => (
        <Snippet key={i} {...s} />
      ))}
    </div>
  );
}
