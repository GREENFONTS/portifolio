import {Link} from "react-router-dom"

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
    <div className="flex w-[710px] h-[100px] bg-white rounded-bl-[30px] absolute right-0 top-0">
    <div className="flex w-4/5  m-5 items-center">
      <div className="flex w-full items-end justify-end">
        <div className="flex w-2/3 justify-between text-lg">
          <button
            className="cursor-pointer"
            onClick={() => DownloadPdf()}
          >
            Download CV
          </button>

          <Link to="/">Projects</Link>

          <p>Contact Me</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NavBar