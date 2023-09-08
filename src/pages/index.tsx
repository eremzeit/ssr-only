import { NavBar, SnippetList } from "@/components/snippets";

import { FC } from "react";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import _ from "lodash";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function SnippetPage() {
  return (
    <main className="font-mono">
      <NavBar />
      <div
        className="px-3"
        style={{ maxWidth: 1600, margin: "0px auto", padding: "0px 3rem" }}
      >
        <SnippetList />
      </div>
    </main>
  );
}
