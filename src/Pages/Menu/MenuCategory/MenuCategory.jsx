import { Link } from "react-router-dom";
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
            <Link className="text-center" to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4">Order Food</button></Link>
        </div>
    );
};

export default MenuCategory;