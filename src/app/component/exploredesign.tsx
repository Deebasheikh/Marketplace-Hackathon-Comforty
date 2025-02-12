'use client';
import { useState, useEffect } from "react";
import { Products } from "@/types/products";
import { specificProductsExplore } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const ExploreDesign = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Products[] = await client.fetch(specificProductsExplore);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const largeCard = products.length > 0 ? products[0] : null;
  const smallCards = products.slice(1);

  return (
    <div className="w-full lg:px-0 ml-3 lg:ml-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-0 lg:flex">
      <div className=" lg:mt-28">
        <p className=" lg:-rotate-90  px-5 py-3  lg:px-0 text-[18px] md:text-xl lg:text-xl  font-semibold
        m-0 uppercase text-black leading-none">
          Explore New & Popular Styles
        </p>
      </div>

      <div className="p-2 sm:p-0 sm:flex justify-center gap-1">
        {/* Large Card */}
        {largeCard && (
          <div>
            <Link href={`/product/${largeCard.slug.current}`}>
              <Image
                src={largeCard.image ? urlFor(largeCard.image)?.url() : "/default-image.jpg"}
                alt={largeCard.title}
                width={648}
                height={648}
                className="object-cover rounded-xl shadow-2xl w-[312px] h-[312px] lg:mt-5  lg:w-[548px] lg:h-[520px] m-2"
              />
            </Link>
          </div>
        )}

        {/* Smaller Cards */}
        <div className="flex flex-wrap gap-2 p-2 lg:p-6">
          {smallCards.map((product, index) => (
            <div key={`${product._id}-${index}`}>
              <Link href={`/product/${product.slug.current}`}>
                {product.image && (
                  <Image
                    src={urlFor(product.image)?.url() || "/default-image.jpg"}
                    alt={product.title}
                    width={312}
                    height={312}
                    className="object-cover w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] "
                  />
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreDesign;
