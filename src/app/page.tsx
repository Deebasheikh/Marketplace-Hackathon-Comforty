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
// import CartButton from "./component/cartbutton";
import ProductCard from "./component/productcard2";
import card5 from "@/app/assets/card5.png";
import card6 from "@/app/assets/card6.png";
import card7 from "@/app/assets/card7.png";

interface PCardProps {
  p?:string;
  color?:string;
  image: string;
  name:string;
  price:string;
  product:string;
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full max-w-screen-xl mx-auto mt-12 rounded-bl-xl bg-[#F0F2F3] flex flex-col md:flex-row items-center px-4 sm:px-8 lg:px-16 py-12">
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col items-start">
          <p className="text-sm font-normal tracking-wider text-[#272343] hover:underline hover:decoration-[#007580]">
            Welcome to chairy
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-snug text-[#272343] mt-4">
            Best Furniture Collection for your interior.
          </h1>
          <button
            type="button"
            className="mt-6 flex items-center gap-3 px-6 py-3 bg-[#029FAE] text-white rounded-lg hover:bg-[#007580]"
          >
            <span>Shop Now</span>
            <FaArrowRightLong className="w-5 h-5" />
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src={productimage}
            alt="Product Image"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Brand Logos */}
      <div className="w-full max-w-screen-xl mx-auto flex flex-wrap justify-between items-center gap-4 px-4 sm:px-8 lg:px-16 py-6">
        {[brandlogo1, brand2, brand3, brand4, brand5, brand6, brand7].map((brand, index) => (
          <Image
            key={index}
            src={brand}
            alt={`brand-logo-${index}`}
            className="w-16 sm:w-20 md:w-24 h-auto object-contain"
          />
        ))}
      </div>

{/* Featured Products */}
<div className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
  <h2 className="text-2xl font-semibold text-[#272343]">Featured Products</h2>
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-y-10 md:gap-x-10">
    <Card image={card1} color="bg-[#01AD5A]" p="New" name="Library Stool Chair" price="$20" />
    <Card image={card2} color="bg-[#F5813F]" p="Sales" name="Library Stool Chair" price="$20" />
    <Card image={card3} name="Library Stool Chair" price="$20" />
    <Card image={card4} name="Library Stool Chair" price="$20" />
  </div>
</div>



{/* Top Categories */}
<div className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
  <h2 className="text-2xl font-semibold text-[#272343]">Top Categories</h2>
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
    <ProductCard image={card5} name="Wing Chair" products="3,584 Products" />
    <ProductCard image={card6} name="Wooden Chair" products="157 Products" />
    <ProductCard image={card7} name="Desk Chair" products="154 Products" />
  </div>
</div>

    </>
  );
}




// export default function HomePage() {
//   return (
//     <>
//       <div className="w-[1321px] h-[850px] mt-[204px] ml-[300px] rounded-bl-xl bg-[#F0F2F3] flex justify-center">
//         <div className="w-[557px] h-[337px] mt-[229px] ml-[70px]">
//           <p className="w-[177px] h-[14px] font-[inter] text-sm font-normal leading-[14px] tracking-[0.12em] text-[#272343] hover:underline hover:decoration-solid hover:decoration-[#007580]">
//             Welcome to chairy
//           </p>
//           <p className="w-[557px] h-[198px] font-[inter] font-bold text-6xl leading-[66px] text-[#272343]">Best Furniture Collection for your interior.</p>
//           <button type="button" className="w-[171px] h-[52px] flex justify-center items-center mt-[51.4px] py-[14px] px-6 gap-5 rounded-lg bg-[#029FAE]">
//             <p className="w-[79px] h-[18px] font-[inter] text-base leading-[17.6px] text-[#FFFFFF] ">Shop Now</p>
//             <div className="w-6 h-6">
//                 <p className="w-4 h-[9px] mt-1 text-[#FFFFFF]"><FaArrowRightLong /></p>
//             </div>
//           </button>
//          </div>
//          <div className="w-[434px] h-[584px] mt-[115px]">
//             <Image src={productimage} alt="productimage" />
//          </div>
//       </div>
//       <div className="w-[1321px] h-[139px] mt-[11.07px] ml-[300px] bg-contain flex justify-between items-center">
//         <Image src={brandlogo1} alt="brandlogo" className="w-[85px] h-[87px]" />
//         <Image src={brand2} alt="brandlogo" className="w-[107px] h-[109px]" />
//         <Image src={brand3} alt="brandlogo" className="w-[135px] h-[139px]" />
//         <Image src={brand4} alt="brandlogo" className="w-[63px] h-[65px] " />
//         <Image src={brand5} alt="brandlogo" className="w-[98px] h-[101px] " />
//         <Image src={brand6} alt="brandlogo" className="w-[113px] h-[115px] " />
//         <Image src={brand7} alt="brandlogo" className="w-[84px] h-[87px] " />
//       </div>
//       <div className="w-[1920px] h-[461px] mt-[12.70px] ml-[300px] flex flex-col">
//         <div className="w-[1920px] h-auto">
//           <h2 className="w-[286px] h-[3.5px] font-semibold text-[32px] leading-[35.2px] text-[#272343]">Featured Products</h2>
//         </div>
//         <div className="flex justify-between mt-4">
//           <div className="flex space-x-4">
//         <Card image={card1} color="bg-[#01AD5A]" p="New" name="Library Stool Chair" price="$20" /> 
//         <Card image={card2} color="bg-[#F5813F]" p="Sales" name="Library Stool Chair" price="$20" />
//         <Card image={card3} name="Library Stool Chair" price="$20" />
//         <Card image={card4} name="Library Stool Chair" price="$20" />
//         </div>
//        </div>
//       </div>
//       <div className="w-full h-[508px] mt-[186.7px] px-[300px]">
//         <div className="w-[1920px] h-11 ">
//         <h2 className="w-[237px] h-[3.5px] font-semibold text-[32px] leading-[35.2px] text-[#272343]">
//           Top categories
//         </h2>
//         </div>
//         <div className="flex justify-between mt-4">
//           <div className="flex space-x-3">
//         <ProductCard image={card5}  name="Wing Chair" products="3,584 Products" /> 
//         <ProductCard image={card6}  name="Wooden Chair" products="157 Products" />
//         <ProductCard image={card7} name="Desk Chair" products="154 Products" />
      
//         </div>
//        </div>

//       </div>
//     </>
//   );
// };

