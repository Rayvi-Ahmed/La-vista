import React from 'react';
import SectionTitle from '../../../../Componants/SectionTitle/SectionTitle';
import featureImg from './../../../../assets/home/featured.jpg'
import "./Feature.css"

const Feature = () => {
    return (
        <div className='feature-img bg-fixed'>
            <SectionTitle
                subHeading={"Check it Out"}
                heading={"From Our Menu"}
            ></SectionTitle>

            <div className='flex justify-center text-white items-center gap-4 my-2  bg-opacity-10 w-11/12 md:ml-10 mx-auto bg-black py-10 px-15 md:mr-10'>
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div>
                    <h1>March 20,2023</h1>
                    <h1 className='uppercase'>Where can i get some?</h1>
                    <p className='md:mr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, commodi a pariatur minima magni accusantium doloribus quas repellendus amet distinctio delectus veritatis debitis hic iste atque repellat labore voluptates at maiores! Enim nobis minima accusantium qui placeat, magnam rerum incidunt commodi suscipit. Impedit, dolores voluptatem maiores nulla natus labore numquam?</p>

                </div>


            </div>


        </div>
    );
};

export default Feature;