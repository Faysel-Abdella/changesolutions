"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Automatically hide the response message after 4 seconds
  useEffect(() => {
    if (responseMessage) {
      const timer = setTimeout(() => {
        setResponseMessage("");
      }, 4000); // 4 seconds

      return () => clearTimeout(timer); // Cleanup function
    }
  }, [responseMessage]);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    console.log("This is form data", formData);

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong.");

      setResponseMessage("Form submitted successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" }); // Clear form
    } catch (_error) {
      setResponseMessage("Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="relative w-full md:w-1/2 text-gray-text border-[1px] backdrop-blur-[50px] p-10 bg-gradient-to-b from-[#322D5A] to-[#322D5ABF] bg-clip-text border-white-border rounded-[40px]"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex w-full justify-center items-center flex-col gap-10 "
      >
        {/* Information about required fields */}
        <div className="w-full flex flex-col justify-center gap-4">
          {/* Input Fields */}
          <div className="flex flex-col text-sm w-full gap-6">
            <input
              id="name"
              type="text"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              className="border-[1px] border-[#FFFFFF40] py-4 px-5 rounded-2xl placeholder:text-[#B7BEC7] bg-light-blue-black w-full focus:outline-none focus:ring-2 focus:ring-sky-blue cursor-text relative"
              required
            />

            <input
              id="phone"
              type="tel"
              placeholder="Phone number*"
              value={formData.phone}
              onChange={handleChange}
              className="border-[1px] border-[#FFFFFF40] py-4 px-5 rounded-2xl placeholder:text-[#B7BEC7] bg-light-blue-black w-full focus:outline-none focus:ring-2 focus:ring-sky-blue cursor-text relative"
              required
            />

            <input
              id="email"
              type="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="border-[1px] border-[#FFFFFF40] py-4 px-5 rounded-2xl placeholder:text-[#B7BEC7] bg-light-blue-black w-full focus:outline-none focus:ring-2 focus:ring-sky-blue cursor-text relative"
              required
            />

            <textarea
              id="message"
              placeholder="Your message*"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="border-[1px] border-[#FFFFFF40] py-4 px-5 rounded-[20px] placeholder:text-[#B7BEC7] bg-light-blue-black w-full focus:outline-none focus:ring-2 focus:ring-sky-blue cursor-text relative resize-none"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center w-full">
          <Button
            type="submit"
            className="text-white bg-sky-blue py-3 px-6 w-7/8 rounded-2xl flex justify-center cursor-pointer hover:bg-opacity-90 transition disabled:opacity-70"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>

        {/* Response Message */}
        {responseMessage && (
          <p className="text-center font-semibold text-white ">
            {responseMessage}
          </p>
        )}
      </form>
    </motion.div>
  );
}
