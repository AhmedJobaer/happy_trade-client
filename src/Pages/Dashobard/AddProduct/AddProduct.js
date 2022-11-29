import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const AddProduct = () => {


    const { user } = useContext(AuthContext);
    //console.log(user);

    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleSignUp = (data) => {
        //console.log(data);
        const product = {
            name: data.name,
            email: user.email,
            sellerName: user.displayName,
            sellPrice: data.sellPrice,
            buyPrice: data.buyPrice,
            location: data.location,
            description: data.des,
            category_id: data.type,
            img: data.imgLink
        }

        fetch("https://happy-trade-server.vercel.app/addProduct", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("product added successfully")
            })

        console.log(product);

    }

    return (
        <div>
            <h2>Adding Product</h2>
            <div className=''>
                <div className='w-96 p-7'>

                    <form onSubmit={handleSubmit(handleSignUp)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Name</span></label>
                            <input type="text" {...register("name", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Selling Price</span></label>
                            <input type="text" {...register("sellPrice", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.sellPrice && <p className='text-red-500'>{errors.sellPrice.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Buying Price</span></label>
                            <input type="text" {...register("buyPrice", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.buyPrice && <p className='text-red-500'>{errors.buyPrice.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Location</span></label>
                            <input placeholder='Pickup location' type="text" {...register("location", {
                                required: "Location is required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Image link</span></label>
                            <input type="text" {...register("imgLink", {
                                required: "img link is required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select name="type" {...register("type", {
                                required: true
                            })} className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option value="1">Asus</option>
                                <option value="2">Lenovo</option>
                                <option value="3">Dell</option>
                                <option value="4">Aser</option>
                                <option value="5">Msi</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Description</span></label>
                            <input type="text" {...register("des", {
                                required: "img link is required"
                            })} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
                        {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;