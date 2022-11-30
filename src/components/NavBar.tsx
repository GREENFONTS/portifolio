import { Link } from "react-router-dom";
import MenuIcon from "../assets/MenuIcon.svg"

const NavBar = () => {
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
    <div className="flex w-[65px] h-[65px] sm:w-[350px] md:w-[450px] lg:w-[710px] md:h-[80px] lg:h-[100px] bg-white rounded-bl-[30px] absolute right-0 top-0">
      <div className="xs:max-sm:hidden flex w-4/5  m-5 items-center">
        <div className="flex w-full items-end justify-end">
          <div className="flex sm:w-full lg:w-2/3 justify-between sm:text-md md:text-lg">
            <button className="cursor-pointer" onClick={() => DownloadPdf()}>
              Download CV
            </button>

            <Link to="/">Projects</Link>

            <p>Contact Me</p>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex w-full justify-center items-center">
        <img src={MenuIcon} alt="menu" />
      </div>
    </div>
  );
};

export default NavBar;
