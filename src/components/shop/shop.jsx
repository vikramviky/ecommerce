import React from "react";
//import Data from '../../shop-data.json';
import { useContext } from "react";
import { ProductsContext } from "../../context/products";
import ProductCard from "../products/product-card";
import './shop.styles.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className="products-container">
        {
            products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))
        }
        </div>
    )
  }
export default Shop;