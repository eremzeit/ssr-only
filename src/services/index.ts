import { LoremIpsum } from "lorem-ipsum";
import _ from "lodash";
import { fakeCodeSnippets } from "./code-snippets";
import { sleep } from "sleep-ts";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 4,
    min: 2,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export interface UserData {
  username: string;
  unreadCount: number;
}
export interface SnippetComment {
  username: string;
  comment: string;
}
export interface Snippet {
  username: string;
  description: string;
  code: string;
  language: string;
  title: string;
  comments: SnippetComment[];
}

const fakeUserNames = [
  "koolCoder135",
  "ggIDE12",
  "unicornFiesta1993",
  "trooperduper1234",
  "yummybits1337",
];

export async function loadUserData(): Promise<UserData> {
  await sleep(300);
  return { username: "FooBarUser235", unreadCount: 3 };
}

export async function loadSnippets(): Promise<Snippet[]> {
  await sleep(300);

  return _.times(5, (i) => {
    return {
      username: fakeUserNames[Math.floor(fakeUserNames.length * Math.random())],
      description: lorem.generateSentences(5),
      code: fakeCodeSnippets[i % fakeCodeSnippets.length].code,
      language: fakeCodeSnippets[i % fakeCodeSnippets.length].language,
      title: fakeCodeSnippets[i % fakeCodeSnippets.length].title,
      comments: [],
    };
  });
}

export async function loadSnippetComments() {
  await sleep(2000);
}

export async function addSnippet(snippet: Snippet) {}

export async function addCommentToSnippet(snippetComment: SnippetComment) {}
