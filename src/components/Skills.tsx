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
    <div className="flex gap-[135px] items-center absolute bottom-3 ml-[50px]">
      <div className="w-2/5 text-white">
        <h2 className="text-[30px] leading-[37px] font-bold">
          Skills and Tools
        </h2>
        <p className="text-[18px] leading-[22px]">
          For a more detailed overview, please feel free to check the tools that
          where used on a per-project basis.
        </p>
      </div>

      <div className="">
        <img src="/RightArrow.svg" alt="" />
      </div>

      <div className="grid grid-cols-5 gap-x-7 gap-y-4">
        <SiReact color="#fff" size="35" />
        <TbBrandNextjs color="#fff" size="35" />
        <SiRedux color="#fff" size="35" />
        <SiJavascript color="#fff" size="35" />
        <SiTypescript color="#fff" size="35" />
        <SiHtml5 color="#fff" size="35" /> <SiCss3 color="#fff" size="35" />
        <SiTailwindcss color="#fff" size="35" />
        <SiBootstrap color="#fff" size="35" />
        <SiGit color="#fff" size="35" />
        <SiFirebase color="#fff" size="35" />
        <SiMongodb color="#fff" size="35" />
        <SiPostgresql color="#fff" size="35" />{" "}
        <SiPostman color="#fff" size="35" />
      </div>
    </div>
  );
};

export default Skills;
