import productimage from "@/app/assets/Product Image.png"
import brandlogo1 from "@/app/assets/brandlogo1.png";
import brand2 from "@/app/assets/brand2.png";
import brand3 from "@/app/assets/brand3.png";
import brand4 from "@/app/assets/brand4.png";
import brand5 from "@/app/assets/brand5.png";
import brand6 from "@/app/assets/brand6.png";
import brand7 from "@/app/assets/brand7.png";
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

interface PCardProps {
    p?:string;
    color?:string;
    image: string;
    name:string;
    price:string;
    product:string;
  }
const ProductPage = () => {
    return(
        <>
        <div className="w-full max-w-screen-xl mx-auto items-center lg:px-16 lg:py-12">
      <h3 className="mt-4 font-[inter] text-[32px] font-semibold leading-[35.2px] text-[#272343]">
        All Products
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10 mt-6">
        <Card image={card1} color="bg-[#01AD5A]" p="New" name="Library Stool Chair" price="$20" />
        <Card image={card2} color="bg-[#F5813F]" p="Sales" name="Library Stool Chair" price="$20" />
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
    <div className="w-auto lg:top-[1813px] lg:mt-7 lg:py[100px] font-[roboto]
     lg:px-[300px] lg:gap-[70px] bg-[#1E28320D]"> 
    <div className="lg:py-12 text-center">
      <h2 className=" lg:text-4xl leading-[58.59px] text-[#000000]">
        Or Subscribe To The Newsletter
      </h2>
      <div className=" lg:mt-5 flex  gap-[10px] text-[#1E283280]">
 <input type="text" placeholder=" Email address..." className="lg:text-base font-semibold 
 leading-[18.75px]  items-center lg:w-[600px] opacity-50 border-b-2 underline border-solid"/>
 <button className="font-[open-sans] lg:text-base lg:font-normal leading-[21.79px]
  text-center hover:border-solid  hover:border-b-2 hover:underline">
 SUBMIT
 </button>
 </div>
 <h2 className="lg:mt-16 font-medium leading-[58.59px] hover:underline lg:text-4xl">
 Follow products and discounts on Instagram
 </h2>
 
 {/* //styleName: H2;
font-family: Roboto;
font-size: 50px;
font-weight: 500;
line-height: 58.59px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none; */}




    </div>
    <div></div>

    </div>

        </>
    )
}
export default ProductPage;