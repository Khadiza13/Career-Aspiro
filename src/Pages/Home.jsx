import { Outlet } from "react-router-dom";
import Slider from "../components/Slider";
import Choose from "../components/Choose";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Home | Career Aspiro</title>
      </Helmet>
      <Slider></Slider>
      <Outlet></Outlet>
      <Choose></Choose>
    </div>
  );
};

export default Home;
