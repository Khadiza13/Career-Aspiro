import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showpass, setShowpass] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photoURL = form.get("photo");
    const pass = form.get("pass");
    console.log({ name, email, photoURL, pass });
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(pass)) {
      toast.error(
        "Password must include at least one uppercase, one lowercase, and be at least 6 characters long."
      );
      return;
    }
    createUser(email, pass, name, photoURL)
      .then(() => {
        toast.success("Registration successful!");
        navigate("/"); // Redirect to the homepage
      })
      .catch((error) => {
        toast.error(`Registration failed: ${error.message}`);
      });
    // createUser(email, pass)
    //   .then((res) => {
    //     const user = res.user;

    //     // Update the user's profile with name and photo URL
    //     return updateProfile(user, {
    //       displayName: name,
    //       photoURL: photo,
    //     }).then(() => {
    //       // After successfully updating the profile, set the user context
    //       setUser({
    //         ...user,
    //         displayName: name,
    //         photoURL: photo,
    //       });
    //       console.log(user); // Should now include name and photoURL
    //     });
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //   });
  };
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Registered with Google successfully!");
        navigate("/"); // Redirect to the homepage
      })
      .catch((error) => {
        toast.error(`Google registration failed: ${error.message}`);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Register | Career Aspiro</title>
      </Helmet>
      <ToastContainer />
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-blue-900 text-2xl font-bold text-center pt-6">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo-url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showpass ? "text" : "password"}
                name="pass"
                placeholder="password"
                className="input input-bordered pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowpass(!showpass)}
                className="absolute top-12 right-3 flex items-center text-gray-500"
              >
                {showpass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#0047ab]  text-white font-bold text-lg">
                Register
              </button>
            </div>
            <div className="form-control">
              <button
                onClick={handleGoogleLogin}
                className="btn bg-[#0047ab]  text-white font-bold text-lg"
              >
                Register with Google
              </button>
            </div>
          </form>

          <p className="text-center pb-6">
            Already Have An Account?
            <Link
              className="underline underline-offset-1 text-blue-600 ml-1"
              to="/auth/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
