import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Section from './Section';

const CategorySection = () => {

    //const [category, setCategory] = useState([]);

    const { data: categorySection = [], refetch, isLoading } = useQuery({
        queryKey: ['categorySection'],
        queryFn: () => fetch("https://happy-trade-server.vercel.app/categorySection")
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(categorySection);

    /* useEffect(() => {
        fetch('https://happy-trade-server.vercel.app/categorySection')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []) */




    return (
        <div>
            <h2 className='text-3xl my-5 text-center'>Category Section</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    categorySection.map(category => <Section
                        key={category._id}
                        category={category}


                    ></Section>)
                }
            </div>
        </div>
    );
};

export default CategorySection;