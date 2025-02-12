"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { suggestedProductsQuery } from "@/sanity/lib/queries";
import { Products } from "@/types/products";
import { urlFor } from "@/sanity/lib/image";

const SuggestedProducts = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchSuggestedProducts = async () => {
      try {
        const fetchedProducts: Products[] = await client.fetch(suggestedProductsQuery);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching suggested products:", error);
      }
    };

    fetchSuggestedProducts();
  }, []);


return (
  <div className="mx-6 lg:mx-32 my-10">
    <div className="flex justify-between">
    <h3 className="text-lg lg:text-2xl font-bold mb-4 text-[#272343]">Featured Products</h3>
    <Link href="/productpage" className="font-bold text-sm lg:text-lg underline">
      View All
    </Link>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {products.slice(0, 5).map((product) => (
        <div
          key={product._id}
          className="bg-white shadow-md rounded-md hover:shadow-xl transform hover:scale-105 transition duration-300 p-3"
        >
          <Link href={`/product/${product._id}`}>
            {product.image ? (
              <Image
                src={urlFor(product.image).width(200).height(200).url() || ""}
                alt={product.title}
                width={200}
                height={200}
                className="w-full h-32 object-cover rounded-md"
              />
            ) : (
              <div className="w-full h-32 bg-gray-200 rounded-md flex items-center justify-center">
                <p className="text-gray-500 text-sm">No Image</p>
              </div>
            )}
          </Link>
          <Link href={`/product/${product._id}`}>
            <h4 className="text-sm font-semibold text-center mt-2 text-[#007580] truncate">
              {product.title}
            </h4>
          </Link>
          <p className="text-center text-gray-500 text-sm">${product.price}</p>
        </div>
      ))}
    </div>
  </div>
);

};

export default SuggestedProducts;