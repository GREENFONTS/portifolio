import React from "react";
import ReactImg from "../../../assets/react.svg";

interface Props {
  title: string;
  description: string;
  link: string;
}

const ProjectView: React.FC<Props> = ({ title, description, link }) => {
  return (
    <div className="flex flex-col gap-y-[10px] w-5/6 mx-auto">
      <div className="flex justify-center items-center border-solid border-slate-100 h-[40vh] border-[1px] rounded-[10px]">
        <img src={ReactImg} />
      </div>
      <div className="text-[#ffffff] text-[18px] leading-[23px] text-center">
        {title}
      </div>
      <div className="text-[#ffffff] text-[14px] leading-[17px] text-center">
        {description}
      </div>
      <div className="flex justify-center items-center">
        <a href={link}>
          <button
            className="bg-inherit border-solid border-slate-100 border-[1px] h-[58px] w-[176px]  hover:scale-105
        rounded-[10px] text-[#ffffff] text-[16px] leading-[19px]"
          >
            View
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectView;
