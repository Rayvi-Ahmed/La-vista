
import SectionTitle from '../../Componants/SectionTitle/SectionTitle';
import useMenu from '../../Hooks/useMenu';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import img from '../../assets/menu/banner3.jpg'
import offerImg from '../../assets/home/chef-service.jpg'
import MenuCategory from './MenuCategory/MenuCategory';
import Cover from './Cover/Cover';


const Menu = () => {
    const [menu] = useMenu()

    // set the all category////

    const desert = menu.filter(item => item.category === "dessert")
    const popular = menu.filter(item => item.category === "popular")
    const soup = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")
    const offered = menu.filter(item => item.category === "offered")
    const salad = menu.filter(item => item.category === "salad")

    return (
        <div>

            {/* Offerd Menu */}
            <Cover img={img} title={"Our Menu"}></Cover>
            <SectionTitle
                subHeading={"You need offer up to 30%"}
                heading={"Offer Items"}
            ></SectionTitle>
            <MenuCategory item={offered} img={offerImg} title={'Offer'}></MenuCategory>


            {/* Dessert Menu */}
            <SectionTitle
                subHeading={"Here available delicius dessert item"}
                heading={"Dessert items"}
            ></SectionTitle>
            <MenuCategory item={desert} img={dessertImg} title={'Dessert'}></MenuCategory>

            {/* Soup menu  */}
            <SectionTitle
                subHeading={"Thai,cord many more soup here"}
                heading={"Soup Items"}
            ></SectionTitle>
            <MenuCategory item={soup} img={soupImg} title={'Soup'}></MenuCategory>


            {/* Pizza */}
            <SectionTitle
                subHeading={"Italian Pizza"}
                heading={"Pizza"}
            ></SectionTitle>
            <MenuCategory item={pizza} img={pizzaImg} title={'Pizza'}></MenuCategory>

            {/* Popular */}
            <SectionTitle
                subHeading={"Here we some offer popular items"}
                heading={"Popular"}
            ></SectionTitle>
            <MenuCategory item={popular} img={img} title={'Popular item'}></MenuCategory>


            {/* Salad */}
            <SectionTitle
                subHeading={"Continantal salad"}
                heading={"Salad item"}
            ></SectionTitle>
            <MenuCategory item={salad} img={saladImg} title={'Salad'}></MenuCategory>

        </div>
    );
};

export default Menu;