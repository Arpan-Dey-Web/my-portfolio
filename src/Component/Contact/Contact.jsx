import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          I'm open to collaborations, opportunities, or just a friendly chat.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Arpan Dey
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            A passionate MERN stack developer from Chittagong, Bangladesh,
            dedicated to building real-world solutions through clean and
            efficient code.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                Chittagong, Bangladesh
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                arpandey.web@gmail.com
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                +880 1821524847
              </p>
            </div>

            <a
              href="https://wa.me/8801821524847"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
          <form>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Mr, Chowdhury"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="mrchowdhury@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your message..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
