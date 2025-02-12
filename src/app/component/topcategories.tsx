"use client";
import { client } from "@/sanity/lib/client";
import { allCategoriesWithCount } from "@/sanity/lib/queries";
import { Category } from "@/types/products";
import { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const TopCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const fetchedCategories: Category[] = await client.fetch(allCategoriesWithCount);
                setCategories(fetchedCategories);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }
        fetchCategories();
    }, []);

    return (
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-24 py-12">
            <h2 className="text-2xl font-semibold text-[#272343]">Top Categories</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {categories.map((category) => (
                    <div key={category._id}>
                        <Link href={`/product/category/${category.slug.current}`}>
                            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mt-6 rounded-lg relative cursor-pointer">
                                {category.image && (
                                    <Image
                                        src={urlFor(category.image).url()}
                                        alt={category.title}
                                        width={300}
                                        height={300}
                                        className="w-full h-80 rounded-md object-cover"
                                    />
                                )}
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3">
                                    <h2 className="text-lg font-medium">{category.title}</h2>
                                    <p className="text-sm opacity-80">{category.products} Products</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCategories;