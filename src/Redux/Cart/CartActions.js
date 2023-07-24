const addItem = (productData) => {
  return { type: "ADD_ITEM", payload: productData };
};

const removeItem = (productData) => {
  return { type: "REMOVE_ITEM", payload: productData };
};

const increase = (productData) => {
  return { type: "INCREASE", payload: productData };
};

const decrease = (productData) => {
  return { type: "DECREASE", payload: productData };
};

const checkout = () => {
  return { type: "CHECKOUT" };
};
const clear = (productData) => {
  return { type: "CLEAR" };
};

export { addItem, removeItem, increase, decrease, checkout, clear };
