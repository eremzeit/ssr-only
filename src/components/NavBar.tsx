import { FC } from "react";
import Link from "next/link";
import { UserData } from "@/services";

export const NavBar: FC<{ user: UserData }> = ({ user }) => {
  return (
    <header className="bg-gray-200 h-8 flex">
      {" "}
      <h1 className="mx-6 font-bold h-full leading-8">FubarUI.xyz</h1>
      <div className="mx-6 flex flex-grow">
        <div className="mr-10 leading-8">
          <a href={"/ssr-only"}>No RSC</a>
        </div>
        <div className="mr-10 leading-8">
          <a href={"/mui-rsc"}>RSC MUI</a>
        </div>
        <div className="mr-10 leading-8">
          <a href={"/rsc"}>RSC Ad Hoc</a>
        </div>
      </div>
      <div className="mr-6 basis-auto">
        Welcome {user.username} ({user.unreadCount})
      </div>
    </header>
  );
};
