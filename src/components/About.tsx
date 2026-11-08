import { Ruler, Waves, Wrench } from 'lucide-react'
import { motion } from 'motion/react'
import shaperImg from '../assets/images/rasta-hero1.jpeg'

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-sm font-bold tracking-widest text-emerald-400 uppercase mb-3">
            Fundador &amp; Shaper
          </h2>
          <h3 className="text-4xl md:text-6xl font-black">SIDNEI OLIVEIRA</h3>
          <p className="mt-3 text-xl md:text-2xl text-gray-300">
            Fundador e Shaper da Speed Surfboards
          </p>
          <div className="h-1 w-20 bg-emerald-500 mt-6 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-24"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-emerald-500 to-green-600 rounded-2xl opacity-20 blur-xl"></div>
              <img
                src={shaperImg}
                alt="Sidnei Oliveira shaping a surfboard"
                className="relative rounded-2xl w-full object-cover shadow-2xl h-105 sm:h-130 lg:h-155 brightness-75"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-zinc-950/85 px-5 py-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Desde 2016</p>
                <p className="mt-1 font-bold text-white">Construindo pranchas com identidade</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed mb-10">
              <p>
                A trajetória de Sidnei no universo do surf começou aos 15 anos, quando deu seus
                primeiros passos na fabricação de pranchas, inicialmente realizando pequenos
                reparos. Com dedicação e interesse pelo ofício, evoluiu profissionalmente, passando
                a trabalhar como laminador e aprofundando seus conhecimentos em todas as etapas do
                processo de fabricação.
              </p>
              <p>
                Ao longo de sua carreira, teve a oportunidade de trabalhar em diferentes fábricas
                pelo Brasil e adquirir experiência ao lado de grandes nomes da indústria, como os
                renomados shapers <strong className="font-semibold text-white">Daniel Freedman, Beto Santos, David Santos e Luiz Fraga</strong>. Essa vivência proporcionou uma
                sólida formação técnica, ampliou sua visão sobre o desenvolvimento de pranchas e
                contribuiu para o aprimoramento de seu trabalho.
              </p>
              <p>
                Em 2016, após anos de experiência e aprendizado, Sidnei decidiu transformar sua
                trajetória em um projeto próprio, dando origem à <strong className="font-semibold text-white">Speed Surfboards</strong>, marca que representa sua identidade,
                conhecimento e paixão pela fabricação de pranchas de surf.
              </p>
              <p>
                Desde então, seu trabalho é marcado pela busca constante por qualidade, desempenho
                e evolução, unindo experiência prática, conhecimento técnico e dedicação ao
                desenvolvimento de pranchas que atendam às necessidades dos surfistas.
              </p>
              <p>
                Mais do que uma marca, a Speed Surfboards representa uma história construída ao
                longo de décadas, moldada pelo contato direto com a indústria do surf e pela paixão
                de quem dedicou sua vida à arte de transformar blocos de espuma em pranchas prontas
                para encontrar as ondas.
              </p>
            </div>

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
