import React from 'react';
import Category from '../../Category/Category';

const MenuCard = ({ menu }) => {

    const { image, _id, price, recipe, name } = menu
    return (
        <div className='flex space-x-4'>
            <img style={{ borderRadius: "0 200px 200px 200px" }} className='w-[120px]' src={image} alt="" />
            <div>
                <h1 className='uppercase'>{name}----------------</h1>
                <p>{recipe}</p>

            </div>
            <div>
                <h1 className='text-yellow-500'>${price}</h1>
            </div>



        </div>
    );
};

export default MenuCard;