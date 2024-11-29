import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { loginUser, setUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");

    const pass = form.get("pass");
    console.log({ email, pass });
    loginUser(email, pass)
      .then((res) => {
        const user = res.user;
        setUser(user);
      })
      .catch((error) => {
        console.error("Error during registration:", error);
      });
  };
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-blue-900 text-2xl font-bold text-center pt-6">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="pass"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#0047ab]  text-white font-bold text-lg">
                Login
              </button>
            </div>
          </form>
          <p className="text-center pb-8">
            Don't Have An Account?
            <Link
              className="underline underline-offset-1 text-blue-600 ml-1"
              to="/auth/register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
