import { useInView } from '../hooks/useInView';
import { experience } from '../data/portfolioData';
import { MapPin, Calendar, Building2, ChevronRight } from 'lucide-react';

export default function Experience() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#F1E9DC]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#D97736]" />
            <span className="text-[#D97736] text-xs font-semibold tracking-widest uppercase">Professional Journey</span>
            <div className="w-8 h-px bg-[#D97736]" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#292522] mb-4">
            Career <span className="text-[#D97736]">Timeline</span>
          </h2>
          <p className="text-[#77716A] max-w-xl mx-auto font-body">
            A professional journey in PCB design engineering across automotive and industrial electronics domains.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#E8DED1] transform md:-translate-x-px" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${exp.current ? 'bg-[#D97736] border-[#D97736]' : 'bg-white border-[#D97736]'}`}>
                    {exp.current && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  {exp.current && (
                    <div className="absolute inset-0 w-6 h-6 rounded-full bg-[#D97736] animate-ping opacity-30" />
                  )}
                </div>

                {/* Spacer for desktop centering */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                  <div className="bg-white rounded-2xl border border-[#E8DED1] shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
                    {/* Header */}
                    <div className="p-6 border-b border-[#E8DED1] bg-[#F8F4EC]">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[#D97736] font-heading font-bold text-xs tracking-widest">EXP {exp.id}</span>
                            {exp.current && (
                              <span className="px-2 py-0.5 bg-[#FBE8D8] text-[#D97736] text-xs font-semibold rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <h3 className="font-heading font-bold text-[#292522] text-lg leading-tight">{exp.designation}</h3>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-[#77716A] text-sm">
                          <Building2 size={14} className="text-[#D97736]" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#77716A] text-sm">
                          <Calendar size={14} className="text-[#D97736]" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#77716A] text-sm">
                          <MapPin size={14} className="text-[#D97736]" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      <p className="text-[#77716A] text-sm mb-4 leading-relaxed">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-[#77716A]">
                            <ChevronRight size={14} className="text-[#D97736] flex-shrink-0 mt-0.5" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Orange accent */}
                    <div className="h-1 bg-gradient-to-r from-[#D97736] to-[#E9A66F]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

