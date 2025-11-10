import React from 'react';
import Banner from '../Banner/Banner';
import LatestBooks from '../../Pages/LatestBooks';

const latestBookPromise = fetch('http://localhost:3000/books').then(res => res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestBooks latestBookPromise={latestBookPromise}></LatestBooks>
        </div>
    );
};

export default Home;