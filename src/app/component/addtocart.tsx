'use client';
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const AddToCart = () => {

  return (
    <button className="w-[170px] flex rounded-lg lg:py-1 lg:px-4 lg:gap-[9px] bg-[#029FAE]">
    <Link href="/cart"
      className="w-8 h-8 flex items-center justify-center hover:border hover:border-[#04b4c4] rounded-md
       text-[#ffffff]  transition-all duration-500"
  >
      <FiShoppingCart className="w-4 h-4" />
    </Link>
    <p className="font-[inter] lg:text-lg text-center text-[#ffffff]">
    Add To Cart
    </p>
    </button>
  );
};

export default AddToCart;

