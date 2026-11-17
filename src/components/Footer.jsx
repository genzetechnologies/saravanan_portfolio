import { personalInfo, navLinks } from '../data/portfolioData';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E1B18] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-14 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#D97736] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold font-heading">SJ</span>
              </div>
              <div>
                <p className="font-heading font-bold text-white">Saravanan J</p>
                <p className="text-white/50 text-xs">PCB Design Engineer</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Experienced PCB Design Engineer specializing in automotive electronics, multilayer PCB design and high-speed circuit development.
            </p>
            <div className="space-y-2">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-white/50 hover:text-[#E9A66F] transition-colors text-sm">
                <Mail size={14} />
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone.replace(/\s/g,'')}`} className="flex items-center gap-2 text-white/50 hover:text-[#E9A66F] transition-colors text-sm">
                <Phone size={14} />
                {personalInfo.phone}
              </a>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin size={14} />
                {personalInfo.location}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-heading font-bold text-white mb-5">Quick Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/50 hover:text-[#E9A66F] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <p className="font-heading font-bold text-white mb-5">Open to Opportunities</p>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Available for PCB design engineering roles, automotive electronics projects and technical collaborations.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#D97736] text-white font-semibold rounded-xl hover:bg-[#B85E1E] transition-colors text-sm"
            >
              <Mail size={16} />
              Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-white/40 text-xs">
          <p>© {currentYear} Saravanan J. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Developed by{' '}
            <span className="text-[#D97736] font-semibold">Genze Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

