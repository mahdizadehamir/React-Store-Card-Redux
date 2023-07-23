import React, { useEffect } from "react";
import Product from "./shared/Product";
import { useSelector, useDispatch } from "react-redux";
import { fetchApi } from "../Redux/Products/ProductsActions";

const Store = () => {
  const productState = useSelector((state) => state.productState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApi());
  }, []);
  return (
    <div className="flex  md:flex-row lg:flex-row flex-col flex-wrap justify-between mt-32 items-center gap-20 ">
      {productState.loading ? (
        <h2>loading ... </h2>
      ) : productState.error ? (
        <p>{productState.error}</p>
      ) : (
        productState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Store;
