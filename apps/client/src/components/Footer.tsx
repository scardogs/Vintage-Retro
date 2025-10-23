import { motion } from 'framer-motion'
import { Twitter, Facebook, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Mail, href: 'mailto:hello@vintageretrocafe.com', label: 'Email' }
  ]

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '/about#story' },
      { name: 'Coffee Craft', href: '/about#craftsmanship' }
    ],
    services: [
      { name: 'Coffee Menu', href: '/portfolio#coffee' },
      { name: 'Pastries', href: '/portfolio#pastries' },
      { name: 'Beverages', href: '/portfolio#beverages' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Our Menu', href: '/portfolio' },
      { name: 'Contact', href: '/contact' }
    ]
  }

  return (
    <footer className="bg-ink text-cream-50">
      {/* Decorative top border */}
      <div className="decorative-border h-1 bg-gradient-to-r from-sepia-500 to-sepia-700"></div>
      
      <div className="container-unified py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                {/* Coffee cup logo */}
                <div className="w-10 h-10 bg-cream-50 flex items-center justify-center">
                  <img 
                    src="/logo.png" 
                    alt="Vintage Retro Cafe Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold">Vintage Retro Cafe</h3>
                <p className="text-xs text-sepia-500 italic">Handcrafted Coffee</p>
              </div>
            </div>
            <p className="text-sm text-sepia-500 mb-6 leading-relaxed">
              We create warm, nostalgic cafe experiences that feel handcrafted 
              while delivering exceptional coffee and community.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-sepia-700 rounded-button flex items-center justify-center hover:bg-sepia-500 transition-colors duration-160"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-sepia-500 hover:text-cream-50 transition-colors duration-160"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-display font-semibold mb-4">Menu</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-sepia-500 hover:text-cream-50 transition-colors duration-160"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-sepia-500 hover:text-cream-50 transition-colors duration-160"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-sepia-500/20 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-sepia-500 mb-4 md:mb-0">
              © {currentYear} Vintage Retro Cafe. All rights reserved. Brewed with love.
            </p>
            <div className="flex space-x-6 text-sm text-sepia-500">
              <a href="/privacy" className="hover:text-cream-50 transition-colors duration-160">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-cream-50 transition-colors duration-160">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

