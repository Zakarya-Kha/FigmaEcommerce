import React from "react";
import Feed from "./feed";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const features = [
  {
    id: 1,
    image: icon1,
    title: "Free And Fast Delivery",
    description: "Free delivery for all orders over Rs140",
  },
  {
    id: 2,
    image: icon2,
    title: "24/7 Customer Support",
    description: "We are here to help you anytime, anywhere",
  },
  {
    id: 3,
    image: icon3,
    title: "Secure Payment",
    description: "Your payment information is safe with us",
  },
];

const FeedButtom = () => {
  return (
    <div className="my-8 px-4 md:px-8 lg:px-16 mb-20 mt-20">
      <Feed />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-9">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex items-center space-x-4 p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow"
          >
            <img
              className="w-16 h-16 object-cover rounded-full border-2 bg-black"
              src={feature.image}
              alt={feature.title}
            />
            <div>
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedButtom;
