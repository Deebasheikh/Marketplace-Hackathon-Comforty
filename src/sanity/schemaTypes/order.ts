import { defineType } from "sanity";

export const orderSchema = defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "user",
      title: "User",
      type: "string",
    },
    {
      name: "products",
      title: "Ordered Products",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "products" }],
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
            },
            {
              name: "price",
              title: "Price Per Unit",
              type: "number",
            },
          ],
        },
      ],
    },
    {
      name: "totalPrice",
      title: "Total Price",
      type: "number",
    },
    {
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: ["Pending", "Shipped", "Delivered", "Cancelled"],
      },
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: new Date().toISOString(),
    },
  ],
});
