import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:2000/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className='col-md-5 text-center'>
        <div className='card'>
            <h1 className='card-header'>Product Details</h1>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} />
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>
        </div>
    </div>
  );
};

export default ProductDetails;

