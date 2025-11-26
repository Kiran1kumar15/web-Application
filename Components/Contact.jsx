import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* Left: Info Section */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Contact Us 📞</h1>
          <p className="text-sm text-blue-100 mb-6">
            Have any questions, feedback, or suggestions about RecipeHub?
            Feel free to reach out to us using the details below.
          </p>

          <div className="space-y-4 text-sm">
            <div>
              <h2 className="font-semibold text-lg">Phone</h2>
              <p className="text-blue-100">+91 6300122172</p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">Email</h2>
              <p className="text-blue-100 break-all">
                gounorikirankumar@gmail.com
              </p>
            </div>
          </div>

          <p className="mt-8 text-xs text-blue-100">
            We’ll try to get back to you as soon as possible. 😊
          </p>
        </div>

        {/* Right: Form Section */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Send us a message
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Fill out the form below and we’ll reach out to you soon.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
