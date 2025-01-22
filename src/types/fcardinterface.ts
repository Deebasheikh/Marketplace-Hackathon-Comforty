import { StaticImageData } from "next/image";
interface IFeatureCardProps {
  image: string | StaticImageData; // Allow both types
  name: string;
  title?:string;
  description?:string;
  price?:string
  }
  export default IFeatureCardProps;