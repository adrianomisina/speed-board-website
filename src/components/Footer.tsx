import { Instagram, Mail, MapPin, Phone } from 'lucide-react'
import logoImg from '../assets/images/logo.png'

export function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="flex flex-col items-start mb-6">
              <img
                src={logoImg}
                alt="SPD Surfboards Logo"
                className="h-12 w-auto object-contain rounded-md bg-black"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Pranchas de alta performance moldadas com paixão e mais de 20 anos de experiência por
              Sidnei Oliveira.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/speed_surf_board_brazil?srtk=MXNsMzU5OXluZDIybA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Sidnei Oliveira"
                className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  História
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Modelos
                </a>
              </li>
              <li>
                <a
                  href="#finder"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Sua Nave
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">
              Contato & Encomendas
            </h4>
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-sm font-bold text-gray-400 uppercase">
                      WhatsApp
                    </span>
                    <a
                      href="https://wa.me/5513996178279"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-emerald-400 transition-colors"
                    >
                      +55 13 99617-8279
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-sm font-bold text-gray-400 uppercase">Email</span>
                    <a
                      href="mailto:contato@spdsurfboards.com"
                      className="text-white hover:text-emerald-400 transition-colors"
                    >
                      contato@spdsurfboards.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-sm font-bold text-gray-400 uppercase">
                      Fábrica (Agende sua visita)
                    </span>
                    <span className="text-white">Praia Grande - Solemar, SP, Brasil</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} SPD Surfboards. Todos os direitos reservados.
          </p>
          <p className="text-zinc-600 text-sm flex items-center gap-1">
            Feito com paixão pelo Surf.
          </p>
        </div>
      </div>
    </footer>
  )
}
