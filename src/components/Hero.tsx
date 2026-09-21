import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/images/rasta.png';

export function Hero() {
  return (
    <div className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-screen">
      <div 
        className="absolute top-0 w-full h-full bg-cover"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: '65% 20%',
        }}
      >
        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-8/12 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-white font-black text-5xl md:text-7xl uppercase tracking-tight">
                Crafted for <span className="text-emerald-400 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">Speed</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Pranchas de alta performance desenvolvidas por Sidney Rasta. 
                Mais de 20 anos de experiência transformando blocos em foguetes para o mar.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#portfolio"
                  className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                >
                  Ver Portfólio <ArrowRight size={20} />
                </a>
                <a 
                  href="#finder"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center"
                >
                  Encontre sua Prancha
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
