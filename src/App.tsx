import "./App.css";
import LeftBar from "./components/leftBar";
import Hero from "./Pages/Home/components/Hero";
import Skills from "./Pages/Home/components/Skills";
import NavBar from "./components/NavBar";
import Layout from "./layout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
