'use client';

import Image from "next/image";
import ticksign from "@/app/assets/ticksign.png";
import logo from "@/app/assets/Logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCircleAlert } from "react-icons/ci";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import CartButton from "./cartbutton";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
                    <p>Faqs</p>
                    <div className="flex items-center gap-1">
                        <button type="button" className="text-white">
                            <CiCircleAlert />
                        </button>
                        <p>Need Help</p>
                    </div>
                </div>
            </div>

            {/* Logo and Cart Section */}
            <div className="w-full flex justify-between items-center py-5 px-4 sm:px-8 lg:px-[300px] bg-[#F0F2F3]">
                <div className="flex items-center">
                    <Image src={logo} alt="logo" className="w-32 sm:w-40" />
                </div>
                <div className="flex items-center gap-3 bg-white py-2 px-4 rounded-lg">
                    <div className="flex items-center gap-2">
                        <CartButton />
                        <p className="text-sm">Cart</p>
                    </div>
                    <div className="w-5 h-5 bg-[#007580] rounded-full flex items-center justify-center">
                        <p className="text-xs text-white">2</p>
                    </div>
                </div>
                <button
                    onClick={toggleMenu}
                    className="sm:hidden text-[#007580] text-2xl focus:outline-none"
                >
                    {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                </button>
            </div>

            {/* Navigation Bar */}
            <div
                className={`sm:flex sm:items-center sm:justify-between py-4 px-4 sm:px-8 lg:px-[300px] bg-white shadow-[0px_1px_0px_0px_#E1E3E5] ${
                    isMenuOpen ? "block" : "hidden"
                } sm:block`}
            >
                <div className="flex flex-col sm:flex-row sm:gap-4">
                    <Link href="/" className="py-2 sm:py-0 text-sm font-medium text-[#007580]">
                        Home
                    </Link>
                    <Link href="/" className="py-2 sm:py-0 text-sm font-medium text-[#636270]">
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
                    <p className="text-sm text-[#636270] font-medium">Contact:</p>
                    <p className="text-sm text-[#272343] font-medium">(808) 555-0111</p>
                </div>
            </div>
        </>
    );
};

export default Header;







// const Header = () => {
//     return (
//         <>
//         <div className="w-[1920px] h-[45px] flex justify-between py-[14px] px-[300px] bg-[#272343]">
//             <div className="w-[255px] h-4 gap-2 opacity-70 flex">
//                 <div className="w-4 h-4">
//                     <div className="w-[10.67px] h-[7.33px] mt-1 ml-[2.67px] border-[1.5px] text-[#FFFFFF]">
//                         <Image src={ticksign} alt="ticksign" />
//                     </div>
//                 </div>
//                 <p className="w-[231px] h-[14px] font-normal text-[13px] leading-[14.3px] text-[#FFFFFF]">
//                 Free shipping on all orders over $50
//                 </p>
//             </div>
//             <div className="w-[202px] h-[17px] gap-6 opacity-70 flex">
//                 <div className="w-[37px] h-[17px] gap-[6px] flex items-center justify-center">
//                     <p className="w-6 h-[17px] font-normal text-[13px] leading-[16.9px] text-[#FFFFFF]">
//                     Eng
//                     </p>
//                     <button type="button" className="w-4 h-3 flex items-center mt-[6px] ml-[3.0px]  text-[#FFFFFF]" ><RiArrowDropDownLine /></button>
//                 </div>
//                 <div className="w-[30px] h-[17px]  font-normal text-[13px] leading-[16.9px] text-[#FFFFFF]">
//                     <p>Faqs</p>
//                 </div>
//                 <div className="w-[87px] h-[17px] gap-[6px] flex">
//                     <div className="w-4 h-4 opacity-70 ">
//                         <button type="button" className="text-[#FFFFFF]"><CiCircleAlert /></button>
//                     </div>
//                     <p className="w-[65px] h-[17px] font-normal text-[13px] leading-[16.9px] text-[#FFFFFF]">
//                     Need Help
//                     </p>
//                 </div>
//             </div>
//         </div>
//         <div className="w-[1920px] h-[84px] flex justify-between py-5 px-[300px] bg-[#F0F2F3]">
//             <div className="w-[166px] h-10 gap-2">
//                 <Image src={logo} alt="logo" />
//             </div>
//             <div className="w-[120px] h-11 gap-3 rounded-lg py-[11px] px-4 bg-[#FFFFFF] flex justify-center items-center">
//                 <div className="w-14 h-[22px] gap-2 flex justify-center items-center">
//                     <div className="w-[22px] h-[22px]">
                        
//                         <CartButton />
                        
                       
//                     </div>
//                     <p className="w-[26px] h-[13px] font-medium text-xs leading-[13.2px] text-[#272343]">
//                     Cart
//                     </p>
//                 </div>
//                 <div className="w-5 h-5 bg-[#007580] rounded-full flex justify-center items-center" >
//                     <p className="w-[6px] h-[10px]  font-medium font-[DMSans] text-[10px] leading-[10px] text-[#FFFFFF]">2</p>
//                 </div>
//             </div>
//         </div>
//         <div className="w-[1920px] h-[74px] flex justify-between items-center py-[14px] px-[300px] shadow-[0px_1px_0px_0px_#E1E3E5] bg-[#FFFFFF]">
//             <div className="w-[339px] h-[15px] gap-8 flex justify-center items-center">
//                 <Link href='/' className="w-10  h-[15px] font-medium text-sm leading-[15.4px] text-[#007580]">Home</Link>
//                 <Link href='/' className="w-[35px]  h-[15px] font-medium text-sm leading-[15.4px] text-[#636270]">Shop</Link>
//                 <Link href='/productpage' className="w-[53px]  h-[15px] font-medium text-sm leading-[15.4px] text-[#636270]">Product</Link>
//                 <Link href='/' className="w-[42px]  h-[15px] font-medium text-sm leading-[15.4px] text-[#636270]">Pages</Link>
//                 <Link href='/aboutus' className="w-[41px]  h-[15px] font-medium text-sm leading-[15.4px] text-[#636270]">About</Link>

//             </div>
//             <div className="w-[168px] h-[15px] gap-2 flex">
//                 <p className="w-[57px] h-[15px] font-medium text-sm leading-[15.4px] text-[#636270]">
//                 Contact:
//                 </p>
//                 <p className="w-[103px] h-[15px] font-medium text-sm leading-[15.4px] text-[#272343]">
//                 (808) 555-0111
//                 </p>
//             </div>
//         </div>
//         </>
//     );
// };
// export default Header;


