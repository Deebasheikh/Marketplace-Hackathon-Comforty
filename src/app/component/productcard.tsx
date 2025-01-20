import Image from "next/image";
import CartButton from "./cartbutton";
import ICard from "@/types/pcardprops";

const Card = (props: ICard) => {
    const { p, color, image, name, price } = props;
    return (
      <div className="w-full max-w-sm  h-auto">
        <div className="w-full h-auto rounded-md relative">
          {p && (
            <div
              className={`${color} w-auto px-3 py-1 rounded absolute top-4 left-4`}
            >
              <p className="text-sm font-medium text-white">{p}</p>
            </div>
          )}
          <Image
            src={image}
            alt={name}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <div className="w-full mt-4 flex justify-between items-center">
          <div>
            <h2 className="text-sm sm:text-base font-medium text-[#007580]">
              {name}
            </h2>
            <p className="text-base sm:text-lg font-semibold text-[#272343]">
              {price}
            </p>
          </div>
          <div className="flex justify-center">
            <CartButton />
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  
