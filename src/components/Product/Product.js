import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { picture, name, price } = product;
    return (
        <div className='col col-md-4 g-4'>
            <Card className='card-section'>
                <Card.Img className='product-img' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: ${price}
                    </Card.Text>
                    <Link className='btn btn-primary' to='/adduser'>Add User</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;