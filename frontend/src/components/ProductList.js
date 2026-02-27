import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products', err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
          {products.map(prod => (
            <div key={prod.id} style={{ border: '1px solid #ddd', padding: '1rem' }}>
              <h3>{prod.name}</h3>
              <p>${prod.price.toFixed(2)}</p>
              <Link to={`/products/${prod.id}`}>View details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
