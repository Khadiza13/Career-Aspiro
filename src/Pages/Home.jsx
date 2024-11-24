import { Outlet } from "react-router-dom";
import Slider from "../components/Slider";
import Choose from "../components/Choose";

const Home = () => {
  return (
    <div className="">
      <Slider></Slider>
      <Outlet></Outlet>
      <Choose></Choose>
    </div>
  );
};

export default Home;
