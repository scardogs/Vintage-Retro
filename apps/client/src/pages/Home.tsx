import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, Award, Coffee } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const Home = () => {
  const features = [
    {
      icon: Star,
      title: 'Handcrafted Design',
      description: 'Every pixel carefully crafted with attention to detail and vintage aesthetics.'
    },
    {
      icon: Users,
      title: 'Personal Touch',
      description: 'We work closely with you to create experiences that reflect your unique story.'
    },
    {
      icon: Award,
      title: 'Modern Performance',
      description: 'Vintage aesthetics meet cutting-edge technology for optimal user experience.'
    },
    {
      icon: Coffee,
      title: 'Warm & Inviting',
      description: 'Creating digital spaces that feel like home, with a touch of nostalgia.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      company: 'Heritage Brands',
      content: 'Vintage Retro transformed our digital presence with their unique blend of nostalgia and modern functionality.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder',
      company: 'Artisan Collective',
      content: 'Their attention to detail and understanding of vintage aesthetics is unmatched in the industry.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grain-texture w-full h-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="text-5xl lg:text-7xl font-display font-bold text-ink mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Vintage Digital
                <span className="block text-sepia-700 italic">Experiences</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-sepia-700 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                We create warm, nostalgic digital experiences that feel handcrafted 
                while delivering modern performance and accessibility. Every project 
                is tailored to perfection.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-160" />
                </Button>
                <Button variant="outline" size="lg">
                  View Our Work
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
                    <div className="w-20 h-20 bg-sepia-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-display text-cream-50">V</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-ink mb-2">
                      Handcrafted Excellence
                    </h3>
                    <p className="text-sepia-700 mb-4">
                      Every detail matters in our vintage-inspired digital creations.
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
      <section className="py-20 bg-cream-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-ink mb-4">
              What Makes Us Special
            </h2>
            <p className="text-xl text-sepia-700 max-w-3xl mx-auto">
              We combine vintage aesthetics with modern technology to create 
              digital experiences that feel both nostalgic and cutting-edge.
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
                  <h3 className="text-xl font-display font-semibold text-ink mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sepia-700">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-ink mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-sepia-700">
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
                  <blockquote className="text-lg text-sepia-700 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-ink">{testimonial.name}</div>
                    <div className="text-sm text-sepia-500">
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
      <section className="py-20 bg-ink text-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-xl text-sepia-500 mb-8">
              Let's work together to bring your vintage-inspired vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-cream-50 text-ink hover:bg-cream-200"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-cream-50 text-cream-50 hover:bg-cream-50 hover:text-ink">
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

