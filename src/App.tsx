import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Youtube, 
  Phone, 
  Mail, 
  MapPin, 
  Search,
  ChevronRight,
  Heart
} from 'lucide-react';

// Types
interface Category {
  title: string;
  image: string;
}

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  category: string;
}

// Data
const categories: Category[] = [
  { title: 'Bridal Collection', image: 'https://picsum.photos/seed/bridal/1000/1333' },
  { title: 'Lehengas', image: 'https://picsum.photos/seed/lehenga/1000/1333' },
  { title: 'Gowns', image: 'https://picsum.photos/seed/gown/1000/1333' },
  { title: 'Salwars', image: 'https://picsum.photos/seed/salwar/1000/1333' },
  { title: 'Sharara', image: 'https://picsum.photos/seed/sharara/1000/1333' },
  { title: 'Anarkali', image: 'https://picsum.photos/seed/anarkali/1000/1333' },
];

const featuredProducts: Product[] = [
  { 
    id: '1', 
    title: 'Emerald Green Bridal Lehengas', 
    price: '₹24,999', 
    image: 'https://picsum.photos/seed/emerald/800/1066', 
    category: 'Lehenga' 
  },
  { 
    id: '2', 
    title: 'Rose Gold Sequin Gown', 
    price: '₹14,499', 
    image: 'https://picsum.photos/seed/rosegold/800/1066', 
    category: 'Gown' 
  },
  { 
    id: '3', 
    title: 'Royal Ivory Anarkali', 
    price: '₹8,999', 
    image: 'https://picsum.photos/seed/ivory/800/1066', 
    category: 'Anarkali' 
  },
  { 
    id: '4', 
    title: 'Sky Blue Sharara Set', 
    price: '₹11,299', 
    image: 'https://picsum.photos/seed/skyblue/800/1066', 
    category: 'Sharara' 
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Promo Bar */}
      <div className="bg-primary text-white text-center py-2 text-[10px] sm:text-xs tracking-widest uppercase font-medium">
        Free Shipping on Orders Above ₹7500 • Shop the New Collection
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-6'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button 
            className="lg:hidden p-2 hover:bg-secondary rounded-full transition-colors"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>

          <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#collections" className="hover:text-primary transition-colors">Collections</a>
            <a href="#featured" className="hover:text-primary transition-colors">Featured</a>
          </nav>

          <div className="text-center absolute left-1/2 -translate-x-1/2">
            <h1 className="text-2xl sm:text-3xl font-serif tracking-tight text-dark font-bold">
              SIYA <span className="text-primary italic">Bridal</span>
            </h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-1 hidden sm:block">Studio</p>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 hover:bg-secondary rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0 right-0 bg-primary text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-white z-[70] p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-xl font-serif font-bold">SIYA</h2>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="space-y-6">
                {['Home', 'New Arrivals', 'Bridal Collection', 'Lehengas', 'Salwars', 'Sharara', 'Gowns', 'About Us', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href="#" 
                    className="block text-lg font-serif hover:text-primary transition-colors border-b border-gray-100 pb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
              <div className="absolute bottom-8 left-8 right-8 flex justify-center space-x-6 text-gray-400">
                <Instagram className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                <Facebook className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                <Youtube className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] sm:h-[80vh] overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <img 
              src="https://picsum.photos/seed/indo/2000/1000" 
              alt="Indo-Western Collection" 
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/5" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent lg:hidden" />
          </motion.div>
          
          <div className="absolute inset-0 flex items-center justify-start container mx-auto px-4">
            <div className="max-w-2xl lg:pl-12 hidden lg:block">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-dark text-xs sm:text-sm uppercase tracking-[0.4em] font-medium block mb-4"
              >
                Indo-Western Collection
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-4xl sm:text-6xl text-dark font-serif italic leading-tight mb-8"
              >
                Elegance where <br />
                <span className="font-medium not-italic uppercase text-primary">Two Worlds</span> find balance
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <button className="bg-dark text-white px-10 py-4 text-xs uppercase tracking-widest font-medium hover:bg-primary transition-all shadow-xl">
                  Explore More
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section id="collections" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h3 className="text-3xl sm:text-4xl font-serif mb-2">Shop by Category</h3>
                <p className="text-sm text-gray-500 max-w-md">Discover our curated selection of ethnic wear for every special moment.</p>
              </div>
              <a href="#" className="hidden md:flex items-center text-xs uppercase tracking-widest font-bold text-primary group">
                View All Categories <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((cat, idx) => (
                <motion.div 
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-4 relative shadow-md">
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/0 transition-colors" />
                  </div>
                  <h4 className="text-center font-serif text-lg group-hover:text-primary transition-colors">{cat.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="aspect-square rounded-3xl overflow-hidden shadow-2xl z-10 relative"
                >
                  <img 
                    src="https://picsum.photos/seed/craft/1000/1000" 
                    alt="Our Craftsmanship" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary rounded-full -z-10 opacity-50 blur-3xl" />
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute -top-6 -left-6 bg-primary w-24 h-24 rounded-full flex items-center justify-center text-white"
                >
                  <span className="text-xl font-serif">Est. 2014</span>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-primary text-xs uppercase tracking-widest font-bold block mb-4">Because You're Special</span>
                <h3 className="text-4xl sm:text-5xl font-serif mb-8 leading-tight">Crafting Your Perfect Wedding Memories</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Siya Bridal Studio in Sowcarpet, Chennai is your one-stop destination for all stylish outfits. Look stunning at all times in our latest trends and hottest styles for any occasion.
                </p>
                <p className="text-gray-600 mb-10 leading-relaxed">
                  We are known for our quality and stylish creations for over a decade. Our Wedding Collection is specially curated for the bride-to-be, offering exclusive luxury wedding wear at unbelievable prices.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="text-3xl font-serif text-primary mb-1">10k+</h4>
                    <p className="text-xs uppercase tracking-widest text-gray-400">Happy Brides</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-serif text-primary mb-1">15+</h4>
                    <p className="text-xs uppercase tracking-widest text-gray-400">Award Wins</p>
                  </div>
                </div>
                <button className="border-2 border-dark text-dark px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-dark hover:text-white transition-all">
                  Read Our Story
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="featured" className="py-24 bg-dark text-white">
          <div className="container mx-auto px-4 text-center mb-16">
            <span className="text-primary text-xs uppercase tracking-widest font-bold block mb-4">Curated Pieces</span>
            <h3 className="text-4xl sm:text-5xl font-serif mb-4">The Featured Collection</h3>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, idx) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 shadow-xl">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-dark px-6 py-3 text-[10px] uppercase tracking-widest font-bold rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-2xl">
                      Quick Shop
                    </button>
                    <button className="absolute top-6 right-6 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 block">{product.category}</span>
                    <h4 className="text-lg font-serif mb-2 group-hover:text-primary transition-colors">{product.title}</h4>
                    <p className="text-primary font-medium">{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-20">
              <button className="bg-primary text-white px-12 py-5 text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-dark transition-all shadow-xl">
                Shop all Featured Pieces
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials (Simple) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="mb-12">
              <div className="flex justify-center mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-2xl sm:text-3xl font-serif italic text-dark leading-relaxed mb-8">
                "I found my dream lehenga at Siya Bridal Studio. The attention to detail and the quality of the fabric is unmatched. Truly felt like a princess on my big day!"
              </p>
              <h5 className="text-xs uppercase tracking-widest font-bold">— Ananya Sharma, Chennai</h5>
            </div>
          </div>
        </section>

        {/* Contact Strip */}
        <section className="py-12 border-y border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 bg-secondary rounded-full">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">Call Us</p>
                  <p className="text-sm font-medium">+91 44 48588343</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 bg-secondary rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">Visit Studio</p>
                  <p className="text-sm font-medium">Sowcarpet, Chennai</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 bg-secondary rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">Email Us</p>
                  <p className="text-sm font-medium">poshboutique07@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/40 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 lg:col-span-1">
              <h2 className="text-2xl font-serif font-bold mb-6">SIYA</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Your one-stop destination for luxury wedding wear and stylish ethnic outfits. Look stunning at all times with our curated trend-forward designs.
              </p>
              <div className="flex space-x-5">
                <Instagram className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                <Facebook className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                <Youtube className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
              </div>
            </div>

            <div>
              <h5 className="text-[10px] uppercase tracking-widest font-bold mb-8">Shop Selection</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-primary transition-colors">Bridal Collection</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Lehengas</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Salwars</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Gowns</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[10px] uppercase tracking-widest font-bold mb-8">Information</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Return Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[10px] uppercase tracking-widest font-bold mb-8">Newsletter</h5>
              <p className="text-sm text-gray-500 mb-6">Join our mailing list for updates on new arrivals and exclusive offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-white border-none py-3 px-4 text-xs w-full focus:ring-1 focus:ring-primary outline-none"
                />
                <button className="bg-dark text-white px-6 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-primary transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 md:mb-0">
              © 2024 Siya Bridal Studio. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-[10px] uppercase tracking-widest text-gray-400">Payment Modes:</span>
              <div className="flex space-x-3 grayscale opacity-50">
                {/* Simplified payment icons */}
                <div className="w-8 h-5 bg-gray-300 rounded" />
                <div className="w-8 h-5 bg-gray-300 rounded" />
                <div className="w-8 h-5 bg-gray-300 rounded" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-40">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open('https://wa.me/917200005380', '_blank')}
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors"
        >
          <Phone className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}
