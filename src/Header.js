import React from "react";
import logo from "./images/logo.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function Header({ countItems }) {
  return (
    <div className="flex justify-around  items-center  bg-white-300">
      <Link to="/">
        <div className="cursor-pointer">
          <img src={logo} alt="logo" className="" />
        </div>
      </Link>
      <Link to="/cart">
        <div className="cursor-pointer">
          <ShoppingCartIcon className="text-black"></ShoppingCartIcon>
          <span>{countItems}</span>
        </div>
      </Link>
    </div>
  );
}
