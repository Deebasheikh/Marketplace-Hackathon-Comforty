'use client';
import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      id: "faq1",
      question: "What types of chairs do you offer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      id: "faq2",
      question: "Do your chairs come with a warranty?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      id: "faq3",
      question: "Can I try a chair before purchasing?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      id: "faq4",
      question: "How can we get in touch with you?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      id: "faq5",
      question: "What will be delivered? And when?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      id: "faq6",
      question: "How do I clean and maintain my chair?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
  ];

  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Questions Looks Here
         </h2>
        <p className="mt-4 text-lg text-gray-600">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the        
         </p>
      </div>
      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-16">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b border-gray-200 py-6 bg-[#F7F7F7]">
            <button
              className="w-full text-left flex justify-between items-center text-gray-900 font-medium text-lg focus:outline-none"
              onClick={() => toggleFAQ(faq.id)}
            >
              {faq.question}
              <span className="ml-2 text-gray-500">
                {activeId === faq.id ? "-" : "+"}
              </span>
            </button>
            <div
              className={`mt-2 text-gray-700 text-base ${
                activeId === faq.id ? "block" : "hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
