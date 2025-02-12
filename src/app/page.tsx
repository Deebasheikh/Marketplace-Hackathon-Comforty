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
import Link from "next/link";
import FeaturedProducts from "./component/featuredproducts";
import TopCategories from "./component/topcategories";
import ExploreDesign from "./component/exploredesign";
import OurProducts from "./component/ourproducts";


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
         <Link href="/productpage" passHref>
  <button className="mt-6 flex items-center gap-3 px-6 py-3 bg-[#029FAE] text-white rounded-lg hover:bg-[#007580]">
    Shop Now
    <FaArrowRightLong className="w-5 h-5" />
  </button>
</Link>

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

      <FeaturedProducts />
      <TopCategories />
      <ExploreDesign />
      <OurProducts />

  



    </>
  );
};
