import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ParallaxBackground from '../components/ParallaxBackground'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@vintageretrocafe.com',
      description: 'We typically respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri, 7am-7pm EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Vintage Lane, Coffee City',
      description: 'Walk-ins welcome, reservations recommended'
    },
    {
      icon: Clock,
      title: 'Cafe Hours',
      details: '7am-7pm Daily',
      description: 'We value your time and ours'
    }
  ]

  const budgetOptions = [
    'Under $20',
    '$20 - $50',
    '$50 - $100',
    '$100 - $200',
    '$200+',
    'Not sure yet'
  ]

  const projectTypes = [
    'Coffee & Espresso',
    'Pastries & Desserts',
    'Tea & Beverages',
    'Catering Services',
    'Private Events',
    'Other'
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <motion.div
          className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-olive rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-cream-50" />
            </div>
            <h2 className="text-3xl font-display font-bold text-ink mb-4">
              Thank You!
            </h2>
            <p className="text-sepia-700 mb-6">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </Card>
        </motion.div>
      </div>
    )
  }

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
              Let's Brew Together
            </h1>
            <p className="body-large text-sepia-700 mb-8">
              Ready to experience our vintage-inspired cafe? We'd love to hear 
              about your preferences and discuss how we can create something truly special for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
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
              Get in Touch
            </h2>
            <p className="body-large text-sepia-700">
              Choose the way that works best for you
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-sepia-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-cream-50" />
                  </div>
                  <h3 className="heading-6 font-display text-ink mb-2">
                    {info.title}
                  </h3>
                  <p className="body-base font-medium text-sepia-700 mb-2">
                    {info.details}
                  </p>
                  <p className="caption text-sepia-500">
                    {info.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ParallaxBackground 
        className="py-20" 
        zoomRange={0.15} 
        sensitivity={0.5}
        animationType="scroll"
        baseScale={1.0}
        maxScale={1.2}
        minScale={0.9}
        enableRotation={false}
      >
        <div className="container-unified">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-3 font-display text-ink mb-4">
              Place Your Order
            </h2>
            <p className="body-large text-sepia-700">
              Tell us about your preferences and we'll help create the perfect experience
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="vintage-input w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="vintage-input w-full"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="vintage-input w-full"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-ink mb-2">
                      Order Type *
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      required
                      className="vintage-input w-full"
                    >
                      <option value="">Select order type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-ink mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="vintage-input w-full"
                  >
                    <option value="">Select budget range</option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                    Order Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="vintage-input w-full"
                    placeholder="Tell us about your order preferences, dietary restrictions, special requests, and any specific requirements..."
                  />
                </div>
                
                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-cream-50 border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Place Order
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-160" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </ParallaxBackground>
    </div>
  )
}

export default Contact

