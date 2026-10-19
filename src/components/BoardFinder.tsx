import { Search, X } from 'lucide-react'
import { motion } from 'motion/react'
import { FormEvent, useEffect, useState } from 'react'
import { Board, boardsData, ExperienceLevel } from '../data'
import { BoardCard } from './BoardCard'

type VolumeReference = {
  weight: number
  beginner: number
  intermediate: number
  advanced: number
}

const volumeReference: VolumeReference[] = [
  { weight: 36, beginner: 17.49, intermediate: 16.37, advanced: 15.9 },
  { weight: 38, beginner: 18.42, intermediate: 17.25, advanced: 16.75 },
  { weight: 40, beginner: 18.7, intermediate: 17.5, advanced: 17 },
  { weight: 43, beginner: 19.47, intermediate: 18.23, advanced: 17.7 },
  { weight: 45, beginner: 19.8, intermediate: 18.54, advanced: 18 },
  { weight: 49, beginner: 21.15, intermediate: 19.77, advanced: 19.2 },
  { weight: 55, beginner: 23, intermediate: 21.52, advanced: 20.9 },
  { weight: 59, beginner: 23.34, intermediate: 21.85, advanced: 21.22 },
  { weight: 63, beginner: 24.25, intermediate: 22.71, advanced: 22.05 },
  { weight: 66, beginner: 25.41, intermediate: 23.79, advanced: 23.1 },
  { weight: 68, beginner: 26.19, intermediate: 24.52, advanced: 23.81 },
  { weight: 70, beginner: 26.95, intermediate: 25.23, advanced: 24.5 },
  { weight: 72, beginner: 27.72, intermediate: 25.95, advanced: 25.2 },
  { weight: 74, beginner: 28.49, intermediate: 26.77, advanced: 25.9 },
  { weight: 77, beginner: 29.64, intermediate: 27.75, advanced: 26.95 },
  { weight: 79, beginner: 30.41, intermediate: 28.48, advanced: 27.65 },
  { weight: 81, beginner: 31.18, intermediate: 29.2, advanced: 28.35 },
  { weight: 83, beginner: 31.95, intermediate: 29.92, advanced: 29.05 },
  { weight: 86, beginner: 33.11, intermediate: 31, advanced: 30.1 },
  { weight: 88, beginner: 33.88, intermediate: 31.72, advanced: 30.8 },
  { weight: 90, beginner: 34.65, intermediate: 32.44, advanced: 31.5 },
  { weight: 95, beginner: 36.57, intermediate: 34.24, advanced: 33.25 },
  { weight: 99, beginner: 39.25, intermediate: 36.71, advanced: 35.65 },
  { weight: 104, beginner: 42.26, intermediate: 39.63, advanced: 38.48 },
  { weight: 108, beginner: 45.16, intermediate: 42.27, advanced: 41.04 }
]

function getRecommendedVolume(weight: number, experience: ExperienceLevel) {
  const volumeKey = {
    Iniciante: 'beginner',
    Intermediário: 'intermediate',
    Avançado: 'advanced'
  } as const
  const key = volumeKey[experience]
  const upperIndex = volumeReference.findIndex(row => row.weight >= weight)

  if (upperIndex <= 0) return volumeReference[0][key]

  const lower = volumeReference[upperIndex - 1]
  const upper = volumeReference[upperIndex]
  const progress = (weight - lower.weight) / (upper.weight - lower.weight)

  return lower[key] + (upper[key] - lower[key]) * progress
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div className="flex flex-col">
              <label
                htmlFor="surfer-weight"
                className="text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide"
              >
                Seu peso (kg)
              </label>
              <input
                id="surfer-weight"
                type="number"
                min="36"
                max="108"
                step="1"
                required
                placeholder="Ex.: 70"
                className="bg-zinc-950 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                value={weight}
                onChange={e => setWeight(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
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
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors h-12.5"
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
              className="w-full max-w-5xl max-h-[85svh] overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 border-b border-zinc-800 p-5 sm:p-6">
                <div>
                  <h3 id="volume-table-title" className="text-xl font-bold text-white sm:text-2xl">
                    Tabela de litragem recomendada
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Referência de volume da prancha de acordo com seu peso e nível de surf.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsVolumeTableOpen(false)}
                  aria-label="Fechar tabela de litragem"
                  className="shrink-0 rounded-md p-2 text-gray-300 transition-colors hover:bg-zinc-800 hover:text-white"
                >
                  <X size={22} />
                </button>
              </div>
              <div className="max-h-[calc(85svh-112px)] overflow-auto">
                <table className="w-full min-w-[560px] border-collapse text-center text-sm text-gray-200">
                  <thead className="sticky top-0 bg-zinc-900 text-white">
                    <tr>
                      <th
                        scope="col"
                        className="border-b border-r border-zinc-700 px-3 py-3 font-bold"
                      >
                        Peso (kg)
                      </th>
                      <th
                        scope="col"
                        className="border-b border-r border-zinc-700 px-3 py-3 font-bold"
                      >
                        Iniciante (L)
                      </th>
                      <th
                        scope="col"
                        className="border-b border-r border-zinc-700 px-3 py-3 font-bold"
                      >
                        Intermediário (L)
                      </th>
                      <th scope="col" className="border-b border-zinc-700 px-3 py-3 font-bold">
                        Avançado (L)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {volumeReference.map(row => (
                      <tr key={row.weight} className="odd:bg-zinc-950 even:bg-zinc-900/70">
                        <th
                          scope="row"
                          className="border-b border-r border-zinc-800 px-3 py-2 font-semibold"
                        >
                          {row.weight}
                        </th>
                        <td className="border-b border-r border-zinc-800 px-3 py-2">
                          {row.beginner.toFixed(2)}
                        </td>
                        <td className="border-b border-r border-zinc-800 px-3 py-2">
                          {row.intermediate.toFixed(2)}
                        </td>
                        <td className="border-b border-zinc-800 px-3 py-2">
                          {row.advanced.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
