import { MessageCircle, Ruler, Scale, X, ZoomIn } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Board } from '../data'

interface BoardCardProps {
  board: Board
  index?: number
}

export function BoardCard({ board, index = 0 }: BoardCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [side, setSide] = useState<'front' | 'back'>('front')
  const hasBackImage = Boolean(board.backImage)
  const displayedImage = side === 'back' && board.backImage ? board.backImage : board.image
  const sideLabel = side === 'front' ? 'Frente' : 'Fundo'

  const whatsappNumber = '5513996178279'
  const whatsappMessage = encodeURIComponent(
    `Olá Sidney! Tenho interesse no modelo ${board.name}. Podemos conversar?`
  )

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] flex flex-col h-full"
      >
        <div
          className="relative h-72 overflow-hidden bg-white cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          {/* Pedestal background effect */}
          <div className="absolute bottom-4 w-3/4 h-8 bg-black/10 rounded-[100%] blur-md transform scale-y-50"></div>

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
            <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 drop-shadow-md" />
          </div>

          {hasBackImage && (
            <div
              className="absolute top-4 left-4 z-30 inline-flex rounded-lg bg-black/75 p-1 text-xs font-bold text-white shadow-lg backdrop-blur-sm"
              onClick={event => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSide('front')}
                aria-pressed={side === 'front'}
                className={`cursor-pointer rounded-md px-2.5 py-1.5 transition-colors ${side === 'front' ? 'bg-emerald-500 text-black' : 'text-white/75 hover:text-white'}`}
              >
                Frente
              </button>
              <button
                type="button"
                onClick={() => setSide('back')}
                aria-pressed={side === 'back'}
                className={`cursor-pointer rounded-md px-2.5 py-1.5 transition-colors ${side === 'back' ? 'bg-emerald-500 text-black' : 'text-white/75 hover:text-white'}`}
              >
                Fundo
              </button>
            </div>
          )}

          <img
            src={displayedImage}
            alt={`${board.name} — ${sideLabel}`}
            className="absolute inset-4 z-20 h-[calc(100%-2rem)] w-[calc(100%-2rem)] object-contain object-center transition-transform duration-700 group-hover:scale-105"
            style={board.imageStyle}
          />

          <div className="absolute bottom-4 left-4 z-30">
            <span className="inline-block px-3 py-1 bg-emerald-500 text-black text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
              {board.type}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col grow">
          <h3 className="text-2xl font-black text-white mb-2">{board.name}</h3>
          <p className="text-gray-400 text-sm mb-6 grow">{board.description}</p>

          <div className="space-y-3 pt-4 border-t border-zinc-800">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div>
                <span className="text-[10px] text-gray-500 uppercase font-bold block">Tamanho</span>
                <span className="text-sm text-gray-300 font-medium">{board.dimensions.length}</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 uppercase font-bold block">Largura</span>
                <span className="text-sm text-gray-300 font-medium">{board.dimensions.width}</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 uppercase font-bold block">
                  Espessura
                </span>
                <span className="text-sm text-gray-300 font-medium">
                  {board.dimensions.thickness}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 uppercase font-bold block">Volume</span>
                <span className="text-sm text-gray-300 font-medium">{board.dimensions.volume}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-zinc-800/50">
              <Ruler className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-gray-500 uppercase font-bold block">Nível</span>
                <span className="text-sm text-gray-300 font-medium">
                  {board.suitableExperience.join(' • ')}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Scale className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-gray-500 uppercase font-bold block">Peso</span>
                <span className="text-sm text-gray-300 font-medium">
                  {board.suitableWeight.join(' • ')}
                </span>
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-emerald-500/25"
          >
            <MessageCircle size={20} />
            Encomendar via WhatsApp
          </a>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              {hasBackImage && (
                <div
                  className="absolute top-4 left-4 z-10 inline-flex rounded-lg bg-black/75 p-1 text-sm font-bold text-white shadow-lg backdrop-blur-sm"
                  onClick={event => event.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setSide('front')}
                    aria-pressed={side === 'front'}
                    className={`cursor-pointer rounded-md px-3 py-2 transition-colors ${side === 'front' ? 'bg-emerald-500 text-black' : 'text-white/75 hover:text-white'}`}
                  >
                    Frente
                  </button>
                  <button
                    type="button"
                    onClick={() => setSide('back')}
                    aria-pressed={side === 'back'}
                    className={`cursor-pointer rounded-md px-3 py-2 transition-colors ${side === 'back' ? 'bg-emerald-500 text-black' : 'text-white/75 hover:text-white'}`}
                  >
                    Fundo
                  </button>
                </div>
              )}
              <img
                src={displayedImage}
                alt={`${board.name} — ${sideLabel}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                style={board.imageStyle}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
