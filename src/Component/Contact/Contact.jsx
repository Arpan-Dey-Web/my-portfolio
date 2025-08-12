import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_service_id, 
        import.meta.env.VITE_template_id, 
        form.current,
         import.meta.env.VITE_Public_Key 
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("❌ Failed to send message. Please try again later.");
          // console.error(error);
        }
      );
  };

  return (
    <div className="background max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold primary mb-4 glow">Get in Touch</h1>
        <p className="text-lg text">
          I'm open to collaborations, opportunities, or just a friendly chat.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="card p-8">
          <h2 className="text-2xl font-semibold primary mb-4 glow">
            Arpan Dey
          </h2>
          <p className="text mb-6">
            A passionate MERN stack developer from Chittagong, Bangladesh,
            dedicated to building real-world solutions through clean and
            efficient code.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text">Chittagong, Bangladesh</h3>
              <p className="text">arpandey.web@gmail.com</p>
              <p className="text">+880 1821524847</p>
            </div>

            <a
              href="https://wa.me/8801821524847"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary glow-hover"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card p-8">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label htmlFor="name" className="block text mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="Mr, Chowdhury"
                required
                className="w-full px-4 py-2 border border-cyber-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-primary background text"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text mb-2">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="mrchowdhury@gmail.com"
                required
                className="w-full px-4 py-2 border border-cyber-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-primary background text"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Your message..."
                required
                className="w-full px-4 py-2 border border-cyber-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-primary background text"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-accent glow-hover w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />
    </div>
  );
};

export default ContactPage;
