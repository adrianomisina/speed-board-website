import { Search, X } from 'lucide-react'
import { motion } from 'motion/react'
import { FormEvent, useEffect, useState } from 'react'
import { Board, boardsData, ExperienceLevel } from '../data'
import { BoardCard } from './BoardCard'

type VolumeReference = {
  weight: number
  beginner: number
  intermediateBeginner: number
  intermediate: number
  advancedIntermediate: number
  advanced: number
}

const volumeReference: VolumeReference[] = [
  { weight: 45, advanced: 18.5, advancedIntermediate: 19.4, intermediate: 23.1, intermediateBeginner: 27.7, beginner: 33.2 },
  { weight: 50, advanced: 19.5, advancedIntermediate: 20.5, intermediate: 24.4, intermediateBeginner: 29.3, beginner: 35.1 },
  { weight: 55, advanced: 20.9, advancedIntermediate: 21.9, intermediate: 26.1, intermediateBeginner: 31.4, beginner: 37.6 },
  { weight: 60, advanced: 21.6, advancedIntermediate: 22.7, intermediate: 27, intermediateBeginner: 32.4, beginner: 38.9 },
  { weight: 65, advanced: 22.8, advancedIntermediate: 23.9, intermediate: 28.4, intermediateBeginner: 34.1, beginner: 41 },
  { weight: 70, advanced: 24.5, advancedIntermediate: 25.7, intermediate: 30.6, intermediateBeginner: 36.8, beginner: 44.1 },
  { weight: 75, advanced: 26.3, advancedIntermediate: 27.6, intermediate: 32.8, intermediateBeginner: 39.4, beginner: 47.3 },
  { weight: 80, advanced: 28, advancedIntermediate: 29.4, intermediate: 35, intermediateBeginner: 42, beginner: 50.4 },
  { weight: 85, advanced: 29.8, advancedIntermediate: 31.2, intermediate: 37.2, intermediateBeginner: 44.6, beginner: 53.6 },
  { weight: 90, advanced: 31.5, advancedIntermediate: 33.1, intermediate: 39.4, intermediateBeginner: 47.3, beginner: 56.7 },
  { weight: 95, advanced: 33.3, advancedIntermediate: 34.9, intermediate: 41.6, intermediateBeginner: 49.9, beginner: 59.9 },
  { weight: 100, advanced: 36, advancedIntermediate: 37.8, intermediate: 45, intermediateBeginner: 54, beginner: 64.8 },
  { weight: 105, advanced: 38.9, advancedIntermediate: 40.8, intermediate: 48.6, intermediateBeginner: 58.3, beginner: 69.9 },
  { weight: 110, advanced: 41.8, advancedIntermediate: 43.9, intermediate: 52.3, intermediateBeginner: 62.7, beginner: 75.2 }
]

function getRecommendedVolume(weight: number, experience: ExperienceLevel) {
  const volumeKey = {
    Iniciante: 'beginner',
    Intermediário: 'intermediate',
    Avançado: 'advanced'
  } as const
  const key = volumeKey[experience]
  return volumeReference.find(row => row.weight === weight)?.[key]
}

function getVolumeDistance(board: Board, volume: number) {
  const [minimum, maximum] = board.dimensions.volume.match(/\d+(?:\.\d+)?/g)?.map(Number) ?? []
  if (minimum === undefined || maximum === undefined) return Number.POSITIVE_INFINITY
  if (volume < minimum) return minimum - volume
  if (volume > maximum) return volume - maximum
  return 0
}

export function BoardFinder() {
  const [experience, setExperience] = useState<ExperienceLevel | ''>('')
  const [weight, setWeight] = useState('')
  const [results, setResults] = useState<Board[] | null>(null)
  const [recommendedVolume, setRecommendedVolume] = useState<number | null>(null)
  const [showingClosestBoards, setShowingClosestBoards] = useState(false)
  const [isVolumeTableOpen, setIsVolumeTableOpen] = useState(false)

  useEffect(() => {
    if (!isVolumeTableOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsVolumeTableOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isVolumeTableOpen])

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!experience || !weight) return

    const requestedVolume = getRecommendedVolume(Number(weight), experience)
    if (requestedVolume === undefined) return
    const rankedBoards = boardsData
      .filter(board => board.suitableExperience.includes(experience))
      .map(board => ({ board, distance: getVolumeDistance(board, requestedVolume) }))
      .filter(result => Number.isFinite(result.distance))
      .sort((first, second) => first.distance - second.distance)
    const matchingBoards = rankedBoards.filter(result => result.distance === 0)
    const selectedBoards = matchingBoards.length ? matchingBoards : rankedBoards.slice(0, 3)

    setRecommendedVolume(requestedVolume)
    setShowingClosestBoards(matchingBoards.length === 0)
    setResults(selectedBoards.map(result => result.board))
  }

  return (
    <section id="finder" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">ENCONTRE SUA PRANCHA</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Selecione seu nível e o volume desejado para encontrar modelos adequados à sua evolução.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="max-w-4xl mx-auto bg-zinc-900 rounded-2xl p-6 md:p-10 border border-zinc-800 shadow-2xl mb-16"
        >
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
            <div className="flex min-w-0 flex-col">
              <label
                htmlFor="surfer-weight"
                className="text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide"
              >
                Seu peso (kg)
              </label>
              <input
                id="surfer-weight"
                type="number"
                min="45"
                max="110"
                step="5"
                required
                placeholder="Ex.: 70 kg"
                className="bg-zinc-950 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                value={weight}
                onChange={e => setWeight(e.target.value)}
              />
              <span className="mt-2 text-xs text-gray-500">Pesos de 45 a 110 kg, em intervalos de 5 kg.</span>
            </div>

            <div className="flex min-w-0 flex-col">
              <label
                htmlFor="surf-experience"
                className="text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide"
              >
                Nível de Surf
              </label>
              <select
                id="surf-experience"
                required
                className="bg-zinc-950 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 appearance-none"
                value={experience}
                onChange={e => setExperience(e.target.value as ExperienceLevel)}
              >
                <option value="">Selecione seu nível</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-0 flex h-12.5 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-emerald-500 px-6 py-3 font-bold text-black transition-colors hover:bg-emerald-400 md:mt-7"
            >
              <Search size={20} />
              Buscar Modelos
            </button>
          </div>
          <button
            type="button"
            onClick={() => setIsVolumeTableOpen(true)}
            className="mt-5 text-sm font-semibold text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
          >
            Saiba mais sobre a litragem de sua nave
          </button>
        </form>

        {isVolumeTableOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVolumeTableOpen(false)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              onClick={event => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="volume-table-title"
              className="flex max-h-[85svh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-white shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 border-b border-zinc-800 p-5 sm:p-6">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                    Guia de litragem
                  </p>
                  <h3 id="volume-table-title" className="text-xl font-bold sm:text-2xl">
                    Volume recomendado por peso
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Referência em litros conforme o peso e o nível de surf.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsVolumeTableOpen(false)}
                  aria-label="Fechar tabela de litragem"
                  className="shrink-0 rounded-lg p-2 text-gray-400 transition-colors hover:bg-zinc-800 hover:text-white"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="overflow-auto p-4 sm:p-6">
                <div className="overflow-hidden rounded-xl border border-zinc-800">
                  <table className="w-full min-w-[760px] border-collapse text-center text-sm text-gray-200">
                    <thead className="sticky top-0 bg-zinc-900 text-xs uppercase tracking-wide text-gray-300">
                      <tr>
                        {[
                          'Peso (kg)',
                          'Avançado (L)',
                          'Avançado / Intermediário (L)',
                          'Intermediário (L)',
                          'Intermediário / Iniciante (L)',
                          'Iniciante (L)'
                        ].map(heading => (
                          <th key={heading} scope="col" className="border-b border-zinc-800 px-3 py-3">
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {volumeReference.map((row, index) => (
                        <tr
                          key={row.weight}
                          className={index % 2 === 0 ? 'bg-zinc-950' : 'bg-zinc-900/60'}
                        >
                          <th scope="row" className="border-t border-zinc-800 px-3 py-2 font-semibold text-white">
                            {row.weight}
                          </th>
                          <td className="border-t border-zinc-800 px-3 py-2">{row.advanced.toFixed(1)}</td>
                          <td className="border-t border-zinc-800 px-3 py-2">{row.advancedIntermediate.toFixed(1)}</td>
                          <td className="border-t border-zinc-800 px-3 py-2">{row.intermediate.toFixed(1)}</td>
                          <td className="border-t border-zinc-800 px-3 py-2">{row.intermediateBeginner.toFixed(1)}</td>
                          <td className="border-t border-zinc-800 px-3 py-2">{row.beginner.toFixed(1)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-xs text-gray-500">
                  Valores em litros. Deslize horizontalmente para ver todas as faixas de nível.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            {recommendedVolume !== null && (
              <div className="mb-6 space-y-2">
                <p className="text-emerald-400 font-bold">
                  Volume de referência: {recommendedVolume.toFixed(1)} L para {weight} kg, nível{' '}
                  {experience.toLowerCase()}.
                </p>
                {showingClosestBoards && (
                  <p className="text-gray-400 text-sm">
                    Não há um modelo desse nível com esse volume. Estas são as opções disponíveis
                    mais próximas da referência.
                  </p>
                )}
              </div>
            )}
            <h3 className="text-2xl font-bold mb-8 border-b border-zinc-800 pb-4">
              Modelos recomendados ({results.length})
            </h3>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {results.map((board, index) => (
                  <BoardCard key={board.id} board={board} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-zinc-900 rounded-xl border border-zinc-800">
                <p className="text-gray-400 text-lg">
                  Nenhum modelo específico encontrado para este filtro.
                </p>
                <p
                  className="text-emerald-400 mt-2 font-bold cursor-pointer"
                  onClick={() => {
                    setExperience('')
                    setWeight('')
                    setRecommendedVolume(null)
                    setShowingClosestBoards(false)
                    setResults(null)
                  }}
                >
                  Limpar filtros
                </p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
