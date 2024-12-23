'use client';
// import { FiShoppingCart } from "react-icons/fi";
// import { useRouter } from "next/navigation";

// const CartButton = () => {
//   const router = useRouter();

//   const handleCartClick = () => {
//     router.push('/cart'); // Navigate to the cart page
//   };

//   return (
//     <button
//       className="w-10 h-10 sm:w-[16.96px] sm:h-[16.54px] flex items-center justify-center border-[1.5px] border-[#272343] rounded-md text-[#272343] transition-all duration-300 hover:bg-[#272343] hover:text-white"
//       onClick={handleCartClick}
//     >
//       <FiShoppingCart className="w-5 h-5 sm:w-full sm:h-full" />
//     </button>
//   );
// };

// export default CartButton;

'use client';
import { FiShoppingCart } from "react-icons/fi";
import { useRouter } from "next/navigation";

const CartButton = () => {
  const router = useRouter();

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



