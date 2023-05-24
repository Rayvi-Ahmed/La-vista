import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Aos from "aos";

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";


const Category = () => {
    Aos.init({ duration: 3000 })
    return (
        <section className="">
            <SectionTitle
                subHeading={'11:00am to 10:00pm'}
                heading={'Oreder online'}

            >

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,

                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h2 className="text-4xl text-center text-white -mt-16 uppercase">Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h2 className="text-4xl text-center text-white -mt-16 uppercase">Pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h2 className="text-4xl text-center text-white -mt-16 uppercase">Soup</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h2 className="text-4xl text-center text-white -mt-16 uppercase">Deasert</h2>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;