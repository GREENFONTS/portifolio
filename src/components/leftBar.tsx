import { FaWhatsapp, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const LeftBar = () => {
  return (
    <div className="w-1/4 flex">
      <div className="flex flex-col absolute top-10 left-10">
        <div className="flex flex-col justify-center items-center gap-y-2">
          <div className="flex justify-center items-center w-[142px] h-[42px] bg-gray-500  text-2xl text-gray-100">
            Elevio
          </div>
          <h2 className="text-dark text-lg">Frontend Developer/MERN Stack</h2>
        </div>
      </div>

      <div className="flex  gap-x-[30px] justify-center items-center absolute bottom-[60px] left-10">
        <a href="https://wa.link/b4v59f" target="_blank">
          <FaWhatsapp color="#876D2E" size="33" />
        </a>

        <a href="https://twitter.com/GODWILLONYEWUC1" target="_blank">
          <FaTwitter color="#876D2E" size="33" />
        </a>

        <a
          href="https://www.linkedin.com/in/godwill-onyewuchi-6746621b4/"
          target="_blank"
        >
          <FaLinkedin color="#876D2E" size="33" />
        </a>

        <a href="https://github.com/GREENFONTS/" target="_blank">
          <FaGithub color="#876D2E" size="33" />
        </a>
      </div>
    </div>
  );
};

export default LeftBar;
