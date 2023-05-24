import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import MenItems from '../MetuItems/MenItems';
import MenuBanner from './MenuBanner/MenuBanner';
import Feature from './Featured/Feature';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MenuBanner></MenuBanner>
            <Category></Category>
            <MenItems></MenItems>
            <Feature></Feature>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;