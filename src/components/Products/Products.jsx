import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../actions/productsActions';
import axios from 'axios';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions';

const Products = ({ addToCart }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:2000/products');
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='row mt-4'>
      {products.map((product) => (
        <div key={product.id} className="col-md-3 d-flex justify-content-center">
          <div className="card mb-4" style={{ width: '18rem' }}>
            <img src={product.thumbnail} className="card-img-top" alt={product.name} style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">Price: {product.price}</p>
              <div className="d-flex justify-content-between">
                <button onClick={() => handleAddToCart(product)} className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(null, mapDispatchToProps)(Products);
