import { motion } from 'framer-motion'
import { Heart, Users, Award, Coffee, Clock, Palette } from 'lucide-react'
import Card from '../components/ui/Card'
import ParallaxBackground from '../components/ParallaxBackground'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Coffee',
      description: 'We pour our heart into every cup, treating each brew as a unique work of art that deserves the finest attention to detail.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe the best cafe experiences come from building relationships with our neighbors, understanding their stories and creating a welcoming space together.'
    },
    {
      icon: Award,
      title: 'Excellence in Every Cup',
      description: 'From bean selection to brewing, we maintain the highest standards of quality and craftsmanship in everything we serve.'
    },
    {
      icon: Coffee,
      title: 'Warm & Personal',
      description: 'We create cafe experiences that feel welcoming and personal, like a warm cup of coffee on a quiet morning.'
    }
  ]

  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Founded with a vision to blend vintage cafe culture with modern coffee techniques.'
    },
    {
      year: '2021',
      title: 'First Success',
      description: 'Opened our doors and established our reputation for quality coffee and warm community atmosphere.'
    },
    {
      year: '2022',
      title: 'Growing Recognition',
      description: 'Received local awards and recognition for our innovative approach to vintage-inspired cafe experiences.'
    },
    {
      year: '2023',
      title: 'Expanding Horizons',
      description: 'Expanded our menu and community programs while maintaining our commitment to handcrafted excellence.'
    }
  ]

  const team = [
    {
      name: 'Sarah Williams',
      role: 'Head Barista & Founder',
      bio: 'With over 10 years in coffee, Sarah brings a passion for vintage cafe culture and modern brewing techniques.',
      image: 'SW'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Coffee Roaster',
      bio: 'Michael ensures our coffee beans are perfectly roasted and sourced from the finest farms worldwide.',
      image: 'MR'
    },
    {
      name: 'Emma Thompson',
      role: 'Pastry Chef',
      bio: 'Emma crafts delicious pastries that complement our coffee perfectly, with a touch of vintage charm.',
      image: 'ET'
    }
  ]

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
              Our Story
            </h1>
            <p className="body-large text-sepia-700 mb-8">
              We are passionate coffee lovers who believe that cafe experiences should feel 
              warm, personal, and handcrafted. Every cup is an opportunity to create 
              something truly special.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sepia-500">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Est. 2020</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>500+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>Local Awards</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-unified">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-3 font-display text-ink mb-6">
                Our Mission
              </h2>
              <p className="body-base text-sepia-700 mb-6">
                We believe that cafe experiences should feel as warm and personal as a 
                handwritten letter or a well-worn book. Our mission is to create cafe 
                spaces that evoke nostalgia while delivering exceptional coffee.
              </p>
              <p className="body-base text-sepia-700">
                Every cup we serve is treated as a unique work of art, carefully 
                crafted with attention to detail and a deep understanding of vintage cafe culture 
                combined with modern brewing techniques.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="max-w-md mx-auto">
                <div className="text-center">
                  <div className="w-24 h-24 bg-sepia-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Palette className="w-12 h-12 text-cream-50" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-ink mb-4">
                    Handcrafted Excellence
                  </h3>
                  <p className="text-sepia-700">
                    Every cup is carefully considered and crafted with love, 
                    just like the finest vintage coffee traditions.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <ParallaxBackground 
        className="py-20" 
        zoomRange={0.2} 
        sensitivity={0.6}
        animationType="hover"
        baseScale={1.0}
        maxScale={1.2}
        minScale={0.8}
        enableRotation={true}
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
              Our Values
            </h2>
            <p className="body-large text-sepia-700 max-w-3xl mx-auto">
              These core principles guide everything we do and help us create 
              meaningful, lasting cafe experiences.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-sepia-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-cream-50" />
                  </div>
                  <h3 className="heading-6 font-display text-ink mb-3">
                    {value.title}
                  </h3>
                  <p className="body-small text-sepia-700">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxBackground>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-3 font-display text-ink mb-4">
              Our Journey
            </h2>
            <p className="body-large text-sepia-700">
              From humble beginnings to community recognition
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sepia-500/30"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative flex items-start mb-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-sepia-700 rounded-full border-4 border-cream-50 z-10"></div>
                
                {/* Content */}
                <div className="ml-24">
                  <div className="text-2xl font-display font-bold text-sepia-700 mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sepia-700">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-3 font-display text-ink mb-4">
              Meet Our Team
            </h2>
            <p className="body-large text-sepia-700">
              The passionate people behind our delicious coffee
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <div className="w-20 h-20 bg-sepia-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-display font-bold text-cream-50">
                      {member.image}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-ink mb-2">
                    {member.name}
                  </h3>
                  <div className="text-sepia-700 font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-sepia-700">
                    {member.bio}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

