import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaCalendarAlt, FaWallet, FaTrophy, FaBookmark, FaHome, FaHamburger, FaFileContract, FaShoppingBag } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link><FaHome></FaHome> My Home</Link></li>
                    <li><Link><FaCalendarAlt></FaCalendarAlt>Resevasion</Link></li>
                    <li><Link><FaShoppingCart></FaShoppingCart> My Cart</Link></li>
                    <li><Link><FaWallet></FaWallet>Payment History</Link></li>
                    <li><Link><FaBookmark></FaBookmark>Booking Status</Link></li>
                    <li><Link><FaTrophy></FaTrophy>Reviwe</Link></li>
                    <div className="divider"></div>
                    <li><Link className={'/'}><FaHome></FaHome>Home</Link></li>
                    <li><Link className={'/menu'}><FaHamburger></FaHamburger> Menu</Link></li>
                    <li><Link className={'/menu'}><FaShoppingBag></FaShoppingBag>Shopping</Link></li>
                    <li><Link className={'/contact'}> <FaFileContract></FaFileContract> Contact</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;