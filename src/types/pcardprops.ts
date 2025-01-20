import { StaticImageData } from "next/image";

export default interface ICard {
    p?: string;
    color?: string;
    image: string | StaticImageData; // Allow both types
    name: string;
    price: string;
    showCartButton?: boolean; // New prop to control CartButton visibility
  }
  