"use client";
import { useState, useEffect } from "react";
import { Products } from "@/types/products";
import { allProducts } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import CartButton from "./cartbutton";
import Link from "next/link";

const AllProducts = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct: Products[] = await client.fetch(allProducts);
        setProducts(fetchedProduct);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    }
    fetchProduct();
  }, []);
  //  find the ID of the first "Library Stool Chair."
  const firstLibraryStoolChair = products.find(
    (product) => product.title === "Library Stool Chair"
  );
  

  return (
    <div className="w-full max-w-screen-xl mx-auto items-center lg:px-16 lg:py-12">
      <h3 className="mt-4 font-[inter] text-xl lg:text-[32px] font-semibold leading-[35.2px] text-[#272343]">
        All Products
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-1 lg:gap-10 mt-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="relative shadow-lg rounded-md p-4 bg-white hover:shadow-2xl transition-shadow duration-300"
          >

                        {/*  Conditionally Render Badge Using Product ID */}
      {product.title === "Library Stool Chair" &&
        product._id === firstLibraryStoolChair?._id && (
          <div className="bg-[#01AD5A] w-auto px-3 py-1 rounded absolute top-6 left-6">
            <p className="text-sm font-medium text-white">{product.badge}</p>
          </div>
      )}

              {product.title === "Rose Luxe Armchair" && (
                <div className="bg-[#F5813F] w-auto px-3 py-1 rounded absolute top-6 left-6">
                  <p className="text-sm font-medium text-white">{product.badge}</p>
                </div>
                
              )}
               {product.title === "Nordic Spin" && (
                <div className="bg-[#01AD5A] w-auto px-3 py-1 rounded absolute top-6 left-6">
                  <p className="text-sm font-medium text-white">{product.badge}</p>
                </div>
              )}

              {product.title === "Gray Elegance" && (
                <div className="bg-[#F5813F] w-auto px-3 py-1 rounded absolute top-6 left-6">
                  <p className="text-sm font-medium text-white">{product.badge}</p>
                </div>
              )}

<Link href={`/product/${product.slug.current}`}>
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
            <p
              className={`mt-2 text-sm font-semibold ${
                product.inventory > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.inventory > 0 ? "In Stock" : "Out of Stock"}
            </p>
            </Link>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default AllProducts;