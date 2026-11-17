import { useInView } from '../hooks/useInView';
import { education } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, CheckCircle, MapPin, Calendar } from 'lucide-react';

const iconMap = { GraduationCap, Award, BookOpen };

export default function Education() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="education" className="py-20 md:py-28 bg-[#F1E9DC]" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#D97736]" />
            <span className="text-[#D97736] text-xs font-semibold tracking-widest uppercase">Educational Background</span>
            <div className="w-8 h-px bg-[#D97736]" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#292522] mb-4">
            Academic <span className="text-[#D97736]">Foundation</span>
          </h2>
          <p className="text-[#77716A] max-w-xl mx-auto font-body">
            A strong educational foundation in Electrical and Electronics Engineering supporting professional PCB design expertise.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu, i) => {
            const Icon = iconMap[edu.icon] || GraduationCap;
            return (
              <div
                key={edu.id}
                className={`bg-white rounded-2xl border border-[#E8DED1] shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden ${inView ? 'opacity-100 translate-x-0' : i % 2 === 0 ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-[#FBE8D8] flex items-center justify-center flex-shrink-0">
                      <Icon size={26} className="text-[#D97736]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                        <div>
                          <span className="text-[#D97736] text-xs font-semibold tracking-widest uppercase">
                            {edu.id === '01' ? 'B.Tech Degree' : edu.id === '02' ? 'Diploma' : 'Secondary School'}
                          </span>
                          <h3 className="font-heading font-bold text-[#292522] text-lg md:text-xl mt-1">{edu.degree}</h3>
                        </div>
                        {/* Score badge */}
                        <div className="flex-shrink-0 text-center bg-[#FBE8D8] rounded-xl px-4 py-2 self-start">
                          <p className="font-heading font-bold text-[#D97736] text-xl">{edu.score}</p>
                          <p className="text-[#D97736] text-xs">{edu.scoreLabel}</p>
                        </div>
                      </div>

                      <p className="font-semibold text-[#292522] mb-2">{edu.institution}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-[#77716A]">
                        {edu.location && (
                          <div className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-[#D97736]" />
                            <span>{edu.location}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-[#D97736]" />
                          <span>{edu.year}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle size={13} className="text-green-500" />
                          <span className="text-green-600 font-medium">Successfully Completed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-[#D97736] to-[#E9A66F]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

