import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ category }) => {

    const { name, img, category_id } = category;
    console.log(category_id);

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions">
                        <Link to={`products/${category_id}`} ><button className="btn btn-primary">See All</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;