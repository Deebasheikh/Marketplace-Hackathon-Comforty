import { groq } from "next-sanity";

export const allProductsQuery = groq`*[_type == "products"]` ; 
export const limitedProducts = groq`*[_type == "products"][0...$limit]`;
// Query to fetch specific products
export const specificProducts = groq ` [
    *[_type == "products" && title == "Library Stool Chair"][0],
    *[_type == "products" && title == "Rose Luxe Armchair"][0],
    *[_type == "products" && title == "Citrus Edge"][0],
    *[_type == "products" && title == "Ivory Charm"][0]
  ]`
;
// export const allCategories = groq*[_type == "categories"] ; 
// export const allCategoriesWithCount = groq`*[_type == "categories"] {
//   _id,
//   title,
//   image,
//   "products": count(*[_type == "products" && category._ref == ^._id])
// }`;
export const specificProductsExplore = groq  `[
  *[_type == "products" && title == "Citrus Edge"][0],
  *[_type == "products" && title == "Ivory Charm"][0],
  *[_type == "products" && title == "Library Stool Chair"][0],
  *[_type == "products" && title == "Gray Elegance"][0],
  *[_type == "products" && title == "Library Stool Chair"][0],

]`
;
export const ourSpecificProducts = groq ` [
  *[_type == "products" && title == "Library Stool Chair"][0],
  *[_type == "products" && title == "Rose Luxe Armchair"][0],
  *[_type == "products" && title == "Citrus Edge"][0],
  *[_type == "products" && title == "Ivory Charm"][0],
  *[_type == "products" && title == "Nordic Spin"][0],
  *[_type == "products" && title == "Gray Elegance"][0],
  *[_type == "products" && title == "Modern Cozy"][0],
  *[_type == "products" && title == "Library Stool Chair"][1]
]`
;

export const allProducts = groq ` [
  *[_type == "products" && title == "Library Stool Chair"][0],
  *[_type == "products" && title == "Rose Luxe Armchair"][0],
  *[_type == "products" && title == "Citrus Edge"][0],
  *[_type == "products" && title == "Ivory Charm"][0],
  *[_type == "products" && title == "Scandi Dip Set"][0],
  *[_type == "products" && title == "Gray Elegance"][0],
  *[_type == "products" && title == "Modern Cozy"][0],
  *[_type == "products" && title == "Library Stool Chair"][1],
  *[_type == "products" && title == "Nordic Spin"][0],
  *[_type == "products" && title == "Rose Luxe Armchair"][1],
  *[_type == "products" && title == "Citrus Edge"][1],
  *[_type == "products" && title == "SleekSpin"][0],

]`
;

export const followProducts = groq ` [
  *[_type == "products" && title == "Gray Elegance"][0],
  *[_type == "products" && title == "Nordic Spin"][0],
  *[_type == "products" && title == "Rose Luxe Armchair"][0],
  *[_type == "products" && title == "Library Stool Chair"][0],
  *[_type == "products" && title == "Citrus Edge"][0],
  *[_type == "products" && title == "SleekSpin"][0],
]`
;

// export const productsByCategory = groq`
// *[_type == "product" && references(*[_type == "category" && slug.current == $slug]._id)] {
//   _id,
//   title,
//   price,
//   image,
//   slug,
//   inventory
// }`;
// export const allCategoriesWithCount = groq `
//   *[_type == "categories"] {
//     _id,
//     title,
//     image,
//     slug,
//     "products" : count(*[_type == "products" && categories._ref == ^._id])
//   }`;

export const productsByCategory = groq`
  *[_type == "products" && category._ref == *[_type == "categories" && slug.current == $slug][0]._id]{
    _id,
    title,
    price,
    inventory,
    image,
    slug
  }`
;

// export const productsByCategory = groq`
//   *[_type == "products" && categories->slug.current == $slug] {
//     _id,
//     title,
//     price,
//     inventory,
//     image,
//     slug
//   }`
// ;



export const suggestedProductsQuery = groq`
  *[_type == "products"][0...5] {
    _id,
    title,
    price,
    "image": image.asset->url,
    slug
  }
`;

// export const allCategoriesWithCount = `
// *[_type == "categories"] {
//   _id,
//   title,
//   "slug": slug.current,
//   image,
//   "products": count(*[_type == "products" && references(^._id)])
// }
// `;

export const allCategoriesWithCount = groq`
  *[_type == "categories"] {
    _id,
    title,
    image,
    slug,
    "products" : count(*[_type == "products" && category._ref == ^._id])
  }`
;

// export const allCategoriesWithCount = groq`
//   *[_type == "categories"] {
//     _id,
//     title,
//     "slug": slug.current,  
//     image,
//     "products": count(*[_type == "products" && references(^._id)])
//   }
// `;

