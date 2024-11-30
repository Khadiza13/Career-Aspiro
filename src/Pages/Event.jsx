import { Helmet } from "react-helmet-async";

const Event = () => {
  return (
    <div>
      <Helmet>
        <title>Events | Career Aspiro</title>
      </Helmet>
      <div className="hero bg-[#271470]">
        <div className="hero-content text-center">
          <div className="max-w-4xl py-20 ">
            <h1 className="text-4xl font-bold text-white mb-5">
              Upcoming Events
            </h1>
            <p className=" text-white font-thin ">
              Empowering you with the tools, insights, and guidance to excel in
              your journey. Discover tailored programs and expert advice to
              achieve your personal and professional goals
            </p>
          </div>
        </div>
      </div>
      <div className="w-8/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 py-12 px-6">
        <div className="card bg-base-100 w-[28rem] border-2 border-blue-900 rounded-xl ">
          <figure>
            <img
              src="https://i.ibb.co.com/MM9n95w/adult-man-is-taking-an-online-management-course-2021-10-20-20-10-36-utc.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Digital Marketing Session
              <div className="badge badge-primary">NEW</div>
            </h2>
            <p>How to become master in digital marketing?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">10 Dec</div>
              <div className="badge badge-outline">Online</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-[28rem] order border-2 border-blue-900 rounded-xl">
          <figure>
            <img
              src="https://i.ibb.co.com/hc9LcdQ/University-Life-Illustration-1-1-1024x768.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Financial Planning
              <div className="badge badge-primary">NEW</div>
            </h2>
            <p>How to plan your daily financial condition?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">12 Dec</div>
              <div className="badge badge-outline">Offline</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-[28rem] order border-2 border-blue-900 rounded-xl">
          <figure>
            <img src="https://i.ibb.co.com/MM9n95w/adult-man-is-taking-an-online-management-course-2021-10-20-20-10-36-utc.png" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Leadership Training
              <div className="badge badge-primary">NEW</div>
            </h2>
            <p>How to become leader in your student life?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">15 Dec</div>
              <div className="badge badge-outline">Online</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-[28rem] order border-2 border-blue-900 rounded-xl">
          <figure>
            <img
              src="https://i.ibb.co.com/kg1WLSw/career-crossroads.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Career Guidance
              <div className="badge badge-primary">NEW</div>
            </h2>
            <p>How to build your career as per your choice?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">20 Dec</div>
              <div className="badge badge-outline">Online</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
