import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  EffectCreative,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";
import "../App.css";

const Slider = () => {
  return (
    <div className="mt-3 ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCreative]}
        spaceBetween={50}
        slidesPerView={1}
        effect="creative"
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="relative flex justify-center items-center rounded-xl ">
            <img
              className="w-full  h-[500px] rounded-xl object-cover"
              src="https://i.ibb.co.com/WvZxFPs/Counseling-1-01.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-[#010e37] opacity-70 rounded-xl flex items-center justify-center ">
              <div className="text-center max-w-[34rem]">
                <p className="text-white text-6xl font-bold mb-3">
                  Chart Your Career Path with Confidence
                </p>
                <p className="text-white text-xl">
                  Personalized guidance tailored to your dreams and aspirations
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex justify-center rounded-xl ">
            <img
              className="w-full  h-[500px] rounded-xl object-cover"
              src="https://i.ibb.co.com/7KDWcD6/pfec-aus-Educational-Counseling-banner.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-[#010e37] opacity-70 rounded-xl flex items-center justify-center ">
              <div className="text-center max-w-[34rem]">
                <p className="text-white text-6xl font-bold mb-3">
                  Explore Opportunities, Build Your Future
                </p>
                <p className="text-white text-xl">
                  Empowering you to make informed career decisions
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex justify-center rounded-xl ">
            <img
              className="w-full  h-[500px] rounded-xl object-cover"
              src="https://i.ibb.co.com/QnsTZLk/career-counselling-and-guidance.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-[#010e37] opacity-70 rounded-xl flex items-center justify-center ">
              <div className="text-center max-w-[34rem]">
                <p className="text-white text-6xl font-bold mb-3">
                  Achieve Your Full Potential
                </p>
                <p className="text-white text-xl">
                  Unlock resources and expert advice to shape your success
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
