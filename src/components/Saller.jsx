import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeSharp } from "react-icons/io5";
import img1 from "../assets/saller1.png";
import img2 from '../assets/saller2.png';
import img3 from "../assets/saller3.png";
import img4 from "../assets/saller4.png";

const sellers = [
  { id: 1, image: img1, name: "Butter", quantity: "20g", price: "PKR: 260" },
  { id: 2, image: img2, name: "Milk", quantity: "1L", price: "PKR: 150" },
  { id: 3, image: img3, name: "Cheese", quantity: "100g", price: "PKR: 300" },
  { id: 4, image: img4, name: "Yogurt", quantity: "500g", price: "PKR: 180" },

  { id: 5, image: img2, name: "Milk", quantity: "1L", price: "PKR: 150" },
  { id: 6, image: img1, name: "Butter", quantity: "20g", price: "PKR: 260" },
  { id: 7, image: img4, name: "Yogurt", quantity: "500g", price: "PKR: 180" },
  { id: 8, image: img3, name: "Cheese", quantity: "100g", price: "PKR: 300" },

  { id: 9, image: img1, name: "Butter", quantity: "20g", price: "PKR: 260" },
  { id: 10, image: img2, name: "Milk", quantity: "1L", price: "PKR: 150" },
  { id: 11, image: img3, name: "Cheese", quantity: "100g", price: "PKR: 300" },
  { id: 12, image: img4, name: "Yogurt", quantity: "500g", price: "PKR: 180" },
];

const Saller = () => {
  return (
    <div className="mx-4 my-4 md:mx-10 lg:mx-20">
      <div className="text-center mb-20 mt-32">
        <h1 className="text-3xl font-bold">Best Sallers</h1>
      </div>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {sellers.map((seller) => (
          <div
            key={seller.id}
            className="border rounded-lg shadow-lg w-full max-w-[200px] mx-auto bg-white p-2"
          >
            <div className="relative">
              <img
                className="w-full h-32 object-cover rounded-t-lg"
                src={seller.image}
                alt={seller.name}
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button className="bg-white p-1 rounded-full shadow-md">
                  <CiHeart size={18} />
                </button>
                <button className="bg-white p-1 rounded-full shadow-md">
                  <IoEyeSharp size={18} />
                </button>
              </div>
            </div>
            <div className="p-2">
              <div className="flex justify-between mb-1">
                <p className="text-sm font-semibold">{seller.name}</p>
                <p className="text-sm font-semibold">{seller.quantity}</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold">{seller.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saller;
