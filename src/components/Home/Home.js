import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';

const Home = () => {
    const [products] = useProducts();

    return (
        <div className='container'>
            <div className='row'>
                {
                    products.map(product => <Product key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Home;