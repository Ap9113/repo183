import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error('Error fetching product', err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>&lt; Back</button>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
    </div>
  );
}

export default ProductDetail;
