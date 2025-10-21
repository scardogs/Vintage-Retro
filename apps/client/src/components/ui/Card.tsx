import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  ribbon?: string
  onClick?: () => void
}

const Card = ({ children, className = '', hover = true, ribbon, onClick }: CardProps) => {
  return (
    <motion.div
      className={`vintage-card relative ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hover ? { 
        y: -4,
        transition: { 
          duration: 0.16,
          ease: [0.22, 0.55, 0.25, 0.95]
        }
      } : {}}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {/* Featured Highlight */}
      {ribbon && (
        <div className="absolute top-2 left-2 z-10">
          <span className="relative text-xs font-bold text-ink whitespace-nowrap">
            <span className="relative z-10">{ribbon}</span>
            <span 
              className="absolute inset-0 bg-sepia-300/60 transform -rotate-1 -skew-x-12"
              style={{
                background: 'linear-gradient(45deg, rgba(139, 125, 107, 0.4) 0%, rgba(160, 144, 124, 0.6) 50%, rgba(139, 125, 107, 0.3) 100%)',
                borderRadius: '2px',
                width: '110%',
                height: '120%',
                top: '-10%',
                left: '-5%',
                transform: 'rotate(-2deg) skewX(-8deg)',
                filter: 'blur(0.5px)'
              }}
            />
          </span>
        </div>
      )}
      
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  )
}

export default Card

