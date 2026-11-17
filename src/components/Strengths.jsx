import { useInView } from '../hooks/useInView';
import { strengths } from '../data/portfolioData';
import { Brain, Users, Lightbulb, Target, Rocket } from 'lucide-react';

const iconMap = { Brain, Users, Lightbulb, Target, Rocket };

export default function Strengths() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="strengths" className="py-20 md:py-28 bg-[#F8F4EC]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#D97736]" />
            <span className="text-[#D97736] text-xs font-semibold tracking-widest uppercase">Beyond Technical Expertise</span>
            <div className="w-8 h-px bg-[#D97736]" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#292522] mb-4">
            Professional <span className="text-[#D97736]">Strengths</span>
          </h2>
          <p className="text-[#77716A] max-w-xl mx-auto font-body">
            The qualities that complement technical expertise and drive engineering excellence.
          </p>
        </div>

        {/* Strength Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {strengths.map((s, i) => {
            const Icon = iconMap[s.icon] || Brain;
            return (
              <div
                key={s.title}
                className={`bg-white rounded-2xl border border-[#E8DED1] p-6 text-center shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 group ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FBE8D8] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D97736] transition-colors duration-300">
                  <Icon size={26} className="text-[#D97736] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-[#292522] mb-2 text-sm">{s.title}</h3>
                <p className="text-[#77716A] text-xs leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

