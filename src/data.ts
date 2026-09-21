import React from 'react'

export type ExperienceLevel = 'Iniciante' | 'Intermediário' | 'Avançado'
export type WeightClass = 'Leve (< 70kg)' | 'Médio (70 - 85kg)' | 'Pesado (> 85kg)'

export interface BoardDimensions {
  length: string
  width: string
  thickness: string
  volume: string
}

export interface Board {
  id: string
  name: string
  type: string
  suitableExperience: ExperienceLevel[]
  suitableWeight: WeightClass[]
  description: string
  image: string
  backImage?: string
  imageStyle?: React.CSSProperties
  dimensions: BoardDimensions
}
//Speed Carbon
import carbonImg from './assets/images/speed_carbon_frente.png'
import carbonBackImg from './assets/images/speed_carbon_fundo.png'

//Speed Sunset Fade
import sunsetImg from './assets/images/speed_sunset_frente.png'
import sunsetBackImg from './assets/images/speed_sunset_fundo.png'

//Speed Wood Longboard
import woodImg from './assets/images/speed_wood_frente.png'
import woodBackImg from './assets/images/speed_wood_fundo.png'

//Speed Carbon Longboard
import SpeedCarbonLongboardImg from './assets/images/speed_carbon_longboard_frente.png'
import SpeedCarbonLongboardBackImg from './assets/images/speed_carbon_longboard_fundo.png'

//Speed Write Performance
import SpeedWritePerformanceImg from './assets/images/speed_write_performance_frente.png'
import SpeedWritePerformanceBackImg from './assets/images/speed_write_performance_fundo.png'

//Speed Performance Blue
import blueImg from './assets/images/speed_performance_blue_frente.png'
import blueBackImg from './assets/images/speed_performance_blue_fundo.png'

//Speed Yellow Fish
import yellowFishImg from './assets/images/speed_yellow_fish_frente.png'
import yellowFishBackImg from './assets/images/speed_yellow_fish_fundo.png'

//Speed Write Fish
import SpeedWriteFishImg from './assets/images/speed_write_fish_frente.png'
import SpeedWriteFishBackImg from './assets/images/speed_write_fish_fundo.png'

//Speed EVH Eruption
import frankensteinImg from './assets/images/speed_evh_frente.png'
import frankensteinBackImg from './assets/images/speed_evh_fundo.png'

//Speed Raibow Gradient
import SpeedRaibowGradienteImg from './assets/images/speed_raibow_gradient_frente.png'
import SpeedRaibowGradienteBackImg from './assets/images/speed_raibow_gradient_fundo.png'

//Speed Pink Swallow
import pinkSwallowImg from './assets/images/speed_pink_swallow_frente.png'
import pinkSwallowBackImg from './assets/images/speed_pink_swallow_fundo.png'

//Speed Gradient Storm

//Speed Pink and Blue Gradient
import SpeedPinkBlueGradientImg from './assets/images/speed_pink_and_blue_frente.png'
import SpeedPinkBlueGradientBackImg from './assets/images/speed_pink_and_blue_fundo.png'

//Speed Write Blue Border
import SpeedWriteBlueBorderImg from './assets/images/speed_write_blue_border_frente.png'
import SpeedWriteBlueBorderBackImg from './assets/images/speed_write_blue_border_fundo.png'

export const boardsData: Board[] = [
  {
    id: 'spd-001',
    name: 'Speed Carbon',
    type: 'Shortboard',
    suitableExperience: ['Intermediário', 'Avançado'],
    suitableWeight: ['Leve (< 70kg)', 'Médio (70 - 85kg)'],
    description:
      'Design minimalista em preto sólido de fibra de carbono. Leveza e velocidade extrema.',
    image: carbonImg,
    backImage: carbonBackImg,
    dimensions: {
      length: '5\'8" a 6\'2"',
      width: '18 3/4" a 19 1/2"',
      thickness: '2 1/4" a 2 5/8"',
      volume: '26L a 31L'
    }
  },
  {
    id: 'spd-002',
    name: 'Speed Sunset Fade',
    type: 'Evolution, Shortboard',
    suitableExperience: ['Intermediário', 'Avançado'],
    suitableWeight: ['Leve (< 70kg)', 'Médio (70 - 85kg)', 'Pesado (> 85kg)'],
    description:
      'Um visual marcante com degradê de rosa, laranja e amarelo com bordas pretas e fundo de carbono. Ideal para quem busca estilo e performance.',
    image: sunsetImg,
    backImage: sunsetBackImg,
    dimensions: {
      length: '6\'4" a 7\'2"',
      width: '20 1/2" a 22"',
      thickness: '2 1/2" a 3"',
      volume: '38L a 48L'
    }
  },
  {
    id: 'spd-003',
    name: 'Speed Wood Longboard',
    type: 'Longboard',
    suitableExperience: ['Iniciante', 'Intermediário', 'Avançado'],
    suitableWeight: ['Leve (< 70kg)', 'Médio (70 - 85kg)', 'Pesado (> 85kg)'],
    description:
      'Clássica prancha estilo longboard com textura central de madeira e bordas brancas. Ideal para remadas longas e surf relaxado.',
    image: woodImg,
    backImage: woodBackImg,
    dimensions: {
      length: '9\'6" a 11\'0"',
      width: '30" a 32"',
      thickness: '4" a 4 1/2"',
      volume: '50L a 82L'
    }
  },
  {
    id: 'spd-004',
    name: 'Speed Carbon Longboard',
    type: 'Longboard',
    suitableExperience: ['Iniciante', 'Intermediário', 'Avançado'],
    suitableWeight: ['Leve (< 70kg)', 'Médio (70 - 85kg)', 'Pesado (> 85kg)'],
    description:
      'Speed Carbon Longboard com design minimalista em preto sólido de fibra de carbono. Leveza e velocidade extrema para longboards.',
    image: SpeedCarbonLongboardImg,
    backImage: SpeedCarbonLongboardBackImg,
    dimensions: {
      length: '9\'6" a 11\'0"',
      width: '30" a 32"',
      thickness: '4" a 4 1/2"',
      volume: '50L a 82L'
    }
  },
  {
    id: 'spd-005',
    name: 'Speed Write Performance',
    type: 'Evolution, Shortboard',
    suitableExperience: ['Intermediário', 'Avançado'],
    suitableWeight: ['Médio (70 - 85kg)', 'Pesado (> 85kg)'],
    description:
      'Speed Write Performance com design minimalista e clássico. Leveza e velocidade extrema para pranchas de performance.',
    image: SpeedWritePerformanceImg,
    backImage: SpeedWritePerformanceBackImg,
    dimensions: {
      length: '5\'8" a 6\'2"',
      width: '18 3/4" a 19 1/2"',
      thickness: '2 1/4" a 2 5/8"',
      volume: '26L a 31L'
    }
  },
  {
    id: 'spd-006',
    name: 'Speed Performance Blue',
    type: 'Shortboard',
    suitableExperience: ['Intermediário', 'Avançado'],
    suitableWeight: ['Leve (< 70kg)', 'Médio (70 - 85kg)'],
    description:
      'Prancha de performance com design moderno na tonalidade azul com bordas laranja. Ideal para alta velocidade.',
    image: blueImg,
    backImage: blueBackImg,
    dimensions: {
      length: '5\'6" a 6\'0"',
      width: '18 1/4" a 19"',
      thickness: '2 1/8" a 2 1/2"',
      volume: '24L a 29L'
    }
  },
  {
    id: 'spd-007',
    name: 'Speed Yellow Fish',
    type: 'Fish / Hybrid',
    suitableExperience: ['Intermediário', 'Avançado'],
    suitableWeight: ['Leve (< 70kg)', 'Médio (70 - 85kg)'],
    description:
      'Fundo e deck em amarelo vibrante. Design de fish clássico para surf solto e divertido.',
    image: yellowFishImg,
    backImage: yellowFishBackImg,
    dimensions: {
      length: '5\'4" a 5\'10"',
      width: '19 1/2" a 20 1/2"',
      thickness: '2 3/8" a 2 5/8"',
      volume: '28L a 34L'
    }
  },
  {
    id: 'spd-008',
    name: 'Speed Write Fish',
    type: 'Shortboard',
    suitableExperience: ['Intermediário', 'Avançado'],
    suitableWeight: ['Leve (< 70kg)', 'Médio (70 - 85kg)'],
    description:
      'Speed Write Fish com design minimalista e clássico. Leveza e velocidade extrema para pranchas de performance.',
    image: SpeedWriteFishImg,
    backImage: SpeedWriteFishBackImg,
    dimensions: {
      length: '5\'10" a 6\'4"',
      width: '18 3/4" a 19 3/4"',
      thickness: '2 5/16" a 2 5/8"',
      volume: '27L a 32L'
    }
  },
  {
    id: 'spd-009',
    name: 'Speed EVH Eruption',
    type: 'Shortboard',
    suitableExperience: ['Avançado'],
    suitableWeight: ['Médio (70 - 85kg)'],
    description:
      'Design icônico inspirado na guitarra do Eddie Van Halen. Pura atitude e performance radical.',
    image: frankensteinImg,
    backImage: frankensteinBackImg,
    dimensions: {
      length: '5\'11" a 6\'3"',
      width: '18 5/8" a 19 1/4"',
      thickness: '2 3/8" a 2 9/16"',
      volume: '27.5L a 31L'
    }
  },
  {
    id: 'spd-010',
    name: 'Speed Raibow Gradient',
    type: 'Shortboard',
    suitableExperience: ['Intermediário', 'Avançado'],
    suitableWeight: ['Médio (70 - 85kg)', 'Pesado (> 85kg)'],
    description:
      'Desino vibrante com gradiente de arco-íris. Para surfistas que buscam estilo e performance.',
    image: SpeedRaibowGradienteImg,
    backImage: SpeedRaibowGradienteBackImg,
    dimensions: {
      length: '5\'11" a 6\'3"',
      width: '18 5/8" a 19 1/4"',
      thickness: '2 3/8" a 2 9/16"',
      volume: '27.5L a 31L'
    }
  },
  {
    id: 'spd-011',
    name: 'Speed Pink Swallow',
    type: 'Shortboard / Swallow Tail',
    suitableExperience: ['Intermediário', 'Avançado'],
    suitableWeight: ['Leve (< 70kg)', 'Médio (70 - 85kg)', 'Pesado (> 85kg)'],
    description:
      'Prancha rosa com design de swallow tail. Ideal para surfistas que buscam estilo e performance em ondas médias a grandes.',
    image: pinkSwallowImg,
    backImage: pinkSwallowBackImg,
    dimensions: {
      length: '5\'11" a 6\'3"',
      width: '18 5/8" a 19 1/4"',
      thickness: '2 3/8" a 2 9/16"',
      volume: '27.5L a 31L'
    }
  },
  {
    id: 'spd-012',
    name: 'Speed Pink and Blue Gradient',
    type: 'Shortboard',
    suitableExperience: ['Intermediário', 'Avançado'],
    suitableWeight: ['Leve (< 70kg)', 'Médio (70 - 85kg)'],
    description: 'Prancha performance ideal para surfistas que buscam estilo e desempenho.',
    image: SpeedPinkBlueGradientImg,
    backImage: SpeedPinkBlueGradientBackImg,
    dimensions: {
      length: '6\'8" a 7\'6"',
      width: '21" a 22"',
      thickness: '2 5/8" a 3"',
      volume: '42L a 50L'
    }
  },
  {
    id: 'spd-013',
    name: 'Speed Write Blue Border',
    type: 'Shortboard',
    suitableExperience: ['Intermediário', 'Avançado'],
    suitableWeight: ['Leve (< 70kg)', 'Médio (70 - 85kg)'],
    description:
      'Prancha performance com bordas azuis vibrantes. Ideal para surfistas que buscam estilo e desempenho.',
    image: SpeedWriteBlueBorderImg,
    backImage: SpeedWriteBlueBorderBackImg,
    dimensions: {
      length: '5\'9" a 6\'2"',
      width: '18 3/4" a 19 3/8"',
      thickness: '2 5/16" a 2 9/16"',
      volume: '27L a 31L'
    }
  },

]
export const testimonials = [
  {
    id: 't1',
    name: 'Rafael Nunes',
    role: 'Surfista de performance',
    content:
      'A Speed Carbon ficou muito leve no pé e responde rápido nas trocas de borda. Foi a prancha que eu queria para dias de onda mais cavada.'
  },
  {
    id: 't2',
    name: 'Marina Costa',
    role: 'Surfista intermediária',
    content:
      'Escolhi a Speed Sunset Fade pelo visual, mas o que me ganhou foi a remada e a flutuação. Ela deixa as marolas de verão muito mais divertidas.'
  },
  {
    id: 't3',
    name: 'João Martins',
    role: 'Longboarder iniciante',
    content:
      'A Speed Wood Longboard me deu a estabilidade que eu precisava para evoluir com tranquilidade. Hoje consigo aproveitar bem mais cada sessão.'
  },
  {
    id: 't4',
    name: 'Beatriz Almeida',
    role: 'Longboarder',
    content:
      'A Speed Carbon Longboard une uma remada muito gostosa com uma sensação leve na linha. É uma prancha elegante e muito boa de conduzir.'
  },
  {
    id: 't5',
    name: 'Diego Rocha',
    role: 'Surfista de ondas pequenas',
    content:
      'Com a Speed Yellow Fish, ondas menores deixaram de ser motivo para ficar na areia. Ela gera velocidade fácil e solta bastante nas curvas.'
  },
  {
    id: 't6',
    name: 'Luana Ferreira',
    role: 'Surfista avançada',
    content:
      'A Speed Pink Swallow tem presença no visual e segurança quando a onda ganha força. O swallow tail segura bem a linha e acelera nas manobras.'
  }
]
