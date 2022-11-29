import React from 'react';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner/Banner2';
import CategorySection from '../CategorySection/CategorySection';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <CategorySection></CategorySection>
            <Banner2></Banner2>
        </div>
    );
};

export default Home;