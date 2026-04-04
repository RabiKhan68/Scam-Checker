import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can later connect this to EmailJS / backend
    console.log(form);

    setSubmitted(true);

    // Reset form
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center px-4 py-10">
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 w-full max-w-xl">

        <h1 className="text-2xl font-bold text-black mb-2">
          Contact Us
        </h1>

        <p className="text-gray-600 mb-6 text-sm">
          Have questions, feedback, or found a scam? We'd love to hear from you.
        </p>

        {submitted && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-sm">
            Message sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* NAME */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

        {/* EXTRA INFO */}
        <div className="mt-6 text-sm text-gray-500 text-center">
          Or email us directly at <span className="text-blue-600">support@scampuncher.com</span>
        </div>

      </div>
    </div>
  );
}