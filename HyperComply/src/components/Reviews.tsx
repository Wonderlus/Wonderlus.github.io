import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "./styles/Reviews.module.scss";
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
            slidesPerView={1}
            spaceBetween={-300}
            navigation={true}
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
            
            
        </div>
     );
}
 
export default Reviews;