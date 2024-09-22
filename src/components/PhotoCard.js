
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const PhotoCard = (...image) => {
    return (
        < SwiperSlide >
            <p>{image.src}</p>
            <p>{image.default}</p>
            <img key={image.index} src={image.default} alt={`${image.index}`} />
        </SwiperSlide>
    )
}