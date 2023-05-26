import React from 'react';
import img from '../../assets/menu/banner3.jpg'
import Cover from './Cover/Cover';
import MenItems from '../Home/MetuItems/MenItems';

const Menu = () => {
    return (
        <div>
            <Cover img={img} title={'Our Menu'}></Cover>
            <MenItems></MenItems>
            <Cover img={img} title={'Our Menu'}></Cover>
            <MenItems></MenItems>
            <Cover img={img} title={'Our Menu'}></Cover>
            <MenItems></MenItems>

        </div>
    );
};

export default Menu;