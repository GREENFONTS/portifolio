import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../assets/MenuIcon.svg";
import CloseMenu from "../assets/CloseMenu.svg";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

import { RiWhatsappFill } from "react-icons/ri";
import { IoMdMailUnread } from "react-icons/io";
import { SiHashnode } from "react-icons/si";

const NavBar = () => {
  const [showContact, setShowContact] = useState(false);

  const DownloadPdf = () => {
    // using Java Script method to get PDF file
    fetch("MyProfCV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      {!showContact ? (
        <div className="flex w-[65px] h-[65px] sm:w-[350px] md:w-[450px] lg:w-[710px] md:h-[80px] lg:h-[100px] bg-white rounded-bl-[30px] absolute right-0 top-0">
          <div className="xs:max-sm:hidden flex w-4/5  m-5 items-center">
            <div className="flex w-full items-end justify-end">
              <div className="flex sm:w-full lg:w-2/3 justify-between sm:text-md md:text-lg">
                <button
                  className="cursor-pointer"
                  onClick={() => DownloadPdf()}
                >
                  Download CV
                </button>

                <Link to="/">Projects</Link>

                <p
                  onClick={() => setShowContact(!showContact)}
                  className="text-black cursor-pointer"
                >
                  Contact Me
                </p>
              </div>
            </div>
          </div>

          <div className="sm:hidden flex w-full justify-center items-center">
            <img
              src={MenuIcon}
              alt="menu"
              onClick={() => setShowContact(!showContact)}
            />
          </div>
        </div>
      ) : (
        <div className="flex sm:flex-col sm:gap-y-[40px]  md:gap-y-[60px] lg:gap-y-[80px] w-[152px] h-[179px] sm:w-[350px] md:w-[500px] lg:w-[710px] sm:h-[400px] lg:h-[500px] bg-white rounded-bl-[30px] absolute right-0 top-0">
          <div className="flex w-full sm:w-4/5 m-5  sm:items-center">
            <div className="flex w-4/5 sm:items-end sm:justify-end">
              <div className="flex xs:max-sm:items-start xs:max-sm:flex-col pt-1 gap-y-[15px] sm:w-full md:w-4/5 lg:w-2/3 text-[13px] sm:justify-between sm:text-sm md:text-md  lg:text-lg">
                <button
                  className="cursor-pointer"
                  onClick={() => DownloadPdf()}
                >
                  Download CV
                </button>

                <Link to="/">Projects</Link>

                <p
                  onClick={() => setShowContact(!showContact)}
                  className="text-[#876D2E] hover:scale-125 cursor-pointer xs:max-sm:hidden"
                >
                  Contact Me
                </p>

                <button
                  className="cursor-pointer sm:hidden bg-[#7596D5] p-2 rounded"
                  onClick={() => setShowContact(!showContact)}
                >
                  <a href="https://wa.link/b4v59f" target="_blank">
                  Contact Me</a>
                </button>
              </div>
            </div>
            <div className="sm:hidden w-1/5">
              <img src={CloseMenu} alt="menu" onClick={() => setShowContact(false)} />
            </div>
          </div>

          <div className="flex flex-col xs:max-sm:hidden  sm:mx-[25px] md:mx-[58px] w-4/5 sm:gap-y-[15px] lg:gap-y-[20px] ">
            <div className="flex gap-x-[14px] sm:text-[25px] lg:text-[30px] text-[#876D2E]">
              <RiWhatsappFill />
              <a href="https://wa.link/b4v59f" target="_blank">
                <p className="sm:text-[17px] md:text-[19px] lg:text-[24px] leading-[29px] text-black">
                  +2348132030908
                </p>
              </a>
            </div>

            <div className="flex gap-x-[14px] sm:text-[25px] lg:text-[30px] text-[#876D2E]">
              <FaTwitter />
              <a href="https://twitter.com/GODWILLONYEWUC1" target="_blank">
                <p className="sm:text-[17px] md:text-[19px] lg:text-[24px] leading-[29px] text-black">
                  twitter.com/GODWILLONYEWUC1
                </p>
              </a>
            </div>
            <div className="flex gap-x-[14px] sm:text-[25px] lg:text-[30px] text-[#876D2E]">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/godwill-onyewuchi-6746621b4/"
                target="_blank"
              >
                <p className="sm:text-[17px] md:text-[19px] lg:text-[24px] leading-[29px] text-black">
                  linkedin.com/in/godwill-onyewuchi-6746621b4/
                </p>
              </a>
            </div>

            <div className="flex gap-x-[14px] sm:text-[25px] lg:text-[30px] text-[#876D2E]">
              <SiHashnode />
              <a href="https://elevio.hashnode.dev/" target="_blank">
                <p className="sm:text-[17px] md:text-[19px] lg:text-[24px] leading-[29px] text-black">
                  Elevio
                </p>
              </a>
            </div>

            <div className="flex gap-x-[14px] sm:text-[25px] lg:text-[30px] text-[#876D2E]">
              <IoMdMailUnread />
              <p className="sm:text-[17px] md:text-[19px] lg:text-[24px] leading-[29px] text-black">
                godwillonyewuchii@gmail.com
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
