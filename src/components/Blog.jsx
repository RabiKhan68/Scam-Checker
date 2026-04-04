import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "How to Spot Online Scams in 2026",
    desc: "Learn the latest tricks scammers use and how to stay safe.",
  },
  {
    id: 2,
    title: "Top 5 WhatsApp Scams You Must Avoid",
    desc: "These scams are trending right now. Stay alert!",
  },
  {
    id: 3,
    title: "Is This Website Safe? Quick Checklist",
    desc: "Before entering your data, check these signs.",
  },
  {
    id: 4,
    title: "How to stay safe from AI dating scams",
    desc: "With AI-generated profiles on the rise, learn how to spot fake online romances and protect your heart and wallet.",
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-900 px-4 py-10">

      <h1 className="text-3xl font-bold text-center mb-8">
        Scam Awareness Blog
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {blogs.map((blog) => (
          <Link
            to={`/blog/${blog.id}`}
            key={blog.id}
            className="block bg-white p-5 rounded-xl shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 text-gray-900">
              {blog.title}
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              {blog.desc}
            </p>
          </Link>
        ))}
      </div>

    </div>
  );
}