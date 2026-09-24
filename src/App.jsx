import React from 'react';
import { ShoppingBag, ArrowRight, Instagram, MapPin, Phone, Mail, ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function App() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-brown">
      
      {/* 1. Header & Hero Wrapper (Dark Brown Background) */}
      <div className="bg-brand-brown px-4 py-4 md:px-8 md:py-6 relative z-0">
        
        {/* Navbar */}
        <nav className="max-w-7xl mx-auto flex items-center justify-between z-50 relative mb-8">
          <div className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-wider uppercase text-white/80">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#menu" className="hover:text-white transition">Menu</a>
          </div>

          <div className="flex-1 flex justify-center lg:justify-center">
            <h1 className="font-logo text-4xl font-bold tracking-tight text-white lowercase">gandaria</h1>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-wider uppercase text-white/80">
            <a href="#catering" className="hover:text-white transition">Catering</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          <div className="flex items-center gap-4 lg:absolute lg:right-0">
             <button className="text-white hover:text-brand-red transition">
              <ShoppingBag className="w-6 h-6" />
            </button>
          </div>
        </nav>

        {/* Hero Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto bg-brand-bg rounded-[2.5rem] md:rounded-[4rem] relative overflow-hidden text-center pt-16 pb-20 px-4 md:px-12 shadow-2xl"
          style={{ 
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%234a3122\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-10 left-[20%] text-brand-brown/20 rotate-[-15deg]">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg>
          </div>
          <div className="absolute top-20 right-[25%] text-brand-brown/20 rotate-[15deg]">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>
          </div>
          
          <h2 className="font-display text-6xl md:text-[7rem] lg:text-[8rem] font-bold text-brand-brown leading-[0.9] tracking-tight uppercase relative z-10">
            Freshly <span className="text-brand-red">Baked</span><br/>
            Goods Every Day
          </h2>
          
          <div className="relative mt-8 md:mt-2 mb-8 md:mb-12 flex justify-center z-20">
            <div className="absolute -top-6 md:-top-10 right-[15%] md:right-[30%] bg-brand-yellow text-brand-brown text-xs font-black px-3 py-1 rounded-full rotate-[12deg] border-2 border-brand-brown">
              HOMEMADE
            </div>
            <img 
              src="https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?q=80&w=600&auto=format&fit=crop" 
              alt="Croissant with berries" 
              className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-[3rem] shadow-2xl border-4 border-white rotate-[-2deg]"
            />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto px-4 gap-6">
            <p className="text-sm font-bold text-brand-brown/70 max-w-[200px] text-left leading-relaxed">
              Our bakery is built on the joy of sharing freshly baked food every cake, and pastry.
            </p>
            <div className="flex flex-col items-end gap-3">
               <span className="text-xs font-black tracking-widest text-brand-brown/50">FRESH + TASTY + SWEET</span>
               <a href="#menu" className="bg-brand-brown text-brand-bg px-8 py-3 rounded-full text-xs font-black tracking-widest hover:bg-brand-brown-light transition flex items-center gap-2 uppercase">
                 Shop Now <ArrowRight className="w-4 h-4" />
               </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 2. Categories & Menu */}
      <section id="menu" className="section-padding px-4 md:px-8 lg:px-16 text-center max-w-7xl mx-auto">
        <div className="mb-16 relative">
          <span className="bg-brand-red text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase absolute -top-4 left-1/2 -translate-x-1/2">Featured</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mt-6">
            A Little Taste Of<br/>Everything We Bake
          </h2>
        </div>

        {/* Category Icons */}
        <div className="flex justify-center gap-8 md:gap-16 mb-20">
          {[
            { name: "PASTRIES", color: "bg-brand-tan", img: "https://images.unsplash.com/photo-1555507036-ab1e4006a110?q=80&w=200&auto=format&fit=crop" },
            { name: "BREADS", color: "bg-brand-red", img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=200&auto=format&fit=crop", textClass: "text-brand-red" },
            { name: "SWEETS", color: "bg-brand-yellow", img: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=200&auto=format&fit=crop" }
          ].map((cat, i) => (
            <div key={i} className="flex flex-col items-center gap-4 cursor-pointer group">
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] md:rounded-[2rem] p-1 ${cat.color} group-hover:-translate-y-2 transition-transform duration-300 shadow-md`}>
                 <img src={cat.img} alt={cat.name} className="w-full h-full object-cover rounded-[1.2rem] md:rounded-[1.7rem]" />
              </div>
              <span className={`text-xs font-black tracking-widest uppercase ${cat.textClass || 'text-brand-brown/70'}`}>{cat.name}</span>
            </div>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { cat: "Bread", name: "Sourdough Boule", price: "Rp 35.000", img: "https://images.unsplash.com/photo-1589367920969-ab8e050eb0e9?q=80&w=500&auto=format&fit=crop" },
            { cat: "Bread", name: "Seeded Whole Grain", price: "Rp 40.000", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=500&auto=format&fit=crop" },
            { cat: "Bread", name: "Rosemary Focaccia", price: "Rp 30.000", img: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=500&auto=format&fit=crop" }
          ].map((prod, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-brand-tan rounded-[2rem] p-6 text-left flex flex-col group hover:shadow-xl transition-shadow"
            >
              <div className="h-48 md:h-56 mb-6 rounded-[1.5rem] overflow-hidden bg-white/50 flex items-center justify-center p-4">
                 <img src={prod.img} alt={prod.name} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 shadow-md" />
              </div>
              <span className="text-[10px] font-black uppercase text-brand-brown/50 tracking-widest mb-1">{prod.cat}</span>
              <h3 className="font-display font-bold text-xl mb-4 leading-tight">{prod.name}</h3>
              <div className="mt-auto flex justify-between items-center pt-4 border-t border-brand-brown/10">
                <span className="font-bold">{prod.price}</span>
                <button className="bg-brand-brown text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-brand-brown-light transition shadow-md">
                   +
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="bg-brand-brown text-white px-8 py-3 rounded-full text-xs font-black tracking-widest hover:bg-brand-brown-light transition uppercase shadow-md">
          View All Menu &rarr;
        </button>
      </section>

      {/* 3. About Section (Red Block) */}
      <section id="about" className="px-4 md:px-8 lg:px-16 mb-24">
        <div className="max-w-6xl mx-auto red-stripes rounded-[3rem] text-white p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="font-display text-5xl md:text-6xl font-bold uppercase leading-[1.1] mb-8">
                We believe baking is about bringing people together with every loaf we make.
              </h2>
              <a href="#" className="inline-block border-2 border-white px-6 py-2 rounded-full text-xs font-black tracking-widest hover:bg-white hover:text-brand-red transition uppercase">
                Read Our Story
              </a>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="h-64 rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-lg">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" alt="Baker" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm font-semibold bg-brand-brown p-6 rounded-[2rem] shadow-lg leading-relaxed">
                Gandaria Bakehouse began with a simple love for honest baking and beautiful ingredients. Every loaf, cake, and pastry is carefully made in our kitchen, bringing a little joy to your everyday moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Catering / Quality Section */}
      <section id="catering" className="section-padding px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 relative">
             <div className="bg-brand-tan w-full h-[500px] rounded-[3rem] absolute top-4 left-4 -z-10"></div>
             <img src="https://images.unsplash.com/photo-1555507036-ab1e4006a110?q=80&w=800&auto=format&fit=crop" alt="Fresh baked" className="w-full h-[500px] object-cover rounded-[3rem] shadow-xl" />
             <div className="absolute -bottom-6 -right-6 bg-brand-yellow p-6 rounded-[2rem] shadow-lg border-2 border-brand-brown rotate-3 max-w-[200px]">
               <div className="flex gap-1 text-brand-brown mb-2">
                 <Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" />
               </div>
               <p className="text-xs font-bold leading-tight">"The bread is incredible, crispy on the outside, soft in the middle."</p>
             </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="bg-brand-red text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase mb-6 inline-block">Quality Focus</span>
            <h2 className="font-display text-5xl font-bold uppercase leading-tight mb-8">
              Freshly Made With Care<br/>Thoughtfully Baked
            </h2>
            
            <div className="space-y-6">
              {[
                { title: "Made Fresh Daily", desc: "Baked every morning for maximum freshness." },
                { title: "Quality Ingredients", desc: "Using Bob's Red Mill & Elle & Vire butter." },
                { title: "Corporate Catering", desc: "Perfect pastries for your office events and meetings." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 border-b border-brand-brown/10 pb-6">
                   <div className="w-2 h-2 rounded-full bg-brand-red mt-2"></div>
                   <div>
                     <h4 className="font-display text-xl font-bold mb-1 uppercase">{item.title}</h4>
                     <p className="text-sm font-semibold text-brand-brown/70">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
            
            <a href="mailto:hello@gandariabakehouse.com" className="mt-8 inline-block bg-brand-brown text-white px-8 py-3 rounded-full text-xs font-black tracking-widest hover:bg-brand-brown-light transition uppercase shadow-md">
              Enquire Catering
            </a>
          </div>

        </div>
      </section>
      
      {/* 5. Footer */}
      <footer id="contact" className="bg-brand-brown text-brand-bg rounded-t-[3rem] mt-12 pt-16 pb-8 px-4 md:px-8 lg:px-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
             <div>
               <h2 className="font-display text-6xl md:text-7xl font-bold uppercase leading-[0.9] text-brand-yellow mb-8">
                 Visit The<br/>Nearest Store
               </h2>
               <div className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl max-w-sm">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Gandaria Bakehouse</h4>
                    <p className="text-xs text-white/60">Jl. SouthCity No.14, Jakarta</p>
                    <p className="text-xs text-white/60 mt-1">Tue - Sun | 07:30 - 17:00</p>
                  </div>
               </div>
             </div>
             
             <div className="flex flex-col justify-end">
               <div className="bg-brand-bg text-brand-brown p-8 rounded-[2rem] shadow-xl">
                 <h3 className="font-display text-2xl font-bold uppercase mb-4">Subscribe Newsletter</h3>
                 <div className="flex gap-2">
                   <input type="email" placeholder="Email address..." className="bg-white border border-brand-brown/20 rounded-full px-4 py-3 flex-1 text-sm outline-none focus:border-brand-brown" />
                   <button className="bg-brand-red text-white w-12 rounded-full flex items-center justify-center hover:bg-brand-red-light transition">
                     <ArrowRight className="w-5 h-5" />
                   </button>
                 </div>
               </div>
             </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-4">
             <h1 className="font-logo text-3xl font-bold tracking-tight text-white lowercase">gandaria</h1>
             <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-white/60">
               <a href="#" className="hover:text-brand-yellow transition">Menu</a>
               <a href="#" className="hover:text-brand-yellow transition">Story</a>
               <a href="#" className="hover:text-brand-yellow transition">Catering</a>
             </div>
             <div className="flex gap-3">
               <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-brown transition"><Instagram className="w-4 h-4" /></a>
               <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-brown transition"><Mail className="w-4 h-4" /></a>
             </div>
          </div>
          
        </div>
      </footer>

    </div>
  );
}

export default App;
