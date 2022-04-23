import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-3'>
            <Link className='mx-3 text-decoration-none fs-5' to='/'>Home</Link>
            <Link className='mx-3 text-decoration-none fs-5' to='/adduser'>Add</Link>
            <Link className='mx-3 text-decoration-none fs-5' to='/update'>Update</Link>
            <Link className='mx-3 text-decoration-none fs-5' to='/manage'>Manage</Link>
        </div>
    );
};

export default Header;