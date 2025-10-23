import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/', description: 'Welcome to our cafe' },
    { name: 'About', path: '/about', description: 'Our story & coffee craft' },
    { name: 'Menu', path: '/portfolio', description: 'Our delicious offerings' },
    { name: 'Contact', path: '/contact', description: 'Let\'s brew together' }
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-ink text-cream-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 0.55, 0.25, 0.95] }}
    >
      {/* Decorative top border */}
      <div className="decorative-border h-1 bg-gradient-to-r from-sepia-500 to-sepia-700"></div>
      
      <div className="container-unified">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.16 }}
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                {/* Coffee cup logo */}
                <div className="w-12 h-12 bg-cream-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-160">
                  <img 
                    src="/logo.png" 
                    alt="Vintage Retro Cafe Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-cream-50 group-hover:text-sepia-500 transition-colors duration-160">
                  Vintage Retro Cafe
                </h1>
                <p className="text-xs text-sepia-500 font-body italic">
                  Handcrafted Coffee Experiences
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ 
                  y: -1,
                  transition: { 
                    duration: 0.16,
                    ease: [0.22, 0.55, 0.25, 0.95]
                  }
                }}
                className="relative group"
              >
                <Link
                  to={item.path}
                  className={`vintage-nav-link relative px-4 py-2 rounded-button transition-all duration-160 ${
                    isActive(item.path) 
                      ? 'active' 
                      : 'hover:bg-sepia-500/20'
                  }`}
                >
                  <span className="font-medium text-sm uppercase tracking-wide block">
                    {item.name}
                  </span>
                </Link>
                {/* Tooltip with description */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-ink text-cream-50 text-xs rounded-button opacity-0 group-hover:opacity-100 transition-opacity duration-160 pointer-events-none whitespace-nowrap z-50">
                  {item.description}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-ink rotate-45"></div>
                </div>
              </motion.div>
            ))}
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <motion.button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-button hover:bg-sepia-500/20 transition-colors duration-160"
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  duration: 0.16,
                  ease: [0.22, 0.55, 0.25, 0.95]
                }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { 
                  duration: 0.16,
                  ease: [0.22, 0.55, 0.25, 0.95]
                }
              }}
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-button hover:bg-sepia-500/20 transition-colors duration-160"
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  duration: 0.16,
                  ease: [0.22, 0.55, 0.25, 0.95]
                }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { 
                  duration: 0.16,
                  ease: [0.22, 0.55, 0.25, 0.95]
                }
              }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-sepia-500/20"
            >
              <div className="py-4">
                <div className="relative max-w-md mx-auto">
                  <input
                    type="text"
                    placeholder="Search our menu..."
                    className="w-full vintage-input pr-10"
                    autoFocus
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-sepia-500" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-sepia-500/20"
            >
              <nav className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`vintage-nav-link block px-4 py-3 rounded-button transition-all duration-160 ${
                        isActive(item.path)
                          ? 'active'
                          : 'hover:bg-sepia-500/20'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium text-sm uppercase tracking-wide">
                          {item.name}
                        </span>
                        <span className="text-xs text-sepia-500 mt-1">
                          {item.description}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
