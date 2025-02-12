"use client";
import { client } from "@/sanity/lib/client";
import { productsByCategory } from "@/sanity/lib/queries";
import { Products } from "@/types/products";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import CartButton from "@/app/component/cartbutton";

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
          const productsData: Products[] = await client.fetch(productsByCategory, { slug: category });
          setProducts(productsData);
      } catch (error) {
          console.error("Error fetching products:", error);
      }
    };

    if (category) {
      fetchProducts();
    }
  }, [category]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-24 py-12">
      <h2 className="text-2xl font-semibold text-[#272343] capitalize">{category} Products</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id}>
            <Link href={`/product/${product.slug.current}`}>
              <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow">
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
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;