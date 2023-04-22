import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "./styles/Reviews.module.scss";
import "./styles/ReviewsArrows.scss"
import TeamSlide from './TeamSlide';


import 'swiper/css';
import "swiper/css/navigation"

const Reviews = () => {
    return ( 
        <div className={styles.reviews}>
            <h1 className={styles.title}>
                Trusted by top teams
            </h1>
            
            <Swiper
            modules={[Navigation]}
            initialSlide={1}
            slidesPerView={1}
            spaceBetween={0}
            navigation={{
                
                nextEl: ".arrow-right",
                prevEl: ".arrow-left",
            }}
            loop={true}
            >
                <SwiperSlide >
                    {({ isActive }) => (
                        <TeamSlide  active={isActive ? "active" : ""}/>
                    )}
                </SwiperSlide>
                <SwiperSlide >
                    {({ isActive }) => (
                        <TeamSlide  active={isActive ? "active" : ""}/>
                    )}
                </SwiperSlide>
                <SwiperSlide >
                    {({ isActive }) => (
                        <TeamSlide  active={isActive ? "active" : ""}/>
                    )}
                </SwiperSlide>
            </Swiper>
            
            <div className="arrows">
                <div className="arrow-left"></div>
                <div className="arrow-right"></div>
            </div>
        </div>
     );
}
 
export default Reviews;