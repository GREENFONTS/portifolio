import React from "react";

interface Props {}

const ProjectView: React.FC<Props> = () => {
  return (
    <div className="flex flex-col gap-y-[15px] w-5/6 mx-auto">
      <div className="border-solid border-slate-100 h-[40vh] border-[1px] rounded-[10px]"></div>
      <div className="text-[#ffffff] text-[14px] leading-[17px]">
        Design the experience from the perspective of students, recent graduates
        who have been accepted into the internship program and are undergoing
        self-study training remotely but would like to get a feel of
        classroom-based, one-on-one learning. What features can you include in
        the product to make this experience interesting, engaging and exciting
        for its users.
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-inherit border-solid border-slate-100 border-[1px] h-[58px] w-[176px] 
        rounded-[10px] text-[#ffffff] text-[16px] leading-[19px]">
          View
        </button>
      </div>
    </div>
  );
};

export default ProjectView;
