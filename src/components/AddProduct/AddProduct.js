import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        // Uploading JSON data
        const url = 'http://localhost:5000/product';
        console.log(url);
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className='w-25 mx-auto'>
            <h1>Add Product</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name")} />
                <input className='mb-2' placeholder='Price' {...register("price")} />
                <input className='mb-2' placeholder='Picture URL' type="text" {...register("picture")} />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;