import { ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import heroImage1 from '../assets/images/rasta-hero1.jpeg'
import heroImage2 from '../assets/images/rasta-hero2.jpeg'
import heroImage3 from '../assets/images/rasta-hero3.jpeg'
import heroImage4 from '../assets/images/rasta-hero4.jpeg'

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4]

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide(current => (current + 1) % heroImages.length)
    }, 3000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="relative pt-20 pb-20 md:pb-32 flex content-center items-center justify-center min-h-[80svh] md:min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[activeSlide]})` }}
          />
        </AnimatePresence>
        <span className="absolute inset-0 bg-black/50"></span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10"></div>
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
                Moldadas para{' '}
                <span className="text-emerald-400 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                  a velocidade
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Há mais de 20 anos, Sidnei Oliveira transforma blocos em pranchas de alta
                performance para você ganhar velocidade, soltar as manobras e aproveitar cada onda
                ao máximo.
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
  )
}
