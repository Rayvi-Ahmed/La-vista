import React from 'react';

const FoodCard = ({ items }) => {
    const { image, _id, price, recipe, name } = items
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='absolute right-0 mr-4 mt-4 bg-slate-600 rounded-md text-white px-4'> ${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <span>{recipe}</span>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;