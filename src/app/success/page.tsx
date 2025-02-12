"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();

  useEffect(() => {
    // Clear the cart from localStorage after purchase
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartUpdated")); // Notify cart updates

    // Redirect to home page or another page after some time
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-green-600">Payment Successful!</h1>
      <p className="text-gray-600">Redirecting you to the home page...</p>
    </div>
  );
};

export default Success;
