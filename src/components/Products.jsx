
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate to handle navigation

// const Products = () => {
//     const [data, setData] = useState([]);  // Set initial state to an empty array
//     const [filter, setFilter] = useState([]); // Correct initialization of filter
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate(); // Initialize navigation

//     useEffect(() => {
//         let componentMounted = true;
//         const getProducts = async () => {
//             setLoading(true);
//             const response = await fetch("https://fakestoreapi.com/products");
//             if (componentMounted) {
//                 const products = await response.json();
//                 setData(products);
//                 setFilter(products);
//                 setLoading(false);
//                 console.log(products);  // Log products instead of filter
//             }
//         };
//         getProducts();
        
//         return () => {
//             componentMounted = false;
//         };
//     }, []);

//     const Loading = () => {
//         return (
//             <>
//                 Loading...
//             </>
//         );
//     };

//     // Function to handle "Buy Now" button click
//     const handleBuyNow = (product) => {
//         // Store the selected product in localStorage
//         localStorage.setItem('selectedProduct', JSON.stringify(product));

//         // Navigate to ProductDisplayed page
//         navigate('/product-displayed');
//     };

//     const ShowProducts = () => {
//         return (
//             <>
//                 <div className="buttons d-flex justify-content-center mb-5 pb-5">
//                     <button className="btn btn-outline-dark me-2">All</button>
//                     <button className="btn btn-outline-dark me-2">Men's clothing</button>
//                     <button className="btn btn-outline-dark me-2">Women's clothing</button>
//                     <button className="btn btn-outline-dark me-2">Jewelry</button>
//                     <button className="btn btn-outline-dark me-2">Electronic</button>
//                 </div>
//                 {filter.map((product) => {
//                     return (
//                         <div className='col-md-3 mb-4' key={product.id}>
//                             <div className="card h-100 text-center p-4">
//                                 <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
//                                 <div className="card-body">
//                                     <h5 className="card-title mb-0">{product.title.substring(0, 12)}..</h5>
//                                     <p className="card-text lead fw-bold">${product.price}</p>
//                                     <button className="btn btn-outline-dark" onClick={() => handleBuyNow(product)}>
//                                         Buy Now
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 })}
//             </>
//         );
//     };

//     return (
//         <div>
//             <div className="container my-5 py-5">
//                 <div className="row">
//                     <div className="col-12 mb-5">
//                         <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
//                         <hr />
//                     </div>
//                 </div>
//                 <div className="row justify-content-center">
//                     {loading ? <Loading /> : <ShowProducts />}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Products;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to handle navigation

const Products = () => {
    const [data, setData] = useState([]);  // Set initial state to an empty array
    const [filter, setFilter] = useState([]); // Correct initialization of filter
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Initialize navigation

    useEffect(() => {
        let componentMounted = true;
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                const products = await response.json();
                setData(products);
                setFilter(products);
                setLoading(false);
            }
        };
        getProducts();
        
        return () => {
            componentMounted = false;
        };
    }, []);

    const Loading = () => {
        return <p>Loading...</p>;
    };

    // Function to handle "Buy Now" button click
    const handleBuyNow = (product) => {
        // Store the selected product in localStorage
        localStorage.setItem('selectedProduct', JSON.stringify(product));

        // Navigate to ProductDisplayed page
        navigate('/product-displayed');
    };

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2">All</button>
                    <button className="btn btn-outline-dark me-2">Men's clothing</button>
                    <button className="btn btn-outline-dark me-2">Women's clothing</button>
                    <button className="btn btn-outline-dark me-2">Jewelry</button>
                    <button className="btn btn-outline-dark me-2">Electronic</button>
                </div>
                {filter.map((product) => (
                    <div className='col-md-3 mb-4' key={product.id}>
                        <div className="card h-100 text-center p-4">
                            <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                            <div className="card-body">
                                <h5 className="card-title mb-0">{product.title.substring(0, 12)}..</h5>
                                <p className="card-text lead fw-bold">${product.price}</p>
                                <button className="btn btn-outline-dark" onClick={() => handleBuyNow(product)}>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
};

export default Products;

