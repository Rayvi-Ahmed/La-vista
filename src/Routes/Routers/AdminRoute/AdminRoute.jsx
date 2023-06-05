
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../../Hooks/useAdmin';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isadmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    if (loading || isAdminLoading) {
        <progress className="progress w-56"></progress>
    }

    if (user && isadmin) {
        return children
    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Adminastration restricted',
            showConfirmButton: false,
            timer: 1500
        })
        return <Navigate to={'/'} state={{ from: location }} replace></Navigate>
    }
};

export default AdminRoute;