const Hero = () => {
  return (
    <>
      <div className="flex w-[75%]  h-[392px] sm:h-[400px] md:h-[450px] lg:h-[430px] absolute left-0">
        <div className="w-full lg:w-1/2 bg-[#7596D5] sm:bg-gradient-to-r from-blue-900 to-blue-600 sm:rounded-r-[30px] md:rounded-r-[0px]">
          <div className="xs:max-sm:hidden bg-hero bg-no-repeat w-full h-full object-cover opacity-50 sm:rounded-r-[30px] md:rounded-r-[0px]"></div>
        </div>

        <div className="md:w-1/2 bg-darkblue rounded-r-[30px] "></div>
      </div>

      <div className="flex flex-col absolute left-[20px] sm:left-[80px] font-normal text-white gap-y-[15px] md:gap-y-[20px] lg:gap-y-[25px]">
        <div className="text-[30px] sm:text-[45px] md:text-[55px] lg:text-[75px] leading-[36px] sm:leading-[75px] lg:leading-[95px] ">Godwill onyewuchi</div>
        <div className="text-[20px] sm:text-[20px] md:text-[30px] lg:text-[40px] leading-[16px] sm:leading-[58px] ">
          Frontend Web Developer
        </div>

        <div className="flex  flex-col gap-y-[15px]">
          <p className="xs:max-sm:hidden sm:text-[20px] md:text-[25px] lg:text-[32px] text-gray-300 leading-[43px] ">
            Take your time and explore my portfolio
          </p>

          <p className="sm:hidden text-[15px] sm:text-[20px] md:text-[25px] lg:text-[32px] text-white leading-[43px] ">
            Need a website or Software? 
          </p>

          <button
            className="md:w-[250px] lg:w-[300px] h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px] p-[30px] self-start 
          flex border-2 border-gray-300 rounded-lg justify-center items-center text-[20px] sm:text-[28px]
          md:text-[36px] leading-[43px]"
          >
            Contact me
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
