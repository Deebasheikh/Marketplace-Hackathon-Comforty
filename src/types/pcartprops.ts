import { StaticImageData } from "next/image";

export default interface ICart {
  p: string;
  image: string | StaticImageData; // Allow both types
  price: string;
  h4: string;
  name: string;
  quantity: string;
}
