import { useEffect } from "react";

export default function CustomAlert({ show, message, type, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2700); // auto close

      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed top-40 left-1/2 -translate-x-1/2 z-[9999] animate-slideIn">
      <div
        className={`px-5 py-3 rounded-lg shadow-lg text-white font-medium flex items-center gap-2
        ${type === "error" ? "bg-red-500" : ""}
        ${type === "success" ? "bg-green-500" : ""}
        ${type === "warning" ? "bg-yellow-500 text-black" : ""}
        `}
      >
        {type === "success"}
        {type === "error"}
        {type === "warning"}

        {message}
      </div>
    </div>
  );
}