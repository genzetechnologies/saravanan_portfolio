import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { skills } from '../data/portfolioData';
import { Layers, Zap, Settings, Monitor, ChevronRight } from 'lucide-react';

const iconMap = { Layers, Zap, Settings, Monitor };

export default function Skills() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#F8F4EC]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#D97736]" />
            <span className="text-[#D97736] text-xs font-semibold tracking-widest uppercase">Technical Expertise</span>
            <div className="w-8 h-px bg-[#D97736]" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#292522] mb-4">
            Skills & <span className="text-[#D97736]">Proficiency</span>
          </h2>
          <p className="text-[#77716A] max-w-xl mx-auto font-body text-base md:text-lg">
            A comprehensive technical skill set built through hands-on engineering experience in PCB design, automotive and industrial electronics.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {skills.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Layers;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeCategory === i
                    ? 'bg-[#D97736] text-white shadow-orange'
                    : 'bg-white border border-[#E8DED1] text-[#77716A] hover:border-[#D97736] hover:text-[#D97736]'
                }`}
              >
                <Icon size={16} />
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* All Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skills.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Layers;
            return (
              <div
                key={cat.category}
                className={`bg-white rounded-2xl border border-[#E8DED1] overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100 + 150}ms` }}
              >
                {/* Card Header */}
                <div className="p-5 border-b border-[#E8DED1] bg-[#F8F4EC]">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: '#FBE8D8' }}
                    >
                      <Icon size={20} className="text-[#D97736]" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-[#292522] text-sm">{cat.category}</p>
                      <p className="text-[#77716A] text-xs">{cat.items.length} skills</p>
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="p-5 space-y-2.5">
                  {cat.items.map((skill) => (
                    <div key={skill} className="flex items-center gap-2.5 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D97736] flex-shrink-0 group-hover:scale-150 transition-transform" />
                      <span className="text-[#77716A] text-sm font-body group-hover:text-[#292522] transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Orange accent bar */}
                <div className="h-1 bg-gradient-to-r from-[#D97736] to-[#E9A66F] opacity-60" />
              </div>
            );
          })}
        </div>

        {/* Tools highlight */}
        <div className={`mt-12 bg-[#292522] rounded-2xl p-8 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#E9A66F] text-xs font-semibold tracking-widest uppercase mb-2">Primary EDA Tools</p>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white">Professional PCB Design Software</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {['Altium Designer', 'Cadence Allegro', 'PADS'].map((tool) => (
                <div key={tool} className="px-5 py-3 bg-white/10 border border-white/20 rounded-xl">
                  <p className="text-white font-semibold font-heading text-sm">{tool}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

