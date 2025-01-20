import Image from "next/image";
import PCardProps from "@/types/pcardpropstwo";

const ProductCard = (props: PCardProps) => {
  const { image, name, products } = props;
  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mt-6 rounded-lg relative">
      {/* Image Section */}
      <Image
        src={image}
        alt={name}
        className="w-full h-auto rounded-t-lg object-cover"
      />

      {/* Overlay Section */}
      <div className="w-full h-auto bg-black bg-opacity-70 text-white p-4 rounded-b-lg absolute bottom-0">
        <h2 className="text-lg sm:text-lg font-medium">{name}</h2>
        <p className="text-sm sm:text-base opacity-70">{products}</p>
      </div>
    </div>
  );
};

export default ProductCard;
