import React from 'react';
import ActivityBody from '../ActivityBody/ActivityBody';
import"./Header.css";
const Header = () => {
    return (
        <div>
            <h1 className='Headertitle'>Daily Activity App</h1>
            <ActivityBody></ActivityBody>
        </div>
    );
};

export default Header;