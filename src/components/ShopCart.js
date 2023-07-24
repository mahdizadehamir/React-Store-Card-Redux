import React from "react";
//components
import Cart from "./shared/Cart";
//Router
import { Link } from "react-router-dom";
//redux store and actions
import { useDispatch, useSelector } from "react-redux";
import { checkout, clear } from "../Redux/Cart/CartActions";

const ShopCart = () => {
  const cardState = useSelector((state) => state.cardState);
  const dispatch = useDispatch();
  return (
    <div className="relative">
      <div>
        {cardState.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>

      {cardState.itemsCounter > 0 && (
        <div className=" md:float-right md:absolute md:top-32 md:right-11 bg-white  rounded-md p-5 border border-solid border-gray-300 shadow-md max-h-fit">
          <div className="flex flex-col justify-between gap-10">
            <p>
              <span className="font-bold text-xl text-blue-500  ">
                Total Items:
              </span>
              {cardState.itemsCounter}
            </p>
            <p>
              <span className="font-bold text-xl text-blue-500  ">
                Total Price:
              </span>
              {cardState.totalPrice} $
            </p>
            <div>
              <button
                className="p-3 mr-6 bg-green-500 text-white rounded-md"
                onClick={() => dispatch(checkout())}
              >
                CHECKOUT
              </button>
              <button
                className="text-green-500 text-xl"
                onClick={() => dispatch(clear())}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}

      {cardState.checkout && (
        <div className="flex flex-col justify-center items-center h-screen">
          <h3 className="font-bold text-blue-500 text-2xl">
            You Checked Out Successfully
          </h3>
          <Link className="underline mt-6 text-3xl" to="/products">
            Buy More?
          </Link>
        </div>
      )}
      {!cardState.checkout && cardState.itemsCounter === 0 && (
        <div className="flex flex-col justify-center items-center h-screen">
          <h3 className="font-bold text-blue-500 text-2xl">Want To Buy?</h3>
          <Link className="underline  text-2xl " to="/products">
            Go Back To Shop
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
