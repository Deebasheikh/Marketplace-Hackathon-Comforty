"use client";
import { useEffect, useState } from "react";
import { getCartItems, removeFromCart, updateCartQuantity } from "@/actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { createCheckoutSession } from "../actions/actions"
import { Products } from "@/types/products";
import { createCheckoutSession } from "@/actions/actions";

const Cart = () => {
  const [cartItems, setCartItems] = useState<Products[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const router = useRouter();


  const handleProceed = () => {
    Swal.fire({
        title: "Proceed to Checkout?",
        text: "Please review your cart before checkout",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, proceed!",
    }).then((result) => {
        if (result.isConfirmed) {
            createCheckoutSession(cartItems).then(() => {
                localStorage.removeItem("cart"); // Clear cart
                window.dispatchEvent(new Event("cartUpdated")); // Notify header update
                router.push("/"); // Redirect to home page
            });
        }
    });
};


  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items List */}
          <div className="w-full lg:w-2/3 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 gap-6"
              >
                {/* Product Image */}
                {item.image?.asset?._ref ? (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title}
                    width={120}
                    height={120}
                    className="rounded-lg object-cover w-[120px] h-[120px]"
                  />
                ) : (
                  <div className="w-[120px] h-[120px] flex items-center justify-center bg-gray-200 rounded-lg">
                    <p className="text-gray-500">No Image</p>
                  </div>
                )}

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm">Price: ${item.price}</p>
                  <p className="text-gray-600 text-sm">Total: ${item.price * item.inventory}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center mt-3">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-3 py-1 bg-gray-300 text-gray-700 rounded-l hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-100">{item.inventory}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-3 py-1 bg-gray-300 text-gray-700 rounded-r hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(item._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
            <p className="text-gray-600 text-lg">
              Total: <span className="font-semibold">${calculatedTotal().toFixed(2)}</span>
            </p>
            <button
              onClick={handleProceed}
              className="w-full mt-4 bg-[#029FAE] text-white py-3  rounded-lg text-lg font-semibold hover:bg-[#017a85] transition"
            >
               Checkout
            </button>
            <Link href="/products">
              <p className="mt-3 text-center text-gray-600 hover:text-gray-800 cursor-pointer">
                Continue Shopping
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;