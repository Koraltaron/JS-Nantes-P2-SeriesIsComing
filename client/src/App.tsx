import NavBar from "./components/NavBar";
import "./App.css";
import "./components/Navbar.css";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <h1>Voici App</h1>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
