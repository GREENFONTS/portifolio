import React, { useState } from "react";
import ProjectView from "./ProjectView";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("public");
  return (
    <div className="mt-[140px] mx-[58px] w-full">
      <ul
        className="
          text-[#ffffff]
         
  nav nav-tabs nav-justified
  flex flex-col
  md:flex-row
  flex-wrap
  list-none
  border-b-0
  pl-0
  mb-4
"
        id="tabs-tabJustify"
        role="tablist"
      >
        <li
          className="nav-item flex-grow text-center"
          role="presentation"
          onClick={() => setSelectedTab("public")}
        >
          <a
            href="#public"
            className="
      nav-link
      w-full
      block
      font-medium
      text-[24px]
      leading-[29px]
      opacity-50
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:underline hover:opacity-100
      focus:border-transparent
      active
    "
          >
            Public
          </a>
        </li>
        <li
          className="nav-item flex-grow text-center"
          role="presentation"
          onClick={() => setSelectedTab("personal")}
        >
          <a
            href="#personal"
            className="
      nav-link
      w-full
      block
      text-[24px]
      leading-[29px]
      opacity-50
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:underline  hover:opacity-100
      focus:border-transparent
    "
          >
            Personal
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className={
            selectedTab === "public" ? "tab-pane fade show active" : "hidden"
          }
        >
          <div className="grid grid-cols-2 gap-4 w-full">
            <ProjectView />
            <ProjectView />
          </div>
        </div>
        <div
          className={
            selectedTab !== "public" ? "tab-pane fade show active" : "hidden"
          }
        >
          Tab 2 content justify
        </div>
      </div>
    </div>
  );
};

export default Tabs;
