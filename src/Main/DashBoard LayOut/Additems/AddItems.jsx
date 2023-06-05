import { formToJSON } from 'axios';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const img_hoisting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN

const AddItems = () => {
    const [axioSecure] = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hoisting_token}`

    const onSubmit = data => {
        console.log(data)

        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: "POST",
            body: formData

        })
            .then(res => res.json())
            .then(resImg => {
                if (resImg.success) {
                    const imgUrl = resImg.data.display_url
                    const { name, price, category, recipe } = data
                    const newItem = { name, price: parseFloat(price), recipe, category, image: imgUrl }
                    console.log(newItem)
                    axioSecure.post('/menu', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Food item added',
                                    showConfirmButton: false,
                                    timer: 1500
                                })

                            }
                        })
                }

            })

    }


    return (
        <div className='w-full px-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Racipe name*</span>
                    </label>
                    <input type="text" {...register("name", { required: true, maxLength: 120 })} placeholder="Racipe name" className="input input-bordered w-full max-w-xs" />

                    <div className='flex '>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select {...register("category", { required: true, maxLength: 120 })} className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Pizza</option>
                            <option>Salad</option>
                            <option>Desart</option>
                            <option>Drinks</option>
                            <option>Popular</option>
                        </select>

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input {...register("price", { required: true, maxLength: 120 })} type="Number" placeholder="Add food price" className="input input-bordered w-full max-w-xs" />

                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text w-full">Food description</span>
                    </label>
                    <textarea {...register("recipe", { required: true, maxLength: 120 })} className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Add file</span>
                    </label>
                    <input {...register("image", { required: true, maxLength: 120 })} type="file" className="file-input file-input-bordered w-full max-w-xs" />

                </div>
                <input className='btn bg-warning my-3' type="submit" value="Add Item" />


            </form>

        </div>
    );
};

export default AddItems;