"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { followProducts } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Products } from "@/types/products";

const FollowProducts = () => {
  const [followedProducts, setFollowedProducts] = useState<Products[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedFollowedProducts: Products[] = await client.fetch(followProducts);
        setFollowedProducts(fetchedFollowedProducts);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {/* Newsletter Subscription & Instagram Section */}
      <div className="w-auto p-10 mt-10 lg:py-[100px] font-[roboto] lg:px-[300px] lg:gap-[70px] bg-[#1E28320D]">
        <div className="text-center">
          <h2 className="sm:text-2xl xl:text-4xl leading-[58.59px] text-[#000000]">
            Or Subscribe To The Newsletter
          </h2>
          <div className="sm:mt-5 flex justify-center gap-[10px] text-[#1E283280]">
            <input
              type="text"
              placeholder="Email address..."
              className="lg:text-base font-semibold leading-[18.75px] lg:w-[600px] opacity-50 border-b-2 underline border-solid"
            />
            <Link
              href="mailto:areebasheikh27.as@gmail.com?subject=Newsletter Subscription&body=I would like to subscribe to the newsletter."
              className="font-[open-sans] lg:text-base lg:font-normal leading-[21.79px] text-center hover:border-solid hover:border-b-2 hover:underline"
            >
              SUBMIT
            </Link>
          </div>

          <h2 className="sm:mt-5 lg:mt-16 font-medium leading-[58.59px] hover:opacity-50 hover:underline sm:text-2xl xl:text-4xl">
            Follow products and discounts on Instagram
          </h2>

          {/* Dynamic Instagram Images using followProducts */}
          <div className="flex justify-center gap-4 flex-wrap mt-8">
            {followedProducts.map((product) =>
              product.image ? (
                <Link key={product._id} href={`/product/${product.slug.current}`}>
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="object-cover rounded-md w-[100px] h-[100px]"
                  />
                </Link>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowProducts;
