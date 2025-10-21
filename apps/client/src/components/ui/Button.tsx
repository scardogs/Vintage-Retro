import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false,
  type = 'button'
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-button transition-all duration-160 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-sepia-700 text-cream-50 hover:bg-sepia-900 focus:ring-sepia-900 shadow-button',
    secondary: 'bg-cream-200 text-ink hover:bg-cream-50 focus:ring-sepia-900',
    outline: 'border-2 border-sepia-700 text-sepia-700 hover:bg-sepia-700 hover:text-cream-50 focus:ring-sepia-900',
    ghost: 'text-sepia-700 hover:bg-sepia-500/10 focus:ring-sepia-900'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ 
        y: -1,
        transition: { 
          duration: 0.16,
          ease: [0.22, 0.55, 0.25, 0.95]
        }
      }}
      whileTap={{ 
        scaleY: 0.98,
        transition: { 
          duration: 0.16,
          ease: [0.22, 0.55, 0.25, 0.95]
        }
      }}
      transition={{ 
        duration: 0.16,
        ease: [0.22, 0.55, 0.25, 0.95]
      }}
    >
      {children}
    </motion.button>
  )
}

export default Button
