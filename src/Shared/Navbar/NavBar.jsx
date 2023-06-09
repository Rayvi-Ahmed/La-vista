import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart"
import UseCart from '../../UseCart';



const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = UseCart()

    const handleLogout = () => {
        logOut()
    }
    const navOption =
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/menu'}>Menu</Link></li>
            <li><Link to={'/order/soup'}>Order</Link></li>
            <li><Link to={'/secrate'}>Secrate</Link></li>
            <li>
                <Link to={'/dashboard/mycart'}>
                    <button className="btn gap-2 bg-opacity-20 border-0">
                        <FaShoppingCart></FaShoppingCart>
                        <div className="badge badge-secondary">{cart?.length || 0}</div>
                    </button>
                </Link>

            </li>

            {user ?
                <>
                    <li>{user?.displayName}</li>
                    <li><button onClick={handleLogout} className="btn btn-active bg-slate-400">Log out</button>
                    </li>

                </> :
                <>
                    <li><Link to={'/login'}>Log In</Link></li>
                </>
            }
        </>
    return (
        <div className="navbar fixed z-10 bg-opacity-20 bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">La Vista</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default NavBar;