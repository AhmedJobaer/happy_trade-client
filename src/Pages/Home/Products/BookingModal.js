import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = (booking) => {

    const { user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleBooking = (data) => {
        //console.log(data);
        const product = {
            name: user.displayName,
            email: user.email,
            sellerName: user.displayName,
            sellPrice: data.sellPrice,
            location: data.location,
            category_id: booking.booking.category_id,
        }

        fetch("https://happy-trade-server.vercel.app/bookingProducts", {
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

    console.log(booking);
    //console.log(booking.booking.location);


    return (
        <div>

            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <div className=''>
                        <div className='w-96 p-7'>

                            <form onSubmit={handleSubmit(handleBooking)}>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Name</span></label>
                                    <input type="text" disabled defaultValue={booking?.booking.name} className="input input-bordered w-full max-w-xs" />
                                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                </div>


                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Selling Price</span></label>
                                    <input disabled defaultValue={booking.booking.sellPrice} type="text" {...register("sellPrice", {
                                        required: true
                                    })} className="input input-bordered w-full max-w-xs" />
                                    {errors.sellPrice && <p className='text-red-500'>{errors.sellPrice.message}</p>}
                                </div>


                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Location</span></label>
                                    <input disabled defaultValue={booking.booking.location} placeholder='Pickup location' type="text" {...register("location", {
                                        required: "Location is required"
                                    })} className="input input-bordered w-full max-w-xs" />
                                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                                </div>


                                <input className='btn btn-accent w-full mt-4' value="Confirm Booking" type="submit" />
                                {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                            </form>
                        </div>
                    </div>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;