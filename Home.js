// components/Home.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';

const Home = () => {
    const { data } = useContext(DataContext);

    return (
        <div>
            <h1>Home Page</h1>
            <p>Data from context: {data}</p>
            <nav>
                <Link to="/AboutUs">About</Link>
                
            </nav>
        </div>
    );
};

export default Home;
