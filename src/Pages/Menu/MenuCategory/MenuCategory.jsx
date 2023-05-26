import MenuCard from "../../Home/MetuItems/MenuCard/MenuCard";
import Cover from "../Cover/Cover";

const MenuCategory = ({ item, title, img }) => {
    // const [menu] = useMenu()
    return (
        <div>
            <Cover img={img} title={title}></Cover>
            <div className='my-8 grid md:grid-cols-2 gap-6'>
                {
                    item.map(menu => <MenuCard
                        key={menu._id}
                        menu={menu}
                    ></MenuCard>)
                }
            </div>

        </div>
    );
};

export default MenuCategory;