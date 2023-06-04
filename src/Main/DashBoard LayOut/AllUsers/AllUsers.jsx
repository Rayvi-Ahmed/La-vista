import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;

    })
    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Now this is admin",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: "DELETE"
                })

                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className='w-full mx-auto mr-3
        '>
            <div className='my-4 text-3xl text-center text-bold'>
                <h1>Total Users: {users.length}</h1>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full my-6">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>User Neme</th>
                            <th>User Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}

                            >
                                <th> {index + 1}</th>
                                <td>{user.name} </td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-lg p-3 rounded-xl bg-orange-400
                                    text-whiteb border-0 shadow-lg"> <FaUserShield></FaUserShield></button>
                                }</td>

                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-lg p-3 rounded-xl bg-red-600
                                    text-whiteb border-0 shadow-lg"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }



                    </tbody>
                    {/* foot */}
                </table>
            </div>

        </div>
    );
};

export default AllUsers;