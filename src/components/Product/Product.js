import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { picture, name, price } = product;
    console.log(product);

    const updateProduct = event => {
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };

        // PUT JSON data
        const url = `http://localhost:5000/product/${product._id}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <div className='col col-md-4 g-4'>
            <Card className='card-section'>
                <Card.Img className='product-img' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: ${price}
                    </Card.Text>
                </Card.Body>
                <Link onClick={() => updateProduct(product._id)} className='btn btn-primary mb-2' to='/'>Update</Link>
                <Link className='btn btn-primary' to='/'>Delete</Link>
            </Card>
        </div>
    );
};

export default Product;