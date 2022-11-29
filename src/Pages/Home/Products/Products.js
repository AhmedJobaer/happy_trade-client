import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {

    const products = useLoaderData();
    console.log(products);


    return (
        <div>
            <h2 className='text-3xl my-5 text-center'>This is product</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    products.map(product => <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={product.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}
                                <div className="badge badge-secondary">NEW</div></h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className='flex justify-evenly'>
                                <div className="badge badge-accent p-3">Selling Price: {product.sellPrice}</div>
                                <div className="badge badge-accent p-3">Buying Price: {product.buyPrice}</div>
                            </div>
                            <h2 className=''>Location: {product.location}</h2>
                            <h2 className=''>Description: {product.description}</h2>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Book Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;