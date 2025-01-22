import IFeatureCardProps from "@/types/fcardinterface";
import Image from "next/image";
const FeatureProductCardProp = (props : IFeatureCardProps) => {
    const {image, name, price} = props
    return(
        <>
            <div className="p-1 m-2">
              <Image src={image} alt={name}
               className="h-[375px] object-cover" />
              <h3 className="text-xl font-normal mt-2">{name}</h3>
              <p className="text-lg">{price}</p>
            </div>
        </>
    );
};
export default FeatureProductCardProp;