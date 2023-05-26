import { useState } from 'react';
import orderImg from '../../assets/shop/banner2.jpg'
import Cover from '../Menu/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import OrderTab from '../../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['soup', 'dessert', 'pizza', 'salad', 'popular', 'drinks'];
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()

    // set the all category////

    const desert = menu.filter(item => item.category === "dessert")
    const popular = menu.filter(item => item.category === "popular")
    const soup = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")
    const drinks = menu.filter(item => item.category === "drinks")
    const salad = menu.filter(item => item.category === "salad")
    return (
        <div>
            <Cover
                img={orderImg} title={"Order Food"}
            ></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Popular</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab item={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={desert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={drinks}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={popular}></OrderTab>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;
