import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Componants/SectionTitle/SectionTitle';
import MenuCard from './MenuCard/MenuCard';


const MenItems = () => {
    const [menus, setMenus] = useState([])
    useEffect(() => {
        fetch('item.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(item => item.category === "popular")
                setMenus(popularMenu)

            })
    }, [])
    return (
        <div className='mb-10'>
            <SectionTitle
                heading={'Our Popular Menu'}
                subHeading={'Our all the popular items we will provide with reasonable price '}
            ></SectionTitle>
            <div className='my-8 grid md:grid-cols-2 gap-6'>
                {
                    menus.map(menu => <MenuCard
                        key={menu._id}
                        menu={menu}
                    ></MenuCard>)
                }
            </div>

        </div>
    );
};

export default MenItems;