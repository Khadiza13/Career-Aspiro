import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name || !photoURL) {
      toast.error("Name and Photo URL cannot be empty!");
      return;
    }

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        toast.error(`Failed to update profile: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <Helmet>
        <title>My Profile | Career Aspiro</title>
      </Helmet>
      <ToastContainer />
      <div className="card w-96 bg-white shadow-xl p-6">
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-lg font-bold">{user?.email}</h2>
        </div>
        <form onSubmit={handleUpdate} className="mt-6">
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              className="input input-bordered"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn bg-blue-600 text-white w-full mt-4"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
