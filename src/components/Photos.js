import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import img1 from '../assets/img/cup-of-coffee-1280537_640.jpg';
import img2 from '../assets/img/mug-6966047_640.jpg';
import img3 from '../assets/img/coffee-7567749_640.jpg';
export const Photos = () => {
	const { ref, inView } = useInView();

	return (
		<section className="photos" id="photos">
			<Container>
				<Row>
					<Col>
						<div ref={ref} className={inView ? "animate__animated animate__fadeInRight" : ""}>
							<h2>Photos</h2>
							<Swiper
								spaceBetween={50}
								slidesPerView={3}
								onSlideChange={() => console.log('slide change')}
								onSwiper={(swiper) => console.log(swiper)}
							>
								<SwiperSlide>
									<img src={img3} alt="Nature" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={img1} alt="Mountain" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={img2} alt="City" />
								</SwiperSlide>
							</Swiper>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};