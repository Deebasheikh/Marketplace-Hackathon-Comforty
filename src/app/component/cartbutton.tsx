'use client';
import { FiShoppingCart } from "react-icons/fi";
import { useRouter } from "next/navigation";

const CartButton = () => {
  const router = useRouter();
  // addToCart(product); // Add product to cart
  const handleCartClick = () => {
    router.push('/cart'); // Navigate to the cart page
  };

  return (
    <button
      className="w-8 h-8 flex items-center justify-center border border-[#F0F2F3] rounded-md text-[#272343] transition-all duration-300 hover:bg-[#029FAE] hover:text-white"
      onClick={handleCartClick}
    >
      <FiShoppingCart className="w-4 h-4" />
    </button>
  );
};

export default CartButton;



