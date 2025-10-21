import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface ParallaxBackgroundProps {
  children: React.ReactNode
  className?: string
  zoomRange?: number
  sensitivity?: number
  animationType?: 'scroll' | 'hover' | 'both'
  baseScale?: number
  maxScale?: number
  minScale?: number
  enableRotation?: boolean
}

const ParallaxBackground = ({ 
  children, 
  className = '', 
  zoomRange = 0.2,
  sensitivity = 0.6,
  animationType = 'both',
  baseScale = 1.0,
  maxScale = 1.4,
  minScale = 0.8,
  enableRotation = true
}: ParallaxBackgroundProps) => {
  const [scrollScale, setScrollScale] = useState(baseScale)
  const [hoverScale, setHoverScale] = useState(baseScale)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const elementTop = rect.top
        const elementHeight = rect.height
        const windowHeight = window.innerHeight
        
        const scrollProgress = Math.max(0, Math.min(1, 
          (windowHeight - elementTop) / (windowHeight + elementHeight)
        ))
        
        const zoom = baseScale + (scrollProgress * zoomRange * sensitivity)
        const clampedZoom = Math.max(minScale, Math.min(maxScale, zoom))
        setScrollScale(clampedZoom)
      }
    }

    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [zoomRange, sensitivity, baseScale, maxScale, minScale])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current && (animationType === 'hover' || animationType === 'both')) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      setMousePos({ x, y })
      
      const distanceFromCenter = Math.sqrt(
        Math.pow(x - 0.5, 2) + Math.pow(y - 0.5, 2)
      )
      const hoverZoom = baseScale + (0.15 * (1 - distanceFromCenter))
      setHoverScale(Math.max(minScale, Math.min(maxScale, hoverZoom)))
    }
  }

  const handleMouseLeave = () => {
    setHoverScale(baseScale)
    setMousePos({ x: 0.5, y: 0.5 })
  }

  const getFinalScale = () => {
    if (animationType === 'scroll') return scrollScale
    if (animationType === 'hover') return hoverScale
    if (animationType === 'both') {
      return Math.max(minScale, Math.min(maxScale, scrollScale + (hoverScale - baseScale) * 0.3))
    }
    return baseScale
  }

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Parallax Background with animations */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('/cafe-background.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#F6F0E6'
        }}
        animate={{
          scale: getFinalScale(),
          rotateX: enableRotation && (animationType === 'hover' || animationType === 'both') 
            ? (mousePos.y - 0.5) * 1.5 
            : 0,
          rotateY: enableRotation && (animationType === 'hover' || animationType === 'both') 
            ? (mousePos.x - 0.5) * 1.5 
            : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 0.55, 0.25, 0.95]
        }}
      />
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-cream-50/5" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default ParallaxBackground
