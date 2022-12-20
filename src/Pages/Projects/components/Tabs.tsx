import React, { useState } from "react";
import ProjectView from "./ProjectView";
import { PublicProjects, PersonalProjects } from "../data";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("public");
  return (
    <div className="mt-[70px] lg:mt-[140px] sm:mx-[30px] lg:mx-[58px] w-full">
      <ul
        className="
          text-[#ffffff]
         
  nav nav-tabs nav-justified
  flex
  flex-row
  flex-wrap
  list-none
  border-b-0
  pl-0
  mb-4
"
        id="tabs-tabJustify"
        role="tablist"
      >
        {selectedTab === "public" ? (
          <>
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
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:underline hover:scale-105
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
      focus:border-transparent hover:scale-105
    "
              >
                Personal
              </a>
            </li>
          </>
        ) : (
          <>
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
      opacity-50
      font-medium
      text-[24px]
      leading-[29px]
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:underline hover:opacity-100 hover:scale-105
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
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:underline  hover:opacity-100
      focus:border-transparent hover:scale-105
    "
              >
                Personal
              </a>
            </li>
          </>
        )}
      </ul>
      <div className="tab-content">
        <div
          className={
            selectedTab === "public" ? "tab-pane fade show active" : "hidden"
          }
        >
          <div className="grid md:grid-cols-2 gap-y-4 w-full h-[67vh] overflow-y-scroll">
            {PublicProjects.map((ele) => (
              <ProjectView
                title={ele.title}
                description={ele.description}
                link={ele.link}
                key={PublicProjects.indexOf(ele)}
              />
            ))}
          </div>
        </div>
        <div
          className={
            selectedTab !== "public" ? "tab-pane fade show active" : "hidden"
          }
        >
          <div className="grid md:grid-cols-2 gap-4 w-full h-[65vh] overflow-y-scroll">
          {PersonalProjects.map((ele) => (
              <ProjectView
                title={ele.title}
                description={ele.description}
                link={ele.link}
                key={PublicProjects.indexOf(ele)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
