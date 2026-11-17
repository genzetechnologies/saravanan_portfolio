import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive('#' + sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E8DED1]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo('#home')}
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 bg-[#D97736] rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-orange transition-shadow duration-300">
                <span className="text-white font-bold text-sm md:text-base font-heading">SJ</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-heading font-700 text-[#292522] text-sm md:text-base leading-tight">Saravanan J</p>
                <p className="text-[#77716A] text-xs leading-tight">PCB Design Engineer</p>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === link.href
                      ? 'text-[#D97736] bg-[#FBE8D8]'
                      : 'text-[#77716A] hover:text-[#292522] hover:bg-[#F1E9DC]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#contact')}
                className="ml-2 px-5 py-2 bg-[#D97736] text-white rounded-lg text-sm font-semibold hover:bg-[#B85E1E] transition-colors duration-200 shadow-orange"
              >
                Contact Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-[#292522] hover:bg-[#F1E9DC] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 border-b border-[#E8DED1] flex items-center justify-between">
            <div>
              <p className="font-heading font-bold text-[#292522]">Saravanan J</p>
              <p className="text-[#77716A] text-sm">PCB Design Engineer</p>
            </div>
            <button onClick={() => setMenuOpen(false)} className="p-2 rounded-lg hover:bg-[#F1E9DC]">
              <X size={20} />
            </button>
          </div>
          <div className="p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === link.href
                    ? 'text-[#D97736] bg-[#FBE8D8]'
                    : 'text-[#77716A] hover:text-[#292522] hover:bg-[#F1E9DC]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="mt-4 w-full px-5 py-3 bg-[#D97736] text-white rounded-lg text-sm font-semibold hover:bg-[#B85E1E] transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

