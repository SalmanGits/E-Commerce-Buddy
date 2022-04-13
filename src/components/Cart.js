import React from "react";

const Cart = ({ cart, setCart }) => {
  const handleClick = (c) => {
    const newCart = cart.filter((item) => {
      console.log(item);
      return c.id !== item.id;
    });
    setCart(newCart);
  };
  if (!cart) {
    return (
      <>
        <h1>Salman</h1>
      </>
    );
  }

  return (
    <>
      {cart.map((c) => {
        return (
          <div className="product-card" key={c.id}>
            <div className="product-thumb">
              <img src={c.image} className="product-image" alt="card-img" />
            </div>
            <div className="product-details">
              <span className="product-category">{c.title}</span>

              <p>{c.description}</p>

              <div className="product-bottom-details">
                <div className="product-price">{c.price}$</div>
                <div className="product-links">
                  <i className="fa fa-heart"></i>

                  <i
                    onClick={() => handleClick(c)}
                    className="fa fa-shopping-cart"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
