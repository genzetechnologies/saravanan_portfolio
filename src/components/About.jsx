import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { personalInfo } from '../data/portfolioData';
import { CheckCircle, Cpu, Layers, Zap, Activity, Eye } from 'lucide-react';

function EngineeringIllustration({ viewMode, onToggleView }) {
  return (
    <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-[#292522] group/illustration border border-[#E8DED1]">
      {viewMode === 'photo' ? (
        <div className="w-full h-full relative overflow-hidden">
          <img
            src="/images/about-pcb-board.jpg"
            alt="Advanced High-Speed Multilayer PCB Board"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/illustration:scale-105"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
        </div>
      ) : (
        <div className="w-full h-full bg-[#F8F4EC] p-2 flex items-center justify-center">
          <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* PCB Board outline */}
            <rect x="40" y="40" width="320" height="270" rx="12" fill="#F8F4EC" stroke="#E8DED1" strokeWidth="2" />
            <rect x="52" y="52" width="296" height="246" rx="8" fill="white" stroke="#E8DED1" strokeWidth="1" />

            {/* PCB layers indicator */}
            {[0, 1, 2].map((i) => (
              <rect key={i} x={42 + i * 2} y={42 + i * 2} width="316" height="266" rx="12" fill="none" stroke="#D97736" strokeWidth="0.5" opacity={0.3 - i * 0.08} />
            ))}

            {/* Circuit tracks */}
            <path d="M 80 100 L 150 100 L 150 160 L 220 160" stroke="#D97736" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            <path d="M 220 160 L 300 160 L 300 220" stroke="#D97736" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            <path d="M 80 200 L 80 240 L 180 240" stroke="#E9A66F" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            <path d="M 180 240 L 260 240 L 260 200 L 320 200" stroke="#E9A66F" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

            {/* Vias */}
            {[[150, 100], [220, 160], [300, 160], [80, 200], [260, 200]].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="6" stroke="#D97736" strokeWidth="1.5" fill="white" />
                <circle cx={cx} cy={cy} r="2.5" fill="#D97736" opacity="0.7" />
              </g>
            ))}

            {/* Main IC */}
            <rect x="155" y="115" width="80" height="65" rx="4" fill="#292522" opacity="0.85" />
            <text x="195" y="152" textAnchor="middle" fill="#D97736" fontSize="8" fontFamily="monospace">MCU</text>
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <line x1={155} y1={125 + i * 18} x2={142} y2={125 + i * 18} stroke="#77716A" strokeWidth="1.5" />
                <line x1={235} y1={125 + i * 18} x2={248} y2={125 + i * 18} stroke="#77716A" strokeWidth="1.5" />
              </g>
            ))}

            {/* Capacitor */}
            <rect x="275" y="90" width="14" height="22" rx="2" fill="none" stroke="#E9A66F" strokeWidth="1.5" />
            <line x1="282" y1="90" x2="282" y2="78" stroke="#E9A66F" strokeWidth="1.5" />
            <line x1="282" y1="112" x2="282" y2="124" stroke="#E9A66F" strokeWidth="1.5" />
            <text x="282" y="102" textAnchor="middle" fill="#E9A66F" fontSize="6" fontFamily="monospace">C</text>

            {/* Resistors */}
            {[0, 1].map((i) => (
              <g key={i}>
                <rect x={80} y={110 + i * 25} width="30" height="12" rx="2" fill="none" stroke="#D97736" strokeWidth="1.2" />
                <line x1={80} y1={116 + i * 25} x2={68} y2={116 + i * 25} stroke="#D97736" strokeWidth="1" />
                <line x1={110} y1={116 + i * 25} x2={122} y2={116 + i * 25} stroke="#D97736" strokeWidth="1" />
                <text x="95" y={119 + i * 25} textAnchor="middle" fill="#D97736" fontSize="5" fontFamily="monospace">R</text>
              </g>
            ))}

            {/* Connector */}
            {[0, 1, 2, 3].map((i) => (
              <rect key={i} x={280 + i * 10} y="230" width="8" height="16" rx="1" fill="none" stroke="#77716A" strokeWidth="1" />
            ))}

            {/* Layer count badge */}
            <rect x="52" y="260" width="58" height="26" rx="6" fill="#FBE8D8" />
            <text x="81" y="273" textAnchor="middle" fill="#D97736" fontSize="7" fontFamily="Space Grotesk" fontWeight="600">20-Layer</text>
            <text x="81" y="282" textAnchor="middle" fill="#D97736" fontSize="6" fontFamily="Space Grotesk">PCB</text>

            {/* Mounting holes */}
            {[[56, 56], [344, 56], [56, 298], [344, 298]].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="6" stroke="#E8DED1" strokeWidth="1.5" fill="white" />
                <circle cx={cx} cy={cy} r="2" fill="#E8DED1" />
              </g>
            ))}
          </svg>
        </div>
      )}

      {/* Switch View Button */}
      <button
        type="button"
        onClick={onToggleView}
        className="absolute top-4 left-4 bg-white/95 backdrop-blur-md hover:bg-white text-[#292522] text-xs font-semibold px-3 py-1.5 rounded-xl border border-[#E8DED1] shadow-card flex items-center gap-1.5 transition-all z-20 hover:border-[#D97736]"
      >
        {viewMode === 'photo' ? (
          <>
            <Cpu size={14} className="text-[#D97736]" />
            <span>Schematic</span>
          </>
        ) : (
          <>
            <Eye size={14} className="text-[#D97736]" />
            <span>Photo</span>
          </>
        )}
      </button>

      {/* Floating status badges */}
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2 shadow-card border border-[#E8DED1] z-10">
        <p className="text-[#D97736] font-bold font-heading text-xs sm:text-sm">EMI/EMC</p>
        <p className="text-[#77716A] text-[11px]">Compliant Design</p>
      </div>

      <div className="absolute bottom-4 left-4 bg-[#D97736] text-white rounded-xl px-3.5 py-2 shadow-orange z-10">
        <p className="font-bold font-heading text-xs sm:text-sm">High-Speed</p>
        <p className="text-orange-100 text-[11px]">Routing Expert</p>
      </div>

      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-[#292522] rounded-xl px-3 py-1.5 shadow-card border border-[#E8DED1] z-10">
        <p className="text-[#D97736] font-bold font-heading text-xs">20 Layers</p>
        <p className="text-[#77716A] text-[10px]">Architecture</p>
      </div>
    </div>
  );
}

export default function About() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });
  const [viewMode, setViewMode] = useState('photo');

  const highlights = [
    { icon: Layers, text: "Multilayer PCB Design up to 20 Layers" },
    { icon: Zap, text: "High-Speed Interface Routing (DDR, USB, Ethernet)" },
    { icon: Cpu, text: "Automotive & Industrial Electronics" },
    { icon: CheckCircle, text: "EMI/EMC Compliance & DFM Standards" },
    { icon: Activity, text: "Signal Integrity (SI) & Power Integrity (PI) Compliance in PCB" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F1E9DC]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#D97736]" />
            <span className="text-[#D97736] text-xs font-semibold tracking-widest uppercase">About Me</span>
            <div className="w-8 h-px bg-[#D97736]" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#292522] mb-4">
            Engineering Ideas Into<br />
            <span className="text-[#D97736]">Reliable Electronic Solutions</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: Text */}
          <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-[#77716A] text-base md:text-lg leading-relaxed mb-8 font-body">
              {personalInfo.aboutIntro}
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FBE8D8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={16} className="text-[#D97736]" />
                  </div>
                  <p className="text-[#292522] font-medium text-sm md:text-base">{text}</p>
                </div>
              ))}
            </div>

            {/* Info tags */}
            <div className="flex flex-wrap gap-3">
              {['Automotive Electronics', 'Power Electronics', 'High-Speed PCB', 'Multilayer Design', 'Altium Designer', 'Cadence Allegro'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-white border border-[#E8DED1] rounded-full text-sm text-[#77716A] font-medium hover:border-[#D97736] hover:text-[#D97736] transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Real Engineering PCB Illustration & Photo */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-white rounded-3xl p-6 shadow-card border border-[#E8DED1]">
              <EngineeringIllustration
                viewMode={viewMode}
                onToggleView={() => setViewMode(prev => prev === 'photo' ? 'schematic' : 'photo')}
              />
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-[#E8DED1]">
                <div className="text-center">
                  <p className="font-heading text-2xl font-bold text-[#D97736]">4+</p>
                  <p className="text-[#77716A] text-sm">Years in PCB Design</p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-2xl font-bold text-[#D97736]">3</p>
                  <p className="text-[#77716A] text-sm">EDA Tool Proficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
