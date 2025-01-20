import { StaticImageData } from "next/image";

export default interface PCardProps {
  image: string | StaticImageData; // Allow both types
  name: string;
  products: string;
}