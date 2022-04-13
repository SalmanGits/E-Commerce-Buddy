import React from "react";

export const Like = ({ likes, setLikes }) => {
  const handleClick = (Like) => {
    const newLike = likes.filter((item) => {
      return Like.id !== item.id;
    });
    setLikes(newLike);
  };
  return (
    <>
      {likes.map((Like) => {
        return (
          <div className="product-card" key={Like.id}>
            <div className="product-thumb">
              <img src={Like.image} className="product-image" alt="card-img" />
            </div>
            <div className="product-details">
              <span className="product-category">{Like.title}</span>

              <p>{Like.description}</p>

              <div className="product-bottom-details">
                <div className="product-price">{Like.price}$</div>
                <div className="product-links">
                  <i
                    onClick={() => handleClick(Like)}
                    className="fa fa-heart"
                  ></i>

                  <i className="fa fa-shopping-cart"></i>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
