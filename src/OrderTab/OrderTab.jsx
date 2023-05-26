import React from 'react';
import FoodCard from '../FoodCard/FoodCard';

const OrderTab = ({ item }) => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>

            {
                item.map(items => <FoodCard
                    key={items._id}
                    items={items}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;