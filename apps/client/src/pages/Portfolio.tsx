import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Grid, List } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import ParallaxBackground from '../components/ParallaxBackground'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'branding', label: 'Branding' },
    { id: 'ecommerce', label: 'E-commerce' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Heritage Coffee Roasters',
      category: 'web',
      description: 'A warm, inviting website for a family-owned coffee roastery with vintage aesthetics and modern functionality.',
      image: 'HC',
      tags: ['Web Design', 'Branding', 'E-commerce'],
      year: '2023',
      featured: true
    },
    {
      id: 2,
      title: 'Vintage Bookstore',
      category: 'web',
      description: 'An online bookstore that captures the charm of old-world bookshops with modern search and filtering capabilities.',
      image: 'VB',
      tags: ['Web Design', 'E-commerce'],
      year: '2023'
    },
    {
      id: 3,
      title: 'Artisan Pottery Studio',
      category: 'branding',
      description: 'Complete brand identity for a traditional pottery studio, including logo, packaging, and digital presence.',
      image: 'AP',
      tags: ['Branding', 'Logo Design', 'Packaging'],
      year: '2023'
    },
    {
      id: 4,
      title: 'Antique Furniture Gallery',
      category: 'ecommerce',
      description: 'A sophisticated e-commerce platform for selling antique furniture with detailed product showcases.',
      image: 'AF',
      tags: ['E-commerce', 'Web Design'],
      year: '2022'
    },
    {
      id: 5,
      title: 'Vintage Fashion Boutique',
      category: 'web',
      description: 'An elegant online boutique specializing in vintage and retro fashion with curated collections.',
      image: 'VF',
      tags: ['Web Design', 'E-commerce', 'Fashion'],
      year: '2022'
    },
    {
      id: 6,
      title: 'Traditional Bakery',
      category: 'branding',
      description: 'Complete rebrand for a family bakery, including logo, signage, and digital marketing materials.',
      image: 'TB',
      tags: ['Branding', 'Logo Design', 'Print'],
      year: '2022'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-ink mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-sepia-700 mb-8 leading-relaxed">
              A curated collection of our finest work, showcasing the perfect blend 
              of vintage aesthetics and modern functionality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 bg-cream-200/30 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-button font-medium transition-all duration-160 ${
                    activeFilter === filter.id
                      ? 'bg-sepia-700 text-cream-50'
                      : 'bg-cream-50 text-sepia-700 hover:bg-sepia-500/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-sepia-700">View:</span>
              <div className="flex bg-cream-50 rounded-button p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-button transition-all duration-160 ${
                    viewMode === 'grid' ? 'bg-sepia-700 text-cream-50' : 'text-sepia-700'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-button transition-all duration-160 ${
                    viewMode === 'list' ? 'bg-sepia-700 text-cream-50' : 'text-sepia-700'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <ParallaxBackground 
        className="py-20" 
        zoomRange={0.25} 
        sensitivity={0.7}
        animationType="both"
        baseScale={1.0}
        maxScale={1.3}
        minScale={0.8}
        enableRotation={true}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${viewMode}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-8'
              }
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  layout
                >
                  <Card 
                    className={`${viewMode === 'list' ? 'flex flex-row items-center' : ''} ${
                      project.featured ? 'ring-2 ring-sepia-500' : ''
                    }`}
                    ribbon={project.featured ? 'Featured' : undefined}
                  >
                    <div className={viewMode === 'list' ? 'flex items-center space-x-6 w-full' : ''}>
                      {/* Project Image/Icon */}
                      <div className={`${viewMode === 'list' ? 'w-20 h-20' : 'w-full h-48'} bg-sepia-700 rounded-button flex items-center justify-center mb-4`}>
                        <span className="text-3xl font-display font-bold text-cream-50">
                          {project.image}
                        </span>
                      </div>
                      
                      {/* Project Content */}
                      <div className={viewMode === 'list' ? 'flex-1' : ''}>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-display font-semibold text-ink">
                            {project.title}
                          </h3>
                          <span className="text-sm text-sepia-500">{project.year}</span>
                        </div>
                        
                        <p className="text-sepia-700 mb-4">
                          {project.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-sepia-500/20 text-sepia-700 text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* Actions */}
                        <div className="flex space-x-3">
                          <Button size="sm" variant="outline">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Project
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </ParallaxBackground>

      {/* CTA Section */}
      <section className="py-20 bg-ink text-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-sepia-500 mb-8">
              Let's create something beautiful together. Every great project starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-cream-50 text-ink hover:bg-cream-200"
              >
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="border-cream-50 text-cream-50 hover:bg-cream-50 hover:text-ink">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

