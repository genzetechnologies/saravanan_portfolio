import { useEffect, useRef, useState } from 'react';
import { useInView, useCountUp } from '../hooks/useInView';
import { highlights, highlightBadges } from '../data/portfolioData';
import { Zap, Shield, Cpu, Layers } from 'lucide-react';

function StatCard({ item, start }) {
  const count = useCountUp(typeof item.value === 'number' ? item.value : 0, 2000, start);
  const displayValue = typeof item.value === 'number' ? count : item.value;

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E8DED1] shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center group">
      <div className="mb-3">
        <span className="font-heading font-bold text-4xl md:text-5xl text-[#292522] group-hover:text-[#D97736] transition-colors duration-300">
          {displayValue}
        </span>
        <span className="font-heading font-bold text-2xl text-[#D97736] ml-1">{item.unit}</span>
      </div>
      <p className="text-[#77716A] text-sm font-body leading-tight">{item.label}</p>
    </div>
  );
}

export default function EngineeringHighlights() {
  const [sectionRef, inView] = useInView({ threshold: 0.2 });

  const badges = [
    { icon: Zap, text: "3-Phase AC Systems" },
    { icon: Layers, text: "Stack-up & Impedance Control" },
    { icon: Shield, text: "EMI/EMC Handling" },
    { icon: Cpu, text: "High-Voltage Creepage & Clearance" },
  ];

  return (
    <section id="highlights" className="py-20 md:py-28 bg-[#292522]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#D97736]" />
            <span className="text-[#D97736] text-xs font-semibold tracking-widest uppercase">Engineering at a Glance</span>
            <div className="w-8 h-px bg-[#D97736]" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="text-[#D97736]">Highlights</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto font-body">
            Key engineering parameters from professional PCB design experience.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {highlights.map((item, i) => (
            <div key={item.label} style={{ transitionDelay: `${i * 80}ms` }}>
              <StatCard item={item} start={inView} />
            </div>
          ))}
        </div>

        {/* Badge Row */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {badges.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition-all duration-200">
              <div className="w-9 h-9 rounded-lg bg-[#D97736]/20 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-[#D97736]" />
              </div>
              <span className="text-white/80 font-medium text-sm">{text}</span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-white/30 text-xs mt-10 italic">
          * Engineering parameters are from professional experience. These are not independently verified performance metrics.
        </p>
      </div>
    </section>
  );
}

