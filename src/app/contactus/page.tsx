import Link from "next/link";
import { TiLocation } from "react-icons/ti";
import { MdLocalPhone } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import Image from "next/image";
import quality from "@/app/assets/quality.png";
import warranty from "@/app/assets/warranty.png";
import support from "@/app/assets/support.png";
const Contact = () => {
  return (
    <>
    <div className="min-h-screen  px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-3xl md:text-4xl font-semibold text-gray-800">
          Get In Touch With Us
        </h1>
        <p className="text-center text-gray-600 mt-2 capitalize">
          For more information about our product & services, please feel free to drop us<br />
          an email. Our staff is always here to help you out. Do not hesitate!
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Section */}
          <div className="space-y-6 ml-16">
            <div className="flex items-start">
              <Link href="/" className="text-2xl mr-4"><TiLocation />
</Link>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Link href="/" className="text-2xl  mr-4"><MdLocalPhone />
</Link>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">Mobile: (+84) 546-6769</p>
                <p className="text-gray-600">Hotline: (+84) 456-6789</p>
              </div>
            </div>
            <div className="flex items-start">
              <Link href="/" className="text-2xl  mr-4"><AiFillClockCircle />

</Link>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Working Time</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday - Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white shadow-md rounded-lg p-6 mr-16">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700"
                  id="message"
                  rows={4}
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#029FAE] text-white font-semibold rounded-[5px]
                 border border-solid border-[#B88E2F] px-20   py-3 ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="border shadow-md bg-[#F4F4F4] px-8 py-8 mt-8 mx-12">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 
      md:space-y-0 md:space-x-8">
        {/* High Quality */}
        <div className="flex items-center space-x-4">
          <Image src={quality} alt="quality-sign" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">High Quality</h3>
            <p className="text-gray-600 text-sm">Created from top materials</p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="flex items-center space-x-4">
          <Image src={warranty} alt="warranty-sign" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Warranty Protection</h3>
            <p className="text-gray-600 text-sm">Secure warranty</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex items-center space-x-4">
          <Image src={support} alt="support-sign" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">24/7 Support</h3>
            <p className="text-gray-600 text-sm">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Contact;
