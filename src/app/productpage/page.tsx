import Card from "../component/productcard";
import card1 from "@/app/assets/card1.png";
import card2 from "@/app/assets/card2.png";
import card3 from "@/app/assets/card3.png";
import card4 from "@/app/assets/card4.png";
import card5 from "@/app/assets/card5.png";
import card6 from "@/app/assets/card6.png";
import card7 from "@/app/assets/card7.png";
import card8 from "@/app/assets/card8.png";
import card9 from "@/app/assets/card9.png";
import Image from "next/image";

const ProductPage = () => {
    return (
        <>
        <div className="w-full max-w-screen-xl mx-auto items-center lg:px-16 lg:py-12">
          <h3 className="mt-4 font-[inter]  text-xl lg:text-[32px] font-semibold leading-[35.2px]
           text-[#272343]">
            All Products
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-1
           lg:gap-10 mt-6">
            <Card image={card1} color="bg-[#01AD5A]" p="New" name="Library Stool Chair" price="$20" />
            <Card image={card2} color="bg-[#F5813F]" p="Sales" name="Library Stool Chair" price="$20"  href="/singleproductpage" /> />
            <Card image={card3} name="Library Stool Chair" price="$20" />
            <Card image={card4} name="Library Stool Chair" price="$20" />
            <Card image={card6} color="bg-[#01AD5A]" p="New" name="Library Stool Chair" price="$20" />
            <Card image={card8} color="bg-[#F5813F]" p="Sales" name="Library Stool Chair" price="$20" />
            <Card image={card9} name="Library Stool Chair" price="$20" />
            <Card image={card1} name="Library Stool Chair" price="$20" />
            <Card image={card5} color="bg-[#01AD5A]" p="New" name="Library Stool Chair" price="$20" />
            <Card image={card2} color="bg-[#F5813F]" p="Sales" name="Library Stool Chair" price="$20" />
            <Card image={card3} name="Library Stool Chair" price="$20" />
            <Card image={card7} name="Library Stool Chair" price="$20" />
          </div>
        </div>

        <div className="w-auto lg:top-[1813px] p-10 mt-10 lg:py[100px] font-[roboto]
         lg:px-[300px] lg:gap-[70px] bg-[#1E28320D]">
          <div className="text-center">
            <h2 className="sm:text-2xl  xl:text-4xl leading-[58.59px] text-[#000000]">
              Or Subscribe To The Newsletter
            </h2>
            <div className="sm:mt-5 flex justify-center gap-[10px] text-[#1E283280]">
              <input type="text" placeholder=" Email address..." className="lg:text-base
               font-semibold leading-[18.75px] lg:w-[600px] opacity-50 
               border-b-2 underline border-solid "/>
              <button className="font-[open-sans] lg:text-base lg:font-normal 
              leading-[21.79px] text-center hover:border-solid  hover:border-b-2 
              hover:underline">
              SUBMIT
              </button>
            </div>
            <h2 className="sm:mt-5 lg:mt-16 font-medium leading-[58.59px] hover:-opacity-50
             hover:underline sm:text-2xl  xl:text-4xl">
              Follow products and discounts on Instagram
            </h2>

            {/* Image container with flex-center and responsiveness */}
            <div className="flex justify-center gap-4 flex-wrap mt-8">
              <Image
                src={card8}
                alt="productcard"
                width={200}
                height={200}
                className="object-cover rounded-md w-[100px] h-[100px] "
              />
              <Image
                src={card5}
                alt="productcard"
                width={200}
                height={200}
                className="object-cover rounded-md w-[100px] h-[100px] "
              />
              <Image
                src={card2}
                alt="productcard"
                width={200}
                height={200}
                className="object-cover rounded-[10px] w-[100px] h-[100px]"
              />
              <Image
                src={card1}
                alt="productcard"
                width={200}
                height={200}
                className="object-cover rounded-md w-[100px] h-[100px]"
              />
              <Image
                src={card3}
                alt="productcard"
                width={200}
                height={200}
                className="object-cover rounded-[10px] w-[100px] h-[100px]"
              />
              <Image
                src={card7}
                alt="productcard"
                width={200}
                height={200}
                className="object-cover w-[100px] h-[100px]"
              />
            </div>
          </div>
        </div>
        </>
    );
}

export default ProductPage;
