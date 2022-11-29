import "./App.css";
import LeftBar from "./components/leftBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex w-full bg-white justify-center items-center">
      <LeftBar />
      <Hero />

      <div className="w-3/4 bg-mypalegreen h-screen rounded-l-[40px]">
        <NavBar />
        <Skills />
      </div>
    </div>
  );
}

export default App;