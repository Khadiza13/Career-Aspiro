import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Choose = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  const services = [
    {
      title: "Certified Professional",
      description:
        "Our experts are certified in their respective fields, ensuring top-notch guidance and support to help you succeed.",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "Personalized Approach",
      description:
        "We understand that every individual is unique, offering tailored strategies to match your specific goals and aspirations.",
      icon: "https://cdn-icons-png.flaticon.com/512/4470/4470871.png",
    },
    {
      title: "Proven Track Record",
      description:
        "With years of experience and countless success stories, our approach is backed by a history of outstanding results.",
      icon: "https://cdn-icons-png.flaticon.com/512/2830/2830302.png",
    },
    {
      title: "24/7 Premium Support",
      description:
        "Our dedicated team is always available to assist you, offering round-the-clock support for your convenience and success.",
      icon: "https://cdn-icons-png.flaticon.com/512/843/843261.png",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 ">
      <div className="w-10/12 mx-auto">
        <div className="text-center mb-10" data-aos="fade-up">
          <h3 className="text-blue-600 text-lg font-semibold uppercase">
            Why Choose Us
          </h3>
          <h2 className="text-3xl font-bold text-gray-800">
            Unlock Your True Potential with Our Expertise
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex items-start bg-white p-6 rounded-lg shadow-md"
              data-aos="fade-up" // Add AOS animation here
              data-aos-delay={idx * 100}
            >
              <div className="w-14 h-14 bg-blue-600 flex items-center justify-center rounded-md mr-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
