import React from 'react';
import Banner from '../Banner/Banner';
import CategorySection from '../CategorySection/CategorySection';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <CategorySection></CategorySection>
        </div>
    );
};

export default Home;