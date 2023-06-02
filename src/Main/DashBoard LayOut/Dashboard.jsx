import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaCalendarAlt, FaWallet, FaTrophy, FaBookmark, FaHome, FaHamburger, FaFileContract, FaShoppingBag, FaUtensils, FaUsers } from 'react-icons/fa';

const Dashboard = () => {

    const isAdmin = true;
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary sdrawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054]">

                    {
                        isAdmin ? <>
                            {/* <!-- Sidebar content here --> */}
                            <li><NavLink to={'/dashboard/home'}><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to={'/dashboard/addItem'}><FaUtensils></FaUtensils> Add item</NavLink></li>
                            <li><NavLink to={'/dashboard/mycart'}><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                            <li><NavLink to={'/dashboard/manageitem'}><FaWallet></FaWallet>Manage Item</NavLink></li>
                            <li><NavLink to={'/dashboard/booking'}><FaBookmark></FaBookmark>Manage Bookings</NavLink></li>
                            <li><NavLink to={'/dashboard/allusers'}><FaUsers></FaUsers>All Users</NavLink></li>
                            <div className="divider"></div>

                        </>
                            : <>
                                {/* <!-- Sidebar content here --> */}
                                <li><NavLink to={'/dashboard/home'}><FaHome></FaHome> My Home</NavLink></li>
                                <li><NavLink to={'/dashboard/reservasion'}><FaCalendarAlt></FaCalendarAlt>Resevasion</NavLink></li>
                                <li><NavLink to={'/dashboard/mycart'}><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                                <li><NavLink to={'/dashboard/history'}><FaWallet></FaWallet>Payment History</NavLink></li>
                                <li><NavLink to={'/dashboard/booking'}><FaBookmark></FaBookmark>Booking Status</NavLink></li>
                                <li><NavLink to={'/dashboard/review'}><FaTrophy></FaTrophy>Reviwe</NavLink></li>
                                <div className="divider"></div>
                            </>
                    }

                    {/* Main menu */}
                    <li><NavLink to={'/'} ><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to={'/menu'}><FaHamburger></FaHamburger> Menu</NavLink></li>
                    <li><NavLink to={'/shopping'}><FaShoppingBag></FaShoppingBag>Shopping</NavLink></li>
                    <li><NavLink to={'/contact'}> <FaFileContract></FaFileContract> Contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
};
export default Dashboard;