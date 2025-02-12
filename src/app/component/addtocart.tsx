"use client";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import React from "react";
import { Products } from "@/types/products";
import { addToCart } from "@/actions/actions";
import { log } from "console";
import Swal from "sweetalert2";

interface AddToCartProps {
  product: Products; // Accept product as a prop
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const handleAddtoCart = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
      position : 'top-right',
      icon : 'success',
      title : `${product.title} added to cart`,
      showConfirmButton : false,
      timer : 1000
    })


    addToCart(product);
    // alert("ok")
    // console.log(handleAddtoCart)
  };

  return (
    <button
      className="w-[170px] flex rounded-lg px-2 py-1 lg:py-1 lg:px-4 lg:gap-[9px] bg-[#029FAE]"
      onClick={handleAddtoCart} // Attach event handler to the button
    >
      <Link
        href="/cart"
        className="w-8 h-8 flex items-center justify-center text-center hover:border hover:border-[#04b4c4] rounded-md text-[#ffffff] transition-all duration-500"
      >
        <FiShoppingCart className="w-4 h-4" />
      </Link>
      <p className="font-[inter] lg:text-lg text-center py-1 lg:py-0 text-[#ffffff]">Add To Cart</p>
    </button>
  );
};

export default AddToCart;