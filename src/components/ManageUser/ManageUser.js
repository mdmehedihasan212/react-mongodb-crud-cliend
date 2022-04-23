import React from 'react';
import useProducts from '../../hooks/useProducts';
import './ManageUser.css';

const ManageUser = () => {
    const [products, setProducts] = useProducts();

    const deleteProduct = id => {
        const proceed = window.confirm("Are you sure delete?")
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const reaming = products.filter(product => product._id !== id)
                    setProducts(reaming);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>Manage User</h1>
            <ul>
                {
                    products.map(product => <div className='manage-product'>
                        <img className='photo-manage' src={product.picture} alt="" />
                        <h4>{product.name}</h4>
                        <button onClick={() => deleteProduct(product._id)} className='btn btn-danger'>Delete</button>
                    </div>)
                }
            </ul>
        </div>
    );
};

export default ManageUser;