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
    { id: 'all', label: 'All Items' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'pastries', label: 'Pastries' },
    { id: 'beverages', label: 'Beverages' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Signature Espresso Blend',
      category: 'coffee',
      description: 'Our house blend featuring notes of dark chocolate and caramel, roasted to perfection for the ultimate espresso experience.',
      image: 'ES',
      tags: ['Espresso', 'House Blend', 'Signature'],
      year: '2023',
      featured: true
    },
    {
      id: 2,
      title: 'Vintage Croissant',
      category: 'pastries',
      description: 'Buttery, flaky croissants made with traditional French techniques and served warm from our vintage oven.',
      image: 'CR',
      tags: ['Pastry', 'French', 'Buttery'],
      year: '2023'
    },
    {
      id: 3,
      title: 'Artisan Latte Art',
      category: 'coffee',
      description: 'Beautiful handcrafted latte art featuring vintage-inspired designs that make every cup a work of art.',
      image: 'LA',
      tags: ['Latte Art', 'Handcrafted', 'Design'],
      year: '2023'
    },
    {
      id: 4,
      title: 'Homemade Scones',
      category: 'pastries',
      description: 'Traditional English scones with seasonal jams and clotted cream, perfect with afternoon tea.',
      image: 'SC',
      tags: ['Scones', 'Traditional', 'Afternoon Tea'],
      year: '2022'
    },
    {
      id: 5,
      title: 'Cold Brew Collection',
      category: 'beverages',
      description: 'Smooth, refreshing cold brew coffee with vintage-inspired flavor profiles and modern brewing techniques.',
      image: 'CB',
      tags: ['Cold Brew', 'Refreshing', 'Modern'],
      year: '2022'
    },
    {
      id: 6,
      title: 'Vintage Tea Selection',
      category: 'beverages',
      description: 'Curated collection of premium teas from around the world, served in vintage china with traditional ceremony.',
      image: 'TS',
      tags: ['Tea', 'Premium', 'Vintage'],
      year: '2022'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-lg">
        <div className="container-unified">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-1 font-display text-ink mb-6">
              Our Menu
            </h1>
            <p className="body-large text-sepia-700 mb-8">
              A curated collection of our finest offerings, showcasing the perfect blend 
              of vintage charm and exceptional taste.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8">
        <div className="container-unified">
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
        <div className="container-unified">
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
                          <h3 className="heading-6 font-display text-ink">
                            {project.title}
                          </h3>
                          <span className="caption text-sepia-500">{project.year}</span>
                        </div>
                        
                        <p className="body-small text-sepia-700 mb-4">
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
                            Order Now
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Github className="w-4 h-4 mr-2" />
                            Ingredients
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
      <section className="section-padding bg-ink text-cream-50">
        <div className="container-unified text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-3 font-display mb-6">
              Ready to Taste Something Amazing?
            </h2>
            <p className="body-large text-sepia-500 mb-8">
              Let's create something delicious together. Every great experience starts with a visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-cream-50 text-ink hover:bg-cream-200"
              >
                Visit Our Cafe
              </Button>
              <Button variant="outline" size="lg" className="border-cream-50 text-cream-50 hover:bg-cream-50 hover:text-ink">
                View Full Menu
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

