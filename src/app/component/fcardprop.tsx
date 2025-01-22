import IFeatureCardProps from "@/types/fcardinterface";
import Image from "next/image";
const FeatureCardProp = (props : IFeatureCardProps) => {
    const {image, name, title, description} = props
    return (
        <>
            <div className="bg-[#F9F9F9] shadow-lg px-6 py-9 m-2 flex-1">
                <Image src={image} alt={name} />
              <h3 className="text-xl font-normal text-[#007580] p-1">
              {title}
              </h3>
              <p className="text-[#007580] font-normal text-base">
                {description}
              </p>
            </div>
        </>
    );
};
export default FeatureCardProp;