import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Services = () => {
  const data = useLoaderData();
  //console.log(data);
  const [services, setServices] = useState([]);
  useEffect(() => {
    setServices(data);
  }, [data]);
  return (
    <div className="bg-[#d9f1ff]">
      <p className="text-center text-black text-4xl font-semibold py-8">
        Services for Your Success
      </p>
      <div className="w-10/12 mx-auto ">
        <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-1">
          {services.map((item, idx) => (
            <Card key={idx} item={item}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
