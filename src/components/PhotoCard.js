import { SwiperSlide } from "swiper/react";
import "swiper/css";

export const PhotoCard = ({ src, alt }) => {
  return (
    <SwiperSlide>
      <img src={src} alt={alt || "Photo"} />
    </SwiperSlide>
  );
};
