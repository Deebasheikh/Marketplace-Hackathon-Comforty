import Image from "next/image";
import card2 from "@/app/assets/card2.png";
import card1 from "@/app/assets/card1.png";
import card3 from "@/app/assets/card3.png";
import card7 from "@/app/assets/card7.png";
import card9 from "@/app/assets/card9.png";
import card5 from "@/app/assets/card5.png";
import AddToCart from "../component/addtocart";
import Card from "../component/productcard";

const SingleProductPage = () => {
  return (
    <>
      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row my-12 mx-6 lg:mx-32">
        {/* Product Image */}
        <Image
          src={card2}
          alt="library-stool-chair"
          width={675}
          height={607}
          className="object-cover shadow-md rounded-[10px] w-full lg:w-[575px] lg:h-[507px]"
        />

        {/* Product Info */}
        <div className="mt-8 lg:mt-0 lg:ml-20">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#272343]">
            Library Stool <br /> Chair
          </h2>
          <button
            className="mt-6 px-6 py-3 rounded-full text-[#ffffff] text-sm lg:text-base font-semibold bg-[#029FAE]"
          >
            $20.00 USD
          </button>
          <p className="mt-6 text-sm lg:text-lg leading-relaxed font-[inter] text-[#333]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing.
          </p>
          <div className="mt-5">
            <AddToCart />
          </div>
        </div>
      </div>

      {/* Featured Products Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center mx-6 lg:mx-32 my-10">
        <h3 className="text-lg lg:text-2xl font-bold">Featured Products</h3>
        <div className="mt-2 lg:mt-0">
          <button className="font-bold text-sm lg:text-lg underline">
            View All
          </button>
        </div>
      </div>

      {/* Featured Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mx-6 lg:mx-32">
        <Card image={card9} name="Library Stool Chair" price="$99" showCartButton={false} />
        <Card image={card1} name="Library Stool Chair" price="$99" showCartButton={false} />
        <Card image={card7} name="Library Stool Chair" price="$99" showCartButton={false} />
        <Card image={card3} name="Library Stool Chair" price="$99" showCartButton={false} />
        <Card image={card5} name="Library Stool Chair" price="$99" showCartButton={false} />
      </div>
    </>
  );
};

export default SingleProductPage;

