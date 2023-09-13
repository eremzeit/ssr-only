import { Code } from "bright";
import { FC } from "react";
import { Snippet as SnippetData } from "@/services";
import moment from "moment";

export interface SnippetProps {
  snippet: SnippetData;
}

Code.theme = {
  dark: "github-dark",
  light: "github-light",
};

export const Snippet: FC<SnippetProps> = ({ snippet }) => {
  const a = moment().format("MMMM Do YYYY, h:mm:ss a");
  return (
    <div className="z-10 max-w-5xl w-full items-center text-sm mb-8">
      <h3 className="text-m font-bold mb-3">{snippet.title}</h3>
      <div className="mb-3">{snippet.description}</div>
      <Code lang={snippet.language} data-theme={"dark"}>
        {snippet.code}
      </Code>
    </div>
  );
};
