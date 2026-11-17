import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// PCB Circuit SVG background illustration
function PCBBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 500 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Grid dots */}
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={30 + col * 65}
            cy={30 + row * 75}
            r="2"
            fill="#D97736"
            opacity="0.15"
          />
        ))
      )}

      {/* Circuit tracks */}
      <path d="M 60 80 L 120 80 L 120 150 L 200 150" stroke="#D97736" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" className="circuit-line" />
      <path d="M 200 150 L 280 150 L 280 220 L 350 220" stroke="#D97736" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
      <path d="M 60 200 L 60 280 L 160 280 L 160 350" stroke="#E9A66F" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
      <path d="M 160 350 L 240 350 L 240 420 L 340 420" stroke="#E9A66F" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
      <path d="M 300 80 L 400 80 L 400 180" stroke="#D97736" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
      <path d="M 100 460 L 200 460 L 200 520 L 350 520" stroke="#D97736" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
      <path d="M 420 300 L 420 400 L 480 400" stroke="#E9A66F" strokeWidth="1" strokeLinecap="round" opacity="0.15" />

      {/* Vias */}
      <circle cx="120" cy="80" r="5" stroke="#D97736" strokeWidth="1.5" fill="none" opacity="0.4" />
      <circle cx="120" cy="80" r="2" fill="#D97736" opacity="0.5" />
      <circle cx="280" cy="150" r="5" stroke="#D97736" strokeWidth="1.5" fill="none" opacity="0.4" />
      <circle cx="280" cy="150" r="2" fill="#D97736" opacity="0.5" />
      <circle cx="160" cy="280" r="5" stroke="#E9A66F" strokeWidth="1.5" fill="none" opacity="0.4" />
      <circle cx="160" cy="280" r="2" fill="#E9A66F" opacity="0.5" />
      <circle cx="400" cy="80" r="5" stroke="#D97736" strokeWidth="1.5" fill="none" opacity="0.4" />
      <circle cx="400" cy="80" r="2" fill="#D97736" opacity="0.5" />
      <circle cx="240" cy="350" r="5" stroke="#E9A66F" strokeWidth="1.5" fill="none" opacity="0.4" />
      <circle cx="240" cy="350" r="2" fill="#E9A66F" opacity="0.5" />

      {/* IC component outline */}
      <rect x="180" y="220" width="80" height="60" rx="4" stroke="#D97736" strokeWidth="1.5" fill="none" opacity="0.3" />
      <line x1="180" y1="235" x2="165" y2="235" stroke="#D97736" strokeWidth="1" opacity="0.3" />
      <line x1="180" y1="250" x2="165" y2="250" stroke="#D97736" strokeWidth="1" opacity="0.3" />
      <line x1="180" y1="265" x2="165" y2="265" stroke="#D97736" strokeWidth="1" opacity="0.3" />
      <line x1="260" y1="235" x2="275" y2="235" stroke="#D97736" strokeWidth="1" opacity="0.3" />
      <line x1="260" y1="250" x2="275" y2="250" stroke="#D97736" strokeWidth="1" opacity="0.3" />
      <line x1="260" y1="265" x2="275" y2="265" stroke="#D97736" strokeWidth="1" opacity="0.3" />

      {/* Capacitor */}
      <rect x="350" y="310" width="20" height="30" rx="2" stroke="#E9A66F" strokeWidth="1.2" fill="none" opacity="0.3" />
      <line x1="360" y1="310" x2="360" y2="295" stroke="#E9A66F" strokeWidth="1" opacity="0.3" />
      <line x1="360" y1="340" x2="360" y2="355" stroke="#E9A66F" strokeWidth="1" opacity="0.3" />

      {/* Resistor */}
      <rect x="60" y="390" width="40" height="16" rx="3" stroke="#D97736" strokeWidth="1.2" fill="none" opacity="0.25" />
      <line x1="60" y1="398" x2="45" y2="398" stroke="#D97736" strokeWidth="1" opacity="0.25" />
      <line x1="100" y1="398" x2="115" y2="398" stroke="#D97736" strokeWidth="1" opacity="0.25" />

      {/* Connector pins */}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={420 + i * 14} y="440" width="10" height="20" rx="1" stroke="#D97736" strokeWidth="1" fill="none" opacity="0.2" />
      ))}

      {/* Decorative orange circle */}
      <circle cx="460" cy="120" r="40" stroke="#D97736" strokeWidth="1" fill="none" opacity="0.1" />
      <circle cx="460" cy="120" r="30" stroke="#D97736" strokeWidth="0.5" fill="none" opacity="0.08" />
      <circle cx="460" cy="120" r="6" fill="#D97736" opacity="0.2" />

      {/* Corner accent */}
      <path d="M 0 0 L 50 0 L 0 50 Z" fill="#D97736" opacity="0.05" />
      <path d="M 500 600 L 450 600 L 500 550 Z" fill="#D97736" opacity="0.05" />
    </svg>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [yearsExp, setYearsExp] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    // Calculate experience from Aug 2021
    const start = new Date(2021, 7, 1);
    const now = new Date();
    const years = Math.floor((now - start) / (365.25 * 24 * 3600 * 1000));
    setYearsExp(years);
    return () => clearTimeout(timer);
  }, []);

  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-[#F8F4EC] flex items-center relative overflow-hidden pt-20"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FBE8D8] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F1E9DC] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Text Content */}
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Professional Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-[#D97736]" />
              <span className="text-[#D97736] text-xs font-semibold tracking-widest uppercase font-body">
                PCB Design Engineer · Automotive Power Electronics
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#292522] leading-[1.1] mb-6">
              Engineering{' '}
              <span className="text-[#D97736]">Precision.</span>
              <br />
              Designing Intelligent{' '}
              <span className="relative inline-block">
                Connections.
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#D97736] opacity-40" />
              </span>
            </h1>

            {/* Name */}
            <p className="font-heading text-xl font-semibold text-[#77716A] mb-5 tracking-wide">
              — Saravanan J
            </p>

            {/* Intro */}
            <p className="text-[#77716A] text-base md:text-lg leading-relaxed mb-8 max-w-lg font-body">
              {personalInfo.heroIntro}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={scrollToWork}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D97736] text-white font-semibold rounded-xl hover:bg-[#B85E1E] transition-all duration-200 shadow-orange hover:shadow-card-hover group"
              >
                Explore My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={personalInfo.resume}
                download="Saravanan_J_PCB_Resume.pdf"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#D97736] text-[#D97736] font-semibold rounded-xl hover:bg-[#FBE8D8] transition-all duration-200 group"
              >
                <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-[#E8DED1]">
              <div>
                <p className="font-heading text-2xl font-bold text-[#292522]">{yearsExp}+</p>
                <p className="text-[#77716A] text-sm">Years Experience</p>
              </div>
              <div className="w-px bg-[#E8DED1]" />
              <div>
                <p className="font-heading text-2xl font-bold text-[#292522]">20</p>
                <p className="text-[#77716A] text-sm">Max PCB Layers</p>
              </div>
              <div className="w-px bg-[#E8DED1]" />
              <div>
                <p className="font-heading text-2xl font-bold text-[#292522]">800</p>
                <p className="text-[#77716A] text-sm">Pin BGA Routing</p>
              </div>
              <div className="w-px bg-[#E8DED1]" />
              <div>
                <p className="font-heading text-2xl font-bold text-[#292522]">690V</p>
                <p className="text-[#77716A] text-sm">High Voltage Design</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Portrait + PCB Illustration */}
          <div
            className={`relative flex justify-center transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* PCB Background Container */}
            <div className="relative w-full max-w-sm md:max-w-md">
              {/* Background shape */}
              <div className="absolute inset-0 bg-[#F1E9DC] rounded-3xl" />

              {/* PCB Circuit illustration */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <PCBBackground />
              </div>

              {/* Orange accent shape */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#D97736] rounded-2xl opacity-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#E9A66F] rounded-xl opacity-15" />

              {/* Profile Photo */}
              <div className="relative z-10 p-6 md:p-8">
                <div className="relative mx-auto w-64 md:w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-card border-4 border-white">
                  <img
                    src={personalInfo.profilePhoto}
                    alt="Saravanan J - PCB Design Engineer"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292522]/20 to-transparent" />
                </div>

                {/* Floating badge */}
                <div className="absolute bottom-10 -right-2 md:-right-4 bg-white rounded-xl px-4 py-3 shadow-card border border-[#E8DED1]">
                  <p className="text-[#D97736] font-bold font-heading text-sm">Sona Comstar</p>
                  <p className="text-[#77716A] text-xs">Jan 2026 – Present</p>
                </div>

                {/* Top badge */}
                <div className="absolute top-10 -left-2 md:-left-4 bg-[#D97736] rounded-xl px-4 py-3 shadow-orange">
                  <p className="text-white font-bold font-heading text-xs">PCB Engineer</p>
                  <p className="text-orange-100 text-xs">Automotive</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-[#77716A] hover:text-[#D97736] transition-colors group"
            aria-label="Scroll down"
          >
            <span className="text-xs tracking-widest uppercase font-body">Scroll</span>
            <ChevronDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}

