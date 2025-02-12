"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ticksign from "@/app/assets/ticksign.png";
import logo from "@/app/assets/Logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCircleAlert } from "react-icons/ci";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import CartButton from "./cartbutton";
import Link from "next/link";
import { getCartItems } from "@/actions/actions";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        const updateCartCount = () => {
            const cartItems = getCartItems();
            setCartCount(cartItems.length);
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
        };

        updateCartCount();

        window.addEventListener("cartUpdated", updateCartCount);

        return () => {
            window.removeEventListener("cartUpdated", updateCartCount);
        };
    }, []);

    return (
        <>
            {/* Top Notification Bar */}
            <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 px-4 sm:px-8 lg:px-[300px] bg-[#272343] text-white text-sm">
                <div className="flex items-center gap-2 mb-2 sm:mb-0">
                    <Image src={ticksign} alt="ticksign" className="w-4 h-4" />
                    <p>Free shipping on all orders over $50</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <p>Eng</p>
                        <button type="button" className="text-white">
                            <RiArrowDropDownLine />
                        </button>
                    </div>
                    <Link href="/faq">Faqs</Link>
                    <div className="flex items-center gap-1">
                        <button type="button" className="text-white">
                            <CiCircleAlert />
                        </button>
                        <p>Need Help</p>
                    </div>
                </div>
            </div>

            {/* Logo and Cart Section */}
            <div className="w-full flex justify-between items-center py-5 px-4 sm:px-8 lg:px-[300px] bg-[#F0F2F3] relative">
                <div className="flex items-center">
                    <Image src={logo} alt="logo" className="w-32 sm:w-40" />
                </div>
                <div className="flex items-center gap-3 bg-white py-2 px-4 rounded-lg relative">
                    <Link href="/cart" className="relative">
                        <FaShoppingCart className="text-[#007580] text-2xl" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-[#007580] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    {showNotification && (
                        <div className="absolute top-10 right-0 bg-green-500 text-white text-xs px-3 py-1 rounded-lg shadow-md">
                            Cart updated!
                        </div>
                    )}
                </div>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="sm:hidden text-[#007580] text-2xl focus:outline-none"
                >
                    {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />} 
                </button>
            </div>

            {/* Navigation Bar */}
            <div
                className={`sm:flex sm:items-center sm:justify-between py-4 px-4 sm:px-8
                 lg:px-[300px] bg-white shadow-[0px_1px_0px_0px_#E1E3E5] ${
                     isMenuOpen ? "block" : "hidden"
                 } sm:block`}
            >
                <div className="flex flex-col sm:flex-row sm:gap-4">
                    <Link href="/" className="py-2 sm:py-0 text-sm font-medium text-[#007580]">
                        Home
                    </Link>
                    <Link href="/productpage" className="py-2 sm:py-0 text-sm font-medium text-[#636270]">
                        Shop
                    </Link>
                    <Link href="/productpage" className="py-2 sm:py-0 text-sm font-medium text-[#636270]">
                        Product
                    </Link>
                    <Link href="/" className="py-2 sm:py-0 text-sm font-medium text-[#636270]">
                        Pages
                    </Link>
                    <Link href="/aboutus" className="py-2 sm:py-0 text-sm font-medium text-[#636270]">
                        About
                    </Link>
                </div>
                <div className="mt-4 sm:mt-0 flex items-center gap-2">
                    <Link href="/contactus" className="text-sm text-[#636270] font-medium">
                        Contact:
                    </Link>
                    <p className="text-sm text-[#272343] font-medium">(808) 555-0111</p>
                </div>
            </div>
        </>
    );
};

export default Header;
