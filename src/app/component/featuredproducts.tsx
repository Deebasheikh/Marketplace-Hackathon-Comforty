"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { specificProducts } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import CartButton from "./cartbutton";
import { Products } from "@/types/products";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Products[]>([]);
  
  useEffect(() => {
    async function fetchproduct() {
      try {
        const fetchedProduct: Products[] = await client.fetch(specificProducts);
        setProducts(fetchedProduct);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchproduct();
  }, []);

  return (
    <>
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-32 py-12">
        <h2 className="text-2xl font-semibold text-[#272343]">Featured Products</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-y-10 sm:gap-x-5">
          {products.map((product) => (
            <div key={product._id}>
              {product.slug?.current && (
                <Link href={`/product/${product.slug.current}`}>
                  <div className="w-full h-auto rounded-md relative">
                    {/* Conditionally Render Badge */}
                    {product.title === "Library Stool Chair" && (
                      <div className="bg-[#01AD5A] w-auto px-3 py-1 rounded absolute top-4 left-4">
                        <p className="text-sm font-medium text-white">{product.badge}</p>
                      </div>
                    )}
                    {product.title === "Rose Luxe Armchair" && (
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
                    <div className="w-full mt-4 flex justify-between items-center">
                      <h1 className="text-sm sm:text-base font-medium text-[#007580]">{product.title}</h1>
                      <div className="flex items-center gap-2">
                        <p className="text-base sm:text-lg font-semibold text-[#272343]">${product.price}</p>
                        <CartButton />
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
