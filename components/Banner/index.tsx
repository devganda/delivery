import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import styles from "./Banner.module.css";

export const Banner = ()=>{
    return (
        <div className={styles.container}>
             <Swiper
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className={styles.swiper}
                
            >
                <SwiperSlide className={styles.slide}>
                    <picture>
                        <img src="/tmp/bannerOne.png" alt="Banner One"/>
                    </picture>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <picture>
                        <img src="/tmp/bannerTwo.png" alt="Banner Two"/>
                    </picture>  
                </SwiperSlide>
            </Swiper>
        </div>
    );
};