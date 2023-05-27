import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviwe, setReviwe] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviwe(data))
    }, [])

    return (
        <div className="p-20 space-y-24">
            <SectionTitle
                subHeading={"What our client says"}
                heading={"Testimonials"}
            >

            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviwe.map(rvw => <SwiperSlide
                        key={rvw._id}

                    >
                        <Rating
                            className=" w-6/12 mx-auto"
                            style={{ maxWidth: 180 }}
                            value={rvw.rating}
                            readOnly
                        />
                        <div className="text-center w-6/12 mx-auto">
                            <p>{rvw.details}</p>
                            <h1 className="uppercase text-4xl text-yellow-700">{rvw.name}</h1>
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>

        </div>
    );
};

export default Testimonials;