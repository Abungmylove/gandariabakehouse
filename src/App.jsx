import React from 'react';
import { ShoppingBag, Leaf, Clock, Heart, ChefHat, ArrowRight, Quote, MapPin, Phone, Mail, Globe, Link, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function App() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-text">
      
      {/* 1. Navbar */}
      <nav className="w-full py-6 px-4 md:px-8 lg:px-16 flex items-center justify-between z-50 relative bg-brand-bg">
        <div className="flex flex-col items-center">
          <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-brand-text/70 mb-1">ESTD 2026</span>
          <h1 className="font-serif text-2xl font-bold tracking-wider text-brand-text uppercase leading-none">Gandaria</h1>
          <span className="text-[9px] tracking-[0.3em] uppercase mt-1 text-brand-text/60">Bakehouse</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-wider uppercase">
          <a href="#" className="text-brand-primary">Home</a>
          <a href="#menu" className="hover:text-brand-primary transition">Menu</a>
          <a href="#about" className="hover:text-brand-primary transition">About Us</a>
          <a href="#catering" className="hover:text-brand-primary transition">Catering</a>
          <a href="#contact" className="hover:text-brand-primary transition">Contact</a>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="hidden md:block bg-brand-primary text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-brand-primary-hover transition">
            Order Now
          </button>
          <button className="text-brand-text hover:text-brand-primary transition">
            <ShoppingBag className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-16 mb-24">
        <div className="relative w-full h-[600px] rounded-3xl overflow-hidden bg-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop" 
            alt="Bakery background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Floating Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-bg/95 backdrop-blur-sm w-[90%] max-w-2xl p-8 md:p-12 text-center rounded-sm shadow-2xl flex flex-col items-center"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-brand-text/60 uppercase mb-4">Made Fresh Everyday</span>
            <h2 className="font-serif text-5xl md:text-6xl text-brand-text mb-6 leading-tight">Freshly Baked,<br/>Just for You!</h2>
            <p className="text-brand-text/70 text-sm md:text-base mb-8 max-w-md">
              We bring you the most delicious and fresh baked goods made with high quality ingredients and lots of love.
            </p>
            <button className="bg-brand-primary text-white px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-brand-primary-hover transition mb-12">
              Order Now
            </button>
            
            {/* Features in Hero */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center border-t border-brand-border pt-6">
              <div className="flex items-center gap-3 text-left">
                <Leaf className="w-5 h-5 text-brand-primary" />
                <span className="text-xs font-bold leading-tight">100% Natural<br/>Ingredients</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <ChefHat className="w-5 h-5 text-brand-primary" />
                <span className="text-xs font-bold leading-tight">Baked Fresh<br/>Everyday</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <Heart className="w-5 h-5 text-brand-primary" />
                <span className="text-xs font-bold leading-tight">Made With<br/>Love</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="section-padding px-4 md:px-8 lg:px-16 text-center">
        <span className="text-xs font-bold tracking-[0.2em] text-brand-text/60 uppercase mb-4 flex items-center justify-center gap-2">
          <span className="w-6 h-px bg-brand-text/30"></span>
          Why Choose Us
          <span className="w-6 h-px bg-brand-text/30"></span>
        </span>
        <h2 className="font-serif text-4xl mb-6">The Best Quality, Just for You</h2>
        <p className="text-brand-text/60 max-w-2xl mx-auto mb-16 text-sm">
          In the spirit of transparency of our craft to you, we source the finest ingredients. It takes three days and a lifetime of practice to master the skills to make a perfect pastry.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <Leaf />, title: "Premium Ingredients", desc: "We use only the finest flour from Bob's Red Mill and Elle & Vire Extra dry butter." },
            { icon: <ChefHat />, title: "Expert Bakers", desc: "Our experienced bakers put their heart and passion into every single baked good." },
            { icon: <Heart />, title: "Made With Love", desc: "Every item is made with care, love and dedication to bring you happiness." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-brand-card p-8 flex items-start gap-4 text-left rounded-sm"
            >
              <div className="w-12 h-12 flex-shrink-0 border border-brand-primary rounded-full flex items-center justify-center text-brand-primary">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2 font-bold">{feature.title}</h3>
                <p className="text-sm text-brand-text/70 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Our Specialties */}
      <section id="menu" className="section-padding px-4 md:px-8 lg:px-16 bg-brand-light text-center">
        <span className="text-xs font-bold tracking-[0.2em] text-brand-text/60 uppercase mb-4 flex items-center justify-center gap-2">
          <span className="w-6 h-px bg-brand-text/30"></span>
          Our Specialties
          <span className="w-6 h-px bg-brand-text/30"></span>
        </span>
        <h2 className="font-serif text-4xl mb-16">Explore Our Delicious Range</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop", title: "Classic Croissants", desc: "Flaky, buttery and irresistible pastries for every mood." },
            { img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=800&auto=format&fit=crop", title: "Artisan Breads", desc: "Freshly baked breads made with traditional techniques." },
            { img: "https://images.unsplash.com/photo-1621236378699-8597faf6a176?q=80&w=800&auto=format&fit=crop", title: "Sweet Pastries", desc: "Perfectly balanced sweetness for your daily treat." },
            { img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop", title: "Cookies & More", desc: "Crispy, chewy and delicious treats for everyone." }
          ].map((cat, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-brand-bg pb-6 rounded-sm overflow-hidden flex flex-col group shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden mb-6 rounded-t-sm">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="px-6 flex flex-col flex-grow items-center">
                <h3 className="font-serif text-xl font-bold mb-3">{cat.title}</h3>
                <p className="text-xs text-brand-text/70 mb-6 flex-grow">{cat.desc}</p>
                <a href="#" className="text-xs font-bold tracking-wider uppercase flex items-center gap-1 hover:text-brand-primary transition">
                  View Items <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. About Our Bakery */}
      <section id="about" className="section-padding px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold tracking-[0.2em] text-brand-text/60 uppercase mb-4 block">About Our Bakery</span>
            <h2 className="font-serif text-4xl mb-6 pr-12">Baked Fresh With Passion Served With Love</h2>
            <div className="w-16 h-px bg-brand-text/30 mb-6"></div>
            <p className="text-brand-text/70 mb-8 max-w-md text-sm leading-relaxed">
              We mix our dough using single-source milk from Greenfields Fresh Milk and Elle & Vire Micro-portions unsalted Gourmet butter 82% FAT. Quality, freshness and your satisfaction are our top priorities. Each day, our work turns out a little different; each day, we learn something new.
            </p>
            <button className="bg-brand-primary text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-brand-primary-hover transition">
              Visit Us Today
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4 h-[400px]">
            <img src="https://images.unsplash.com/photo-1555507036-ab1e4006a110?q=80&w=800&auto=format&fit=crop" alt="Bakery interior" className="w-full h-full object-cover rounded-sm shadow-md" />
            <div className="grid grid-rows-2 gap-4 h-full">
              <img src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=800&auto=format&fit=crop" alt="Pastries" className="w-full h-full object-cover rounded-sm shadow-md" />
              <img src="https://images.unsplash.com/photo-1509365465994-3e5064eb98ce?q=80&w=800&auto=format&fit=crop" alt="Baking process" className="w-full h-full object-cover rounded-sm shadow-md" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Featured Products */}
      <section className="section-padding px-4 md:px-8 lg:px-16 bg-brand-light text-center relative">
        <span className="text-xs font-bold tracking-[0.2em] text-brand-text/60 uppercase mb-4 flex items-center justify-center gap-2">
          <span className="w-6 h-px bg-brand-text/30"></span>
          Featured Products
          <span className="w-6 h-px bg-brand-text/30"></span>
        </span>
        <h2 className="font-serif text-4xl mb-12">Fresh From Our Oven</h2>
        
        <div className="relative max-w-[90rem] mx-auto">
          {/* Mock Carousel Navigation */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:ml-0 bg-white shadow-md p-2 rounded-full text-brand-text hover:text-brand-primary z-10 hidden md:block">
            <ChevronLeft />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:mr-0 bg-white shadow-md p-2 rounded-full text-brand-text hover:text-brand-primary z-10 hidden md:block">
            <ChevronRight />
          </button>

          <div className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x md:px-12">
            {[
              { name: "Butter Croissant", price: "Rp 25.000", img: "https://images.unsplash.com/photo-1555507036-ab1e4006a110?q=80&w=500&auto=format&fit=crop" },
              { name: "Pain au Chocolat", price: "Rp 32.000", img: "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?q=80&w=500&auto=format&fit=crop" },
              { name: "Almond Croissant", price: "Rp 38.000", img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=500&auto=format&fit=crop" },
              { name: "Cinnamon Roll", price: "Rp 28.000", img: "https://images.unsplash.com/photo-1509365465994-3e5064eb98ce?q=80&w=500&auto=format&fit=crop" },
              { name: "Strawberry Tart", price: "Rp 45.000", img: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=500&auto=format&fit=crop" }
            ].map((prod, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-brand-bg rounded-sm overflow-hidden min-w-[240px] md:min-w-[280px] snap-center shadow-sm flex flex-col group"
              >
                <div className="h-48 overflow-hidden p-2">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 text-left">
                  <h4 className="font-serif font-bold text-lg mb-1">{prod.name}</h4>
                  <p className="text-brand-text/60 text-sm mb-4">{prod.price}</p>
                  <button className="w-full border border-brand-border py-2 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-white transition rounded-sm">
                    Add To Cart <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="section-padding px-4 md:px-8 lg:px-16 text-center">
        <span className="text-xs font-bold tracking-[0.2em] text-brand-text/60 uppercase mb-4 flex items-center justify-center gap-2">
          <span className="w-6 h-px bg-brand-text/30"></span>
          What Our Customers Say
          <span className="w-6 h-px bg-brand-text/30"></span>
        </span>
        <h2 className="font-serif text-4xl mb-16">Happy Customers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Emily Johnson", review: "Absolutely love their pastries! Everything is always fresh and delicious. Highly recommended!" },
            { name: "Michael Brown", review: "Best bakery in town! The croissant is so flaky and the cakes are simply amazing." },
            { name: "Sophia Williams", review: "Amazing quality and friendly service. I order pastries for all our office meetings!" }
          ].map((testi, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-brand-card p-8 rounded-sm text-left relative"
            >
              <Quote className="w-8 h-8 text-brand-primary/20 absolute top-6 left-6" />
              <p className="text-sm leading-relaxed mb-6 mt-4 italic relative z-10">"{testi.review}"</p>
              <div className="flex text-yellow-500 gap-1 mb-4">
                {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt={testi.name} />
                </div>
                <span className="text-sm font-bold">{testi.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
          <span className="w-2 h-2 bg-brand-border rounded-full"></span>
          <span className="w-2 h-2 bg-brand-border rounded-full"></span>
        </div>
      </section>

      {/* 8. Footer */}
      <footer id="contact" className="bg-brand-card pt-16 pb-8 px-4 md:px-8 lg:px-16 border-t border-brand-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="flex gap-4">
            <div className="w-10 h-10 flex items-center justify-center border border-brand-text/20 rounded-full flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm mb-2">Visit Our Bakery</h4>
              <p className="text-xs text-brand-text/70 leading-relaxed">
                Jl. SouthCity No.14<br/>Jakarta, Indonesia
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 flex items-center justify-center border border-brand-text/20 rounded-full flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm mb-2">Open Everyday</h4>
              <p className="text-xs text-brand-text/70 leading-relaxed">
                Tuesday - Sunday<br/>07:30 AM - 17:00 PM
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 flex items-center justify-center border border-brand-text/20 rounded-full flex-shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm mb-2">Connect With Us</h4>
              <div className="flex gap-3 mt-2">
                <a href="#" className="w-8 h-8 flex items-center justify-center border border-brand-text/20 rounded-full hover:bg-brand-primary hover:text-white transition hover:border-brand-primary"><Mail className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 flex items-center justify-center border border-brand-text/20 rounded-full hover:bg-brand-primary hover:text-white transition hover:border-brand-primary"><Globe className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 flex items-center justify-center border border-brand-text/20 rounded-full hover:bg-brand-primary hover:text-white transition hover:border-brand-primary"><Link className="w-4 h-4" /></a>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 flex items-center justify-center border border-brand-text/20 rounded-full flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm mb-2">Call Us Now</h4>
              <p className="text-sm font-bold">
                +62 123 4567 8900
              </p>
            </div>
          </div>
          
        </div>
      </footer>

    </div>
  );
}

export default App;
