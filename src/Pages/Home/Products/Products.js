import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {

    const loader = useLoaderData();
    console.log(loader);

    return (
        <div>
            <h2>This is product</h2>
        </div>
    );
};

export default Products;