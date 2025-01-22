import Image from "next/image";
import card1 from "@/app/assets/card1.png";
import card10 from "@/app/assets/card10.png";
import card11 from "@/app/assets/card11.png";
import card12 from "@/app/assets/card12.png";
import Link from "next/link";
import Delivery from "@/app/assets/Delivery.png";
import Checkmark from "@/app/assets/Checkmark.png";
import Purchase from "@/app/assets/Purchase.png";
import Sprout from "@/app/assets/Sprout.png";
import FeatureCardProp from "../component/fcardprop";
import FeatureProductCardProp from "../component/fproductcardprop";


const AboutUs = () => {
    return (
        <>
        {/* <div className="flex  items-center justify-center p-6 bg-gray-100 min-h-screen"> */}
    <div className="flex gap-5 mt-20 ml-44">
        <div className="max-w-lg w-full bg-[#007580] p-14 text-[#FFFFFF]">
          <h1 className="text-3xl font-bold mb-4 ">About Us
           - Comforty</h1>
          <p className="text-[#FFFFFF] text-lg mb-24">
            At Comfory, we believe that a great chair can transform your space and enhance your overall experience. 
            Balancing ergonomic design, quality materials, and modern aesthetics, we strive to bring you furniture 
            that is not only stylish but also functionally versatile.
          </p>
          <Link href="/productpage" className="bg-[#F9F9F926] font-semibold py-2 px-4 rounded">
            View collection
          </Link>
        </div>
          <div className="">
          <Image src={card1} alt="Library-stool-chair"
          width={500}
          height={378} className="rounded-none"/>
          
          </div>
    </div>
        
  
        <div className="mt-12 mb-6">
          <h2 className="text-2xl font-bold text-center text-[#272343]">
            What Makes Our Brand Different
            </h2>
          <div className="flex flex-col md:flex-row justify-around mt-4 ml-8 px-32 gap-2">
            <FeatureCardProp 
                image={Delivery}
                 name="Delivery-sign"
                 title=" Next day as standard"
                 description="Order before 3pm and get your order the next day as standard"
                 />
             <FeatureCardProp 
                image={Checkmark}
                 name="Checkmark-sign"
                 title="Made by true artisans"
                 description="Handmade crafted goods made with real passion and craftmanship"
                 />
                 <FeatureCardProp 
                image={Purchase}
                 name="Purchase-sign"
                 title=" Unbeatable prices"
                 description=" For our materials and quality you won’t find better prices anywhere"
                 />
                 <FeatureCardProp 
                image={Sprout}
                 name="Sprout-sign"
                 title="Recycled packaging"
                 description="We use 100% recycled to ensure our footprint is more manageable"
                 />
          </div>
        </div>
  
        <div className="my-12 mx-36">
          <h2 className="text-3xl leading-[35.2px] px-6 font-semibold text-[#272343]">
            Our Popular Products
            </h2>
            <div className="flex flex-col md:flex md:flex-row justify-around 
            font-[inter] mt-4 text-[#2A254B]">
            <FeatureProductCardProp
            image={card10}
            name="The Poplar suede sofa"
            price="$99.00" />
            <FeatureProductCardProp
            image={card11}
            name="The Dandy chair"
            price="$99.00" />
            <FeatureProductCardProp
            image={card12}
            name="The Dandy chair"
            price="$99.00" />

        </div>
      </div>
      </>
    );
  };
  export default AboutUs;
