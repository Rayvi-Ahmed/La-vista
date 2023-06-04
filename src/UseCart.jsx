import { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './Hooks/useAxiosSecure';

const UseCart = () => {
    const { user, loading } = useContext(AuthContext)
    // const token = localStorage.getItem('access-token')
    const [axisSecure] = useAxiosSecure()

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axisSecure(`/carts?email=${user?.email}`)
            return res.data;
        }
    })
    return [cart, refetch]
};

export default UseCart;
