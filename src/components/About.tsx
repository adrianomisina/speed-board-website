import { Ruler, Waves, Wrench } from 'lucide-react'
import { motion } from 'motion/react'
import shaperImg from '../assets/images/rasta02.png'

export function About() {
  const features = [
    {
      icon: <Waves className="h-6 w-6 text-emerald-400" />,
      title: 'Surfista Profissional',
      description: 'Experiência prática de quem entende o mar e a necessidade de cada tipo de onda.'
    },
    {
      icon: <Ruler className="h-6 w-6 text-emerald-400" />,
      title: 'Design Preciso',
      description:
        'Anos de refinamento em outlines, concaves e bordas para máxima velocidade e controle.'
    },
    {
      icon: <Wrench className="h-6 w-6 text-emerald-400" />,
      title: 'Materiais Premium',
      description:
        'Uso de EPS, Epoxy e Carbono para criar pranchas leves, resistentes e com flexibilidade ideal.'
    }
  ]

  return (
    <section id="about" className="py-24 bg-zinc-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl opacity-20 blur-xl"></div>
              <img
                src={shaperImg}
                alt="Sidnei Oliveira shaping a surfboard"
                className="relative rounded-2xl w-full object-cover shadow-2xl h-[500px]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-emerald-400 uppercase mb-3">
              O Shaper
            </h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6">SIDNEI OLIVEIRA</h3>
            <div className="h-1 w-20 bg-emerald-500 mb-8 rounded-full"></div>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Com mais de 20 anos de dedicação ao surf, Sidnei Oliveira não é apenas um shaper, mas
              um surfista que vivencia cada detalhe do esporte. Essa vivência se traduz em cada
              bloco que ele esculpe na SPD Surfboards.
            </p>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              A busca incessante pela prancha mágica levou Sidnei a dominar a arte de unir design
              fluido com materiais de alta tecnologia, como EPS e Carbono, criando verdadeiros
              foguetes sob medida.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <div className="bg-zinc-900 p-3 rounded-xl w-fit mb-4 border border-zinc-800">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
