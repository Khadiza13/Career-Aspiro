import { Outlet } from "react-router-dom";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="">
      <Slider></Slider>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
