
import { client } from "@/sanity/lib/client";
import { Products } from "@/types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import AddToCart from "@/app/component/addtocart";
import SuggestedProducts from "@/app/component/suggestedproducts";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}
async function getProduct(slug: string): Promise<Products> {
  return client.fetch(
    groq`*[_type == "products" && slug.current == $slug][0] {
            _id,
            title,
            _type,
            image,
            price,
            description,
            
        }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <>
      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row my-12 mx-6 lg:mx-32">
        {/* Product Image */}
        {product.image && (
          <Image
            src={urlFor(product.image).url()}
            alt={product.title}
            width={675}
            height={607}
            className="object-cover shadow-md rounded-[10px] w-full lg:w-[575px] lg:h-[507px]"
          />
        )}
        {/* Product Info */}
        <div className="mt-8 lg:mt-0 lg:ml-20">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl leading-4 font-bold text-[#272343]">
            {product.title}
          </h2>
          <button
            className="mt-6 px-6 py-3  rounded-full text-[#ffffff] text-sm lg:text-base font-semibold bg-[#029FAE]">
             ${product.price} USD
             </button>   
             <p className="mt-6 text-sm lg:text-lg leading-relaxed font-[inter] text-[#333]">
                {product.description}
             </p>
             <div className="mt-5">
             <AddToCart product={product} />
           </div>
        </div>
      </div>
      <SuggestedProducts />
    </>
  );
}