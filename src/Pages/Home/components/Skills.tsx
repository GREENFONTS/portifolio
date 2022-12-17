import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center absolute bottom-4 md:bottom-1 md:mx-[30px] lg:mx-[50px]">
      <div className="w-full lg:w-2/5 text-white text-center md:text-left h-[40px] md:h-auto">
        <h2 className="text-[25px] md:text-[20px] lg:text-[30px] md:leading-[27px] lg:leading-[37px] font-bold">
          Skills and Tools
        </h2>
        <p className="invisible md:visible md:text-[14px] lg:text-[18px] leading-[22px]">
          For a more detailed overview, please feel free to check the tools that
          where used on a per-project basis.
        </p>
      </div>

      <div className="xs:max-md:hidden md:visible">
        <img src="/RightArrow.svg" alt="" />
      </div>

      <div className="grid grid-cols-6 animate-marquee whitespace-nowrap  md:grid-cols-4 gap-x-4 md:gap-x-7 gap-y-4 text-[#fff] text-[25px] sm:text-[35px]">
        
        <SiReact />
        <TbBrandNextjs />
        <SiRedux />
        <SiJavascript />
        <SiTypescript />
        <SiHtml5 /> <SiCss3 />
        <SiTailwindcss />
        <SiBootstrap />
        <SiGit />
        <SiMongodb />
        <SiPostgresql />
      </div>
    </div>
  );
};

export default Skills;
