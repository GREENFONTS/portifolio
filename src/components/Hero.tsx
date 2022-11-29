const Hero = () => {
  return (
    <>
      <div className="flex w-[1143px] h-[525px] absolute left-0">
        <div className="w-1/2 bg-gradient-to-r from-blue-900 to-blue-600">
          <div className="bg-hero w-full h-full opacity-50"></div>
        </div>

        <div className="w-1/2 bg-darkblue rounded-r-[30px] "></div>
      </div>

      <div className="flex flex-col absolute left-[80px] font-normal text-white gap-y-[25px]">
        <div className="text-[75px] leading-[95px] ">Godwill onyewuchi</div>
        <div className="text-[40px] leading-[58px] ">
          Frontend Web Developer
        </div>

        <div className="flex  flex-col gap-y-[15px]">
          <p className="text-[32px] text-gray-300 leading-[43px] ">
            Take your time and explore my portfolio
          </p>

          <button
            className="w-[300px] h-[100px] p-[30px] self-start 
          flex border-2 border-gray-300 rounded-lg justify-center items-center
          text-[36px] leading-[43px]"
          >
            Contact me
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
