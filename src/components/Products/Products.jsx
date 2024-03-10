import useFetch from '../../Fetch';

const Products = () => {
    const { data: products, loading } = useFetch("http://localhost:2000/products");

    if (loading) return <div>Loading...</div>;

    return (
        <div className='row mt-4 '>
            {/* {console.log(products[5])} */}
            {products.map((product) => (
                <div key={product.id} className="col-md-3 d-flex justify-content-center">
                    <div className="card mb-4" style={{ width: '18rem' }}>
                        <img src={product.thumbnail} className="card-img-top" alt={product.name} style={{ height: '200px', objectFit: 'cover' }} /> {/* Fixed height and covering the container */}
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">Price: {product.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;