import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <nav>
        <input
          type="checkbox"
          id="check"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">E-Commerce Buddy</label>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsChecked(false)}>
              Product
            </Link>
          </li>
          <li>
            <Link to="/like" onClick={() => setIsChecked(false)}>
              <i className="fa fa-heart"></i>
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={() => setIsChecked(false)}>
              <i className="fa fa-shopping-cart"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
