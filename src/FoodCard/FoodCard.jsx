import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { json, useLocation, useNavigate } from 'react-router-dom';
import UseCart from '../UseCart';

const FoodCard = ({ items }) => {
    const { image, _id, price, recipe, name } = items
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [refetch] = UseCart()

    const handleAddToCart = item => {
        console.log(item)

        if (user && user.email) {
            const cartItems = { menuItems: _id, price, image, recipe, name, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(cartItems)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your food addded at cart',
                            showConfirmButton: false,
                            timer: 1500
                        })


                    }
                })
        } else {
            Swal.fire({
                title: 'Please login fist to order food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login here'

            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='absolute right-0 mr-4 mt-4 bg-slate-600 rounded-md text-white px-4'> ${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <span>{recipe}</span>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(items)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;