import React from "react";
import { AiOutlineTwitter, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import PrivacyPolicy from "./PrivacyPolicy";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/internet.png" 
                alt="Scam Puncher" 
                className="h-9 w-auto"
              />
              <span className="text-white text-2xl font-bold tracking-tight">Scam Puncher</span>
            </div>
            <p className="text-sm leading-relaxed">
              Protecting you from scams with fast, smart, and free checks. 
              Punch scams before they punch your wallet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/spam-check" className="hover:text-white transition-colors">Check Spam</a></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-5 text-2xl">
              <a href="#" className="hover:text-white transition-colors"><AiOutlineTwitter /></a>
              <a href="#" className="hover:text-white transition-colors"><FaFacebook /></a>
              <a href="#" className="hover:text-white transition-colors"><AiFillYoutube /></a>
              <a href="#" className="hover:text-white transition-colors"><AiFillLinkedin /></a>
            </div>

            <div className="mt-8">
              <p className="text-xs">Made with ❤️ to protect people from scams</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Scam Puncher. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;