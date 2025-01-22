import Image from "next/image";
import logo from "@/app/assets/Logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import Group13 from "@/app/assets/Group 13.png";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>;

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Top Section */}
      <div className="w-full flex flex-wrap justify-around py-10 px-6 lg:px-20">
        {/* Logo and Social Links */}
        <div className="max-w-xs text-center lg:text-left">
          <Image src={logo} alt="Logo" className="mx-auto lg:mx-0 w-40" />
          <p className="mt-4 text-sm opacity-70">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          <div className="flex justify-center lg:justify-start space-x-3 mt-4">
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <FaFacebook />
            </button>
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <FaTwitter />
            </button>
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <FaInstagram />
            </button>
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <FaPinterest />
            </button>
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <FaYoutube />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-8 lg:mt-0">
          <h3 className="text-sm font-semibold mb-4">CATEGORY</h3>
          <ul className="space-y-2">
            {[
              "Sofa",
              "Armchair",
              "Wing Chair",
              "Desk Chair",
              "Wooden Chair",
              "Park Bench",
            ].map((item) => (
              <li key={item} className="hover:underline hover:text-blue-600">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="mt-8 lg:mt-0">
          <h3 className="text-sm font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            {[
              "Help & Support",
              "Terms & Conditions",
              "Privacy Policy",
              "Help",
            ].map((item) => (
              <li key={item} className="hover:underline hover:text-blue-600">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="mt-8 lg:mt-0 max-w-xs">
          <h3 className="text-sm font-semibold mb-4">NEWSLETTER</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter to stay updated.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none"
            />
            <button className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-around bg-[#FFFFFF]  items-center">
      <div className="py-4  text-sm">
        <p>
          © 2021 Blogy - Designed & Developed by{" "}
          <span className="text-blue-600 font-semibold">Zakirsoft</span>
        </p>
      </div>
      <div>
        <Image src={Group13} alt="cards"
        className="text-[#FFFFFF] opacity-50" />
      </div>
      </div>
    </footer>
  );
};

export default Footer;
