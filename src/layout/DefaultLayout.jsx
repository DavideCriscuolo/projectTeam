import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Outlet.css";

export default function DefaultLayout() {
  return (
    <>
      <Header></Header>
      <div className="bg-img text-white">
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
}
