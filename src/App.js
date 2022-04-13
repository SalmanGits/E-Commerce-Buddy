import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Loading from "./components/Loading";
import { Like } from "./components/Like";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [Likes, setLikes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDta = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchDta();
  }, []);
  const handleLike = (data) => {
    if (Likes.some((item) => item.id === data.id)) {
      window.alert("You have already Liked This Product");
      return;
    }
    setLikes([...Likes, data]);
  };
  const handleClick = (data) => {
    console.log(data.id);
    if (cart.some((item) => item.id === data.id)) {
      window.alert("You have already added this Product");
      return;
    }
    setCart([...cart, data]);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={products.map((data) => {
                return (
                  <div className="product-card" key={data.id}>
                    <div className="product-thumb">
                      <img
                        src={data.image}
                        className="product-image"
                        alt="card-img"
                      />
                    </div>
                    <div className="product-details">
                      <span className="product-category">{data.title}</span>

                      <p>{data.description}</p>

                      <div className="product-bottom-details">
                        <div className="product-price">{data.price}$</div>
                        <div className="product-links">
                          <i
                            onClick={() => handleLike(data)}
                            className="fa fa-heart"
                          ></i>

                          <i
                            onClick={() => handleClick(data)}
                            className="fa fa-shopping-cart"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            />
            <Route
              path="cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
            <Route
              path="like"
              element={<Like likes={Likes} setLikes={setLikes} />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
