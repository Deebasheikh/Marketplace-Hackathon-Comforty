import card3 from "@/app/assets/card3.png";
import card5 from "@/app/assets/card5.png";
import PCart from "../component/cart";

const Cart = () => {
  return (
    <>
     <div className="flex flex-col md:flex-row justify-between mb-10 px-4 md:px-20 ml-16">
      <div className="flex-grow">
        <h3 className="text-[22px] text-[#111111] font-[inter] font-medium leading-[33px]">
          Bag
        </h3>
        <div className="mt-10">
          <PCart
            image={card3}
            name="library stool chair"
            h4="Library Stool Chair"
            p="Ashen Slate/Cobalt Bliss"
            quantity="1"
            price="MRP: $99"
          />
        </div>
        <div className="border-y-2 py-8 mt-10">
          <PCart
            image={card5}
            name="library stool chair"
            h4="Library Stool Chair"
            p="Ashen Slate/Cobalt Bliss"
            quantity="1"
            price="MRP: $99"
          />
        </div>
      </div>

      <div className="flex flex-col mt-10 md:ml-10">
        <h3 className="text-[21px] font-medium leading-[33px]">Summary</h3>
        <div className="mt-10">
          <div className="flex justify-between text-[15px] font-normal leading-7">
            <p>Subtotal</p>
            <p>$198.00</p>
          </div>
          <div className="flex justify-between text-[15px] font-normal leading-7 my-3">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between border py-4 px-2 my-5 text-sm">
            <p>Total</p>
            <p className="font-medium">$198.00</p>
          </div>
          <button className="rounded-[30px] px-5 py-3 text-white bg-[#029FAE] text-center mt-10">
            Checkout
          </button>
        </div>
      </div>
    </div>
     
    </>
  );
};
export default Cart;
