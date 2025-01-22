<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>;
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import productimage from "@/app/assets/Product Image.png"
import brandlogo1 from "@/app/assets/brandlogo1.png";
import brand2 from "@/app/assets/brand2.png";
import brand3 from "@/app/assets/brand3.png";
import brand4 from "@/app/assets/brand4.png";
import brand5 from "@/app/assets/brand5.png";
import brand6 from "@/app/assets/brand6.png";
import brand7 from "@/app/assets/brand7.png";
import Card from "./component/productcard";
import card1 from "@/app/assets/card1.png";
import card2 from "@/app/assets/card2.png";
import card3 from "@/app/assets/card3.png";
import card4 from "@/app/assets/card4.png";
import ProductCard from "./component/productcard2";
import card5 from "@/app/assets/card5.png";
import card6 from "@/app/assets/card6.png";
import card7 from "@/app/assets/card7.png";
import card8 from "@/app/assets/card8.png";
import card9 from "@/app/assets/card9.png";
import Link from "next/link";


export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full max-w-screen-lg mx-auto mt-12 rounded-bl-xl bg-[#F0F2F3]
       flex flex-col md:flex-row items-center px-4 sm:px-12 lg:px-16 py-12">
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col items-start">
          <p className="text-sm font-normal tracking-wider text-[#272343]
           hover:underline hover:decoration-[#007580]">
            Welcome to chairy
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-snug text-[#272343] mt-4">
            Best Furniture Collection for your interior.
          </h1>
          <button
            type="button"
            className="mt-6 flex items-center gap-3 px-6 py-3 bg-[#029FAE] text-white rounded-lg hover:bg-[#007580]"
          >
            <Link href="/productpage">Shop Now</Link>
            <FaArrowRightLong className="w-5 h-5" />
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src={productimage}
            alt="Product Image"
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Brand Logos */}
      <div className="w-full max-w-screen-lg mx-auto flex flex-wrap 
      justify-between items-center gap-4 px-4 sm:px-8 lg:px-1 py-6">
        {[brandlogo1, brand2, brand3, brand4, brand5, brand6, brand7].map((brand, index) => (
          <Image
            key={index}
            src={brand}
            alt={`brand-logo-${index}`}
            priority
            className="w-16 sm:w-20 md:w-24 h-auto object-contain"
          />
        ))}
      </div>

{/* Featured Products */}
<div className="w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-32 py-12">
  <h2 className="text-2xl font-semibold text-[#272343]">Featured Products</h2>
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-y-10 sm:gap-x-5">
    <Card image={card1} color="bg-[#01AD5A]" p="New" name="Library Stool Chair" price="$20" />
    <Card image={card2} color="bg-[#F5813F]" p="Sales" name="Library Stool Chair" price="$20"  href="/singleproductpage" /> 
    <Card image={card3} name="Library Stool Chair" price="$20" />
    <Card image={card4} name="Library Stool Chair" price="$20" />
  </div>
</div>



{/* Top Categories */}
<div className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-24 py-12">
  <h2 className="text-2xl font-semibold text-[#272343]">Top Categories</h2>
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
    <ProductCard image={card5} name="Wing Chair" products="3,584 Products" />
    <ProductCard image={card6} name="Wooden Chair" products="157 Products" />
    <ProductCard image={card7} name="Desk Chair" products="154 Products" />
  </div>
</div>


  <div className="w-full max-w-screen-xl px-4 md:px-6 lg:px-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 py-12">
      {/* Rotated Paragraph */}
      <p className="md:-rotate-90 font-normal px-4 py-0 text-[18px] md:text-[20px] m-0 uppercase text-black leading-none flex items-end">
        Explore new and popular styles
      </p>

      {/* Large Card */}
      <div className="flex justify-center">
        <Image
          src={card3}
          alt="productcard"
          width={648}
          height={648}
          className="object-cover shadow-2xl"
        />
      </div>

      {/* Smaller Cards */}
      <div className="grid grid-cols-2 gap-2">
        <Image
          src={card4}
          alt="productcard"
          width={312}
          height={312}
          className="object-cover"
        />
        <Image
          src={card1}
          alt="productcard"
          width={312}
          height={312}
          className="object-cover"
        />
        <Image
          src={card8}
          alt="productcard"
          width={312}
          height={312}
          className="object-cover"
        />
        <Image
          src={card1}
          alt="productcard"
          width={312}
          height={312}
          className="object-cover"
        />
      </div>
    </div>
    </div>

    <div className="w-full max-w-screen-xl mx-auto items-center lg:px-16 lg:py-12">
      <h3 className="mt-4 font-[inter] text-xl font-semibold leading-[3.2px] text-[#272343]">
        Our Products
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10 mt-6">
        <Card image={card1} color="bg-[#01AD5A]" p="New" name="Library Stool Chair" price="$20" />
        <Card image={card2} color="bg-[#F5813F]" p="Sales" name="Library Stool Chair" price="$20"  href="/singleproductpage" /> 
        <Card image={card3} name="Library Stool Chair" price="$20" />
        <Card image={card4} name="Library Stool Chair" price="$20" />
        <Card image={card5} color="bg-[#01AD5A]" p="New" name="Library Stool Chair" price="$20" />
        <Card image={card8} color="bg-[#F5813F]" p="Sales" name="Library Stool Chair" price="$20" />
        <Card image={card9} name="Library Stool Chair" price="$20" />
        <Card image={card1} name="Library Stool Chair" price="$20" />
      </div>
    </div>
  



    </>
  );
};
