import {
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import { GoCode } from "react-icons/go";
import { useLocation } from "react-router-dom";

const LeftBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-1/5 sm:w-2/5 lg:w-1/4 flex flex-col justify-between h-screen py-[25px] md:py-[20px]">
      <div className="w-4/5 xs:max-sm:hidden mx-auto flex flex-col items-center gap-y-2">
        <div className="flex justify-center items-center w-[142px] h-[42px] bg-gray-500  text-2xl text-gray-100">
          Elevio
        </div>
        <h2 className="text-dark sm:text-sm md:text-md text-wrap">
          Frontend Developer/MERN Stack
        </h2>

        {pathname === "/projects" && (
          <div className="flex my-[50px] gap-x-4 items-center text-md">
            <GoCode />
            <p>Frontend Development</p>
          </div>
        )}
      </div>

      <div className="p-5 text-xl font-bold italic sm:hidden">Elevio</div>

      <div
        className="flex flex-col sm:flex-row gap-y-3 sm:gap-x-[20px] md:gap-x-[30px] justify-center items-center text-[#000000] 
      sm:text-[#876D2E] text-[20px] sm:text-[33px]"
      >
        <a href="https://wa.link/b4v59f" target="_blank">
          <FaWhatsapp />
        </a>

        <a href="https://twitter.com/GODWILLONYEWUC1" target="_blank">
          <FaTwitter />
        </a>

        <a
          href="https://www.linkedin.com/in/godwill-onyewuchi-6746621b4/"
          target="_blank"
        >
          <FaLinkedin />
        </a>

        <a href="https://github.com/GREENFONTS/" target="_blank">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default LeftBar;
