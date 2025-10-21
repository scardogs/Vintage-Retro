// Shared types and schemas for the Vintage Retro project

export interface ContactFormData {
  name: string
  email: string
  company?: string
  project: string
  budget?: string
  message: string
}

export interface Project {
  id: number
  title: string
  category: 'web' | 'branding' | 'ecommerce'
  description: string
  image: string
  tags: string[]
  year: string
  featured?: boolean
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export type ViewMode = 'grid' | 'list'
export type FilterType = 'all' | 'web' | 'branding' | 'ecommerce'
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

