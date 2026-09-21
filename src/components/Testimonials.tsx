import { motion } from 'motion/react';
import { testimonials } from '../data';
import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-900/20 blur-[120px]"></div>
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full bg-green-900/20 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-emerald-400 uppercase mb-3">Feedback</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">A VOZ DO MAR</h3>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-700" />
              <div className="mb-6 relative z-10">
                <p className="text-gray-300 text-lg italic leading-relaxed">"{testimonial.content}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-zinc-800 pt-6">
                <div className="w-12 h-12 bg-emerald-950 rounded-full flex items-center justify-center text-emerald-400 font-black text-xl border border-emerald-800">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-emerald-400 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
