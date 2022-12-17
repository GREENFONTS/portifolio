import React from "react";
import LeftBar from "./components/leftBar";
import Hero from "./Pages/Home/components/Hero";
import NavBar from "./components/NavBar";
import Skills from "./Pages/Home/components/Skills";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex w-full h-screen bg-white justify-center items-center">
      <LeftBar />

      <div className="w-4/5 sm:w-3/5 lg:w-3/4 bg-mypalegreen h-screen rounded-l-[40px]">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
