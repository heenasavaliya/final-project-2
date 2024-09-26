// // ProductDetails.js
// import React, { useEffect, useState } from 'react';

// const ProductDetails = () => {
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Retrieve the selected product from localStorage
//     const storedProduct = localStorage.getItem('selectedProduct');
//     if (storedProduct) {
//       setProduct(JSON.parse(storedProduct));
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Product Details</h1>
//       {product ? (
//         <div>
//           <h2>{product.name}</h2>
//           <p>Price: ${product.price}</p>
//         </div>
//       ) : (
//         <p>No product selected.</p>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;

// import React, { useEffect, useState } from 'react';

import React, { useState, useEffect } from 'react'

const ProductDetails = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Retrieve the selected product from localStorage
        const storedProduct = localStorage.getItem('selectedProduct');
        if (storedProduct) {
            setProduct(JSON.parse(storedProduct));
        }
    }, []);

    return (
        <div className="container my-5 py-5">
            <h1 className="display-6 fw-bolder text-center">Product Details</h1>
            <hr />
            {product ? (
                <div className="card h-100 text-center p-4">
                    <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">{product.title}</h5>
                        <p className="card-text lead fw-bold">${product.price}</p>
                        <p>{product.description}</p>
                    </div>
                </div>
            ) : (
                <p>No product selected.</p>
            )}
        </div>
    );
};

export default ProductDetails;