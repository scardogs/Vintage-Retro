import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, Award, Coffee } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const Home = () => {
  const features = [
    {
      icon: Star,
      title: 'Artisan Coffee',
      description: 'Every cup carefully crafted with attention to detail and vintage brewing methods.'
    },
    {
      icon: Users,
      title: 'Community Hub',
      description: 'We create a welcoming space where neighbors become friends and stories are shared.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Vintage charm meets modern coffee excellence for the perfect cup every time.'
    },
    {
      icon: Coffee,
      title: 'Warm & Inviting',
      description: 'Creating a cozy atmosphere that feels like home, with a touch of nostalgia.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Regular Customer',
      company: 'Local Resident',
      content: 'Vintage Retro Cafe transformed my morning routine with their unique blend of nostalgia and exceptional coffee.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Coffee Enthusiast',
      company: 'Daily Visitor',
      content: 'Their attention to detail and understanding of vintage cafe culture is unmatched in the neighborhood.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative section-padding-lg overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grain-texture w-full h-full"></div>
        </div>
        
        <div className="container-unified relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="heading-1 font-display text-ink mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Vintage Retro
                <span className="block text-sepia-700 italic">Cafe</span>
              </motion.h1>
              
              <motion.p 
                className="body-large text-sepia-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                We create warm, nostalgic cafe experiences that feel handcrafted 
                while delivering exceptional coffee and community. Every cup 
                is brewed to perfection.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button size="lg" className="group">
                  Visit Our Cafe
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-160" />
                </Button>
                <Button variant="outline" size="lg">
                  View Our Menu
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Main Card */}
                <Card className="max-w-md mx-auto">
                  <div className="text-center">
                    <div className="relative mx-auto mb-4 w-fit">
                      {/* Coffee cup logo */}
                      <div className="w-20 h-20 bg-cream-50 flex items-center justify-center">
                        <img 
                          src="/logo.png" 
                          alt="Vintage Retro Cafe Logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-ink mb-2">
                      Handcrafted Excellence
                    </h3>
                    <p className="text-sepia-700 mb-4">
                      Every detail matters in our vintage-inspired coffee creations.
                    </p>
                    <div className="flex justify-center space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-sepia-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </Card>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-olive rounded-full flex items-center justify-center shadow-card"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-cream-50 font-bold text-sm">R</span>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-burgundy rounded-full flex items-center justify-center shadow-card"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <span className="text-cream-50 font-bold text-xs">H</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-unified">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-3 font-display text-ink mb-4">
              What Makes Us Special
            </h2>
            <p className="body-large text-sepia-700 max-w-3xl mx-auto">
              We combine vintage aesthetics with modern coffee techniques to create 
              cafe experiences that feel both nostalgic and refreshing.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-sepia-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-cream-50" />
                  </div>
                  <h3 className="heading-6 font-display text-ink mb-3">
                    {feature.title}
                  </h3>
                  <p className="body-small text-sepia-700">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-unified">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-3 font-display text-ink mb-4">
              What Our Customers Say
            </h2>
            <p className="body-large text-sepia-700">
              Don't just take our word for it
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-sepia-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="body-base text-sepia-700 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-ink body-small">{testimonial.name}</div>
                    <div className="caption text-sepia-500">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Experience Something Special?
            </h2>
            <p className="body-large text-sepia-500 mb-8">
              Come visit us and discover the perfect blend of vintage charm and exceptional coffee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-cream-50 text-ink hover:bg-cream-200"
              >
                Visit Our Cafe
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-cream-50 text-cream-50 hover:bg-cream-50 hover:text-ink">
                View Our Menu
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

