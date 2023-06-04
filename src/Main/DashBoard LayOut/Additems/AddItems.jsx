import React from 'react';

const AddItems = () => {
    return (
        <div className='w-full px-10'>
            <form>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Racipe name*</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Category*</span>
                    </label>
                    <select className="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>Pizza</option>
                        <option>Salad</option>
                        <option>Desart</option>
                        <option>Drinks</option>
                        <option>Popular</option>
                    </select>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price*</span>
                    </label>
                    <input type="Number" placeholder="Add food price" className="input input-bordered w-full max-w-xs" />

                </div>
                <div>
                    <label className="label">
                        <span className="label-text w-full">Food description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Add file</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />

                </div>
                <input className='btn bg-warning my-3' type="submit" value="Add Item" />


            </form>
        </div>
    );
};

export default AddItems;