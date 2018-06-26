import React from 'react';

function Product (props){
    return (
        <div>
            <h2>Product</h2>
             <h6>{props.items}</h6>
        </div>
    )
}

export default Product;