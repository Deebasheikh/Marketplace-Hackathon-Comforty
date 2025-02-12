"use client";
import { useState, useEffect } from "react";
import { Products } from "@/types/products";
import { ourSpecificProducts } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import CartButton from "./cartbutton";
import Link from "next/link";

const OurProducts = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct: Products[] = await client.fetch(ourSpecificProducts);
        setProducts(fetchedProduct);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProduct();
  }, []);

  // Find the first occurrence index of "Library Stool Chair"
  const firstLibraryStoolChairIndex = products.findIndex(
    (product) => product.title === "Library Stool Chair"
  );

  return (
    <div className="w-full max-w-screen-xl mx-auto items-center lg:px-16 lg:py-12">
      <h3 className="mt-4 font-[inter] text-xl font-semibold leading-[3.2px] text-[#272343]">
        Our Products
      </h3>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-y-10 sm:gap-x-5">
        {products.map((product, index) => (
          <div key={product._id}>
            <Link href={`/product/${product.slug.current}`}>
              <div className="w-full h-auto rounded-md relative">
                {/* Conditionally Render Badge */}
                {product.title === "Library Stool Chair" && index === firstLibraryStoolChairIndex && (
                  <div className="bg-[#01AD5A] w-auto px-3 py-1 rounded absolute top-4 left-4">
                    <p className="text-sm font-medium text-white">{product.badge}</p>
                  </div>
                )}

                {product.title === "Rose Luxe Armchair" && (
                  <div className="bg-[#F5813F] w-auto px-3 py-1 rounded absolute top-3 left-4">
                    <p className="text-sm font-medium text-white">{product.badge}</p>
                  </div>
                )}

                {product.title === "Nordic Spin" && (
                  <div className="bg-[#01AD5A] w-auto px-3 py-1 rounded absolute top-4 left-4">
                    <p className="text-sm font-medium text-white">{product.badge}</p>
                  </div>
                )}

                {product.title === "Gray Elegance" && (
                  <div className="bg-[#F5813F] w-auto px-3 py-1 rounded absolute top-3 left-4">
                    <p className="text-sm font-medium text-white">{product.badge}</p>
                  </div>
                )}

                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="w-full h-auto object-cover rounded-md"
                  />
                )}
              </div>
            </Link>

            <div className="w-full mt-4 flex justify-between items-center">
              <h1 className="text-sm sm:text-base font-medium text-[#007580]">
                {product.title}
              </h1>
              <div className="flex items-center gap-2">
                <p className="text-base sm:text-lg font-semibold text-[#272343]">
                  ${product.price}
                </p>
                <CartButton />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
