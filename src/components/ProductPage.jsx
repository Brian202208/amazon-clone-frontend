import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import ProductDetails from './ProductDetails';

const ProductPage = () => {
  const {id} = useParams();

  const [product, setProduct] = useState(null);


useEffect(() => {
  axios
    .get("/data/products.json")
    .then((response) => {
      const products = response.data;
      setProduct(products[id]);
    })
    .catch((error) => {
      console.error("Error fetching product data:", error);
    });
}, [id]);

  if(!product?.title) return <h1>Loading Product...</h1>

  return (
    product && (
      <div className="h-screen bg-amazonclone-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto bg-orange-400">
          <div className="grid grid-cols-10 gap-2">
            {/* left*/}
            <div className="col-span-3 p-8 rounded bg-white m-auto">
              <img src={`${product.image}`} alt="product" />
            </div>
            {/* middle*/}
            <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
              <div className='mb-3'>
                <ProductDetails product={product} ratings={false} />
              </div>
              <div></div>
            </div>
            {/* Right*/}
            <div className="col-span-2 bg-green-400"></div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductPage