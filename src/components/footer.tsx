"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
]

export default function Footer() {
  return (
    <motion.footer
      className="relative bg-black/80 backdrop-blur-lg border-t border-blue-900/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-300 mb-4">Company</h3>
            <p className="text-blue-300/80 mb-4">Creating innovative digital solutions for tomorrow's challenges.</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-300 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Products", "About", "Contact", "Community"].map((item) => (
                <motion.li key={item} whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-blue-300/80 hover:text-blue-300 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-300 mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-blue-300/80">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@company.com</span>
              </li>
              <li className="flex items-center space-x-3 text-blue-300/80">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-blue-300/80">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>123 Innovation St, Tech City</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-300 mb-4">Newsletter</h3>
            <p className="text-blue-300/80 mb-4">Subscribe to our newsletter for updates and insights.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-blue-900/20 border border-blue-900/50 rounded-lg focus:outline-none focus:border-blue-400 text-blue-300 placeholder-blue-300/50"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-900/50 text-center">
          <p className="text-blue-300/80">© {new Date().getFullYear()} Company. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}

