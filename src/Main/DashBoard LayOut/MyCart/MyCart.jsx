import { FaTrashAlt } from "react-icons/fa";
import UseCart from "../../../UseCart";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = UseCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/carts?${item._id}`, {
                        method: "DELETE",
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.deletedCount > 0) {
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
        <div>
            <div className="flex justify-between items-center uppercase gap-4">
                <h1 className="text-3xl font-bold text-center">Total Carts: {cart.length}</h1>
                <h1 className="text-3xl font-bold text-center">Total Price: ${total}</h1>
                <button className="btn btn-accent">Pay</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food Image</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="text-end">${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn-lg p-2 rounded-md bg-red-600
                                    text-white"><FaTrashAlt></FaTrashAlt></button>
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

export default MyCart;