import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-gradient-to-r from-[#0047ab] to-[#1ca9c9]">
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
