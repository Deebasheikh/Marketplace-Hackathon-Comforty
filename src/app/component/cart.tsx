import Image from "next/image";
import ICart from "@/types/pcartprops";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";


const PCart = (props: ICart ) => {
  const { p, image, price, h4, name, quantity } = props;
  return (
    <>
      <div className="flex flex-wrap font-[inter] text-[#111111] mb-6">
      <div className="flex flex-col md:flex-row w-full">
        <div>
          <Image src={image} alt={name} width={150} height={150} />
        </div>
        <div className="flex flex-col ml-4 md:ml-10 flex-grow">
          <h4 className="text-base font-normal leading-[20.8px] text-[#272343]">
            {h4}
          </h4>
          <div className="text-[15px] font-normal my-5 leading-[28px] text-[#757575]">
            <p>{p}</p>
            <div className="flex gap-2">
              <h6>Quantity:</h6>
              <p>{quantity}</p>
            </div>
          </div>
          <div className="flex gap-5 text-[#111111]">
            <button className="hover:text-red-500">
              <FaRegHeart />
            </button>
            <button className="hover:text-red-500">
              <RiDeleteBinLine />
            </button>
          </div>
        </div>
        <div className="font-normal text-[15px] leading-7 text-right mt-4 md:mt-0 md:ml-auto">
          <p>{price}</p>
        </div>
      </div>
    </div>
    </>
  );
};
export default PCart;
