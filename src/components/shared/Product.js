import React from "react";
import { Link } from "react-router-dom";
//functions
import { shorten, isInCart, quantityFilter } from "../../helper/functions";
//svg
import trash from "../../asset/icons/trash.svg";
//animation
import "animate.css";
//redux store and actions
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../../Redux/Cart/CartActions";
const Product = ({ productData }) => {
  const dispatch = useDispatch();
  const cardState = useSelector((state) => state.cardState);
  return (
    <div className="lg:w-60  w-64 flex flex-col justify-center items-center border-solid border-2 border-gray-400 p-3 bg-white rounded-lg ">
      <img className="w-48 h-52" src={productData.image} alt="product" />
      <h3 className="self-start my-3">{shorten(productData.title)}</h3>
      <p className="self-start my-3">{productData.price} $</p>
      <div className="flex flex-row justify-between items-center w-full ">
        <Link className="inline-block" to={`/products/${productData.id}`}>
          Details
        </Link>
        <div className="flex flex-row  items-center justify-center h-10">
          {quantityFilter(cardState, productData.id) ? (
            quantityFilter(cardState, productData.id) > 1 ? (
              <button
                className="bg-blue-500 text-white rounded-md px-2 font-black text-center w-10 h-10 text-3xl hover:bg-blue-700 transition-colors"
                onClick={() => dispatch(decrease(productData))}
              >
                -
              </button>
            ) : (
              <button onClick={() => dispatch(removeItem(productData))}>
                <img
                  className="bg-blue-500   font-bold w-10 rounded-md p-2  animate__animated animate__fadeInUp  hover:bg-blue-700 transition-colors "
                  src={trash}
                  alt="trash"
                />
              </button>
            )
          ) : null}

          {quantityFilter(cardState, productData.id) && (
            <span className="text-lg text-center mx-2 text-blue-400 font-extrabold w-4 block">
              {quantityFilter(cardState, productData.id)}
            </span>
          )}

          {isInCart(cardState, productData.id) ? (
            <button
              className="bg-blue-500 text-white rounded-md px-2 font-black text-center w-10 h-10 text-3xl animate__animated animate__fadeInUp  hover:bg-blue-700 transition-colors"
              onClick={() => dispatch(increase(productData))}
            >
              +
            </button>
          ) : (
            <button
              className="px-4 py-2 text-sm font-bold bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors "
              onClick={() => dispatch(addItem(productData))}
            >
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
