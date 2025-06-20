"use client";
import React, { useState, FormEvent, useEffect, useCallback } from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaEnvelope, FaPhone } from "react-icons/fa";
import { socialMedia } from "@/data/index";
import emailjs from "@emailjs/browser";
import debounce from "lodash.debounce";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Footer = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleDebouncedMessage = useCallback(
    debounce((value: string) => {
      console.log("Debounced message input:", value);
      // You could add live validation, preview, or word count logic here
    }, 300),
    []
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "message") {
    handleDebouncedMessage(value); // Debounce only for message field
    }
  };

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log("Form Submitted!", response.status, response.text);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error in submitting the form!", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  useEffect(() => {
  return () => {
    handleDebouncedMessage.cancel();
  };
}, [handleDebouncedMessage]);


  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center mb-10">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16 backdrop-filter backdrop-blur-lg bg-opacity-10 bg-black-200 rounded-2xl p-8 border border-black-300 shadow-[0_0_15px_rgba(123,104,238,0.25)]">
        {/* Left Side - Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Contact <span className="text-purple">Me</span>
            </h2>
            <h3 className="text-xl text-white-200">
              Let&apos;s Code, Collaborate & Create
            </h3>
          </div>

          <p className="text-white-200 leading-relaxed">
            I’m a Data Science undergrad and a full-stack developer who thrives
            on turning ideas into scalable solutions. From React UIs to backend
            magic with Node and Mongo, let’s talk shop or start a project!
          </p>
          <p className="text-white-200 leading-relaxed">
            Whether it's a full-stack idea, a data-driven solution, or a dev
            collab, I'm all ears! Drop a message and let’s make your vision
            real.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-purple" />
              <a
                href="mailto:duwaragie22@gmail.com"
                className="text-white-200 hover:text-purple transition-colors"
              >
                duwaragie22@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-purple" />
              <a
                href="tel:+94774107337"
                className="text-white-200 hover:text-purple transition-colors"
              >
                +94 (77) 410 7337
              </a>
            </div>
          </div>

          <div className="pt-6">
            <div className="flex items-center gap-4">
              {socialMedia.map((info) => (
                <a
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple hover:shadow-[0_0_10px_rgba(123,104,238,0.3)] transition-all"
                >
                  <img
                    src={info.img}
                    alt="social icon"
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="w-full p-4 bg-black-200 bg-opacity-50 border border-black-300 rounded-lg focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple transition-all"
                required
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="w-full p-4 bg-black-200 bg-opacity-50 border border-black-300 rounded-lg focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple transition-all"
                required
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter Your Subject"
                className="w-full p-4 bg-black-200 bg-opacity-50 border border-black-300 rounded-lg focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple transition-all"
              />
            </div>
            <div className="w-full">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                rows={5}
                className="w-full p-4 bg-black-200 bg-opacity-50 border border-black-300 rounded-lg focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple transition-all resize-none"
                required
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-purple to-indigo-600 hover:opacity-90 transition-all shadow-[0_0_15px_rgba(123,104,238,0.5)] flex justify-center items-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="font-medium text-lg">
                    Let's build your next big thing
                  </span>
                )}
              </button>
            </div>

            {submitStatus === "success" && (
              <div className="bg-green-900 bg-opacity-40 border border-green-700 text-green-300 p-3 rounded-lg mt-4 text-center">
                🚀 Message sent! I’ll get back to you faster than a CI/CD
                pipeline.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-900 bg-opacity-40 border border-red-700 text-red-300 p-3 rounded-lg mt-4 text-center">
                ⚠️ Oops, something went wrong. Try again—or reach me via email.
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="flex flex-col items-center mt-6 mb-12">
        <a href="mailto:duwaragie22@gmail.com">
          <MagicButton
            title="Get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Duwaragie Kugaraj
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="social icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
