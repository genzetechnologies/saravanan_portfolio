import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolioData';
import { X, ChevronRight, Eye, Cpu, Layers } from 'lucide-react';

// SVG PCB Illustrations (Vector Schematics)
function AutomotivePCBIllustration() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="320" height="200" rx="8" fill="#F8F4EC" />
      <rect x="20" y="20" width="280" height="160" rx="6" fill="white" stroke="#E8DED1" strokeWidth="1.5" />
      <path d="M 50 60 L 100 60 L 100 100 L 160 100" stroke="#D97736" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M 160 100 L 220 100 L 220 140 L 270 140" stroke="#D97736" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M 50 140 L 100 140 L 100 160" stroke="#E9A66F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <rect x="130" y="70" width="60" height="50" rx="4" fill="#292522" />
      <text x="160" y="99" textAnchor="middle" fill="#D97736" fontSize="8" fontFamily="monospace" fontWeight="bold">PWR</text>
      {[0,1,2].map(i => <line key={i} x1="130" y1={79+i*14} x2="118" y2={79+i*14} stroke="#888" strokeWidth="1.5" />)}
      {[0,1,2].map(i => <line key={i} x1="190" y1={79+i*14} x2="202" y2={79+i*14} stroke="#888" strokeWidth="1.5" />)}
      {[[100,60],[160,100],[220,100]].map(([cx,cy],i) => (
        <g key={i}><circle cx={cx} cy={cy} r="5" stroke="#D97736" strokeWidth="1.5" fill="white" /><circle cx={cx} cy={cy} r="2" fill="#D97736" /></g>
      ))}
      {[0,1].map(i => <rect key={i} x={50+i*180} y="78" width="12" height="20" rx="2" fill="none" stroke="#E9A66F" strokeWidth="1.2" />)}
      <ellipse cx="240" cy="80" rx="18" ry="12" fill="none" stroke="#D97736" strokeWidth="1.5" />
      <text x="240" y="84" textAnchor="middle" fill="#D97736" fontSize="7" fontFamily="monospace">L</text>
      <text x="50" y="55" fill="#D97736" fontSize="7" fontFamily="monospace">12V IN</text>
      <text x="220" y="135" fill="#D97736" fontSize="7" fontFamily="monospace">5V OUT</text>
      <text x="220" y="155" fill="#E9A66F" fontSize="7" fontFamily="monospace">12V OUT</text>
      {[[26,26],[294,26],[26,174],[294,174]].map(([cx,cy],i) => (
        <g key={i}><circle cx={cx} cy={cy} r="5" stroke="#E8DED1" strokeWidth="1.5" fill="white" /><circle cx={cx} cy={cy} r="1.5" fill="#E8DED1" /></g>
      ))}
    </svg>
  );
}

function LoadControlIllustration() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="320" height="200" rx="8" fill="#F1E9DC" />
      <rect x="20" y="20" width="280" height="160" rx="6" fill="white" stroke="#E8DED1" strokeWidth="1.5" />
      <path d="M 40 100 L 280 100" stroke="#D97736" strokeWidth="6" strokeLinecap="round" opacity="0.3" />
      <path d="M 40 115 L 280 115" stroke="#E9A66F" strokeWidth="4" strokeLinecap="round" opacity="0.25" />
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={50+i*62} y="55" width="36" height="30" rx="3" fill="#292522" />
          <text x={68+i*62} y="74" textAnchor="middle" fill="#E9A66F" fontSize="6" fontFamily="monospace">MOS</text>
          <line x1={68+i*62} y1="55" x2={68+i*62} y2="42" stroke="#77716A" strokeWidth="1.5" />
          <line x1={56+i*62} y1="85" x2={56+i*62} y2="98" stroke="#D97736" strokeWidth="2" />
          <line x1={80+i*62} y1="85" x2={80+i*62} y2="98" stroke="#D97736" strokeWidth="2" />
        </g>
      ))}
      {[0,1,2,3,4,5,6].map(i => <circle key={i} cx={55+i*35} cy="130" r="3" stroke="#D97736" strokeWidth="1" fill="white" opacity="0.6" />)}
      <text x="160" y="150" textAnchor="middle" fill="#77716A" fontSize="7" fontFamily="monospace">THERMAL VIA ARRAY</text>
      <rect x="30" y="155" width="260" height="15" rx="2" fill="#E8DED1" opacity="0.5" />
      <text x="160" y="166" textAnchor="middle" fill="#77716A" fontSize="7" fontFamily="monospace">GROUND PLANE</text>
      {[0,1,2,3].map(i => <rect key={i} x={36+i*12} y="30" width="10" height="18" rx="1" fill="none" stroke="#77716A" strokeWidth="1" />)}
      <text x="66" y="27" textAnchor="middle" fill="#77716A" fontSize="6" fontFamily="monospace">J1</text>
      {[[26,26],[294,26],[26,174],[294,174]].map(([cx,cy],i) => (
        <g key={i}><circle cx={cx} cy={cy} r="5" stroke="#E8DED1" strokeWidth="1.5" fill="white" /><circle cx={cx} cy={cy} r="1.5" fill="#E8DED1" /></g>
      ))}
    </svg>
  );
}

function OBDIllustration() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="320" height="200" rx="8" fill="#F8F4EC" />
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i} x={22+i*2} y={22+i*2} width="276" height="156" rx="6" fill="none" stroke="#D97736" strokeWidth="0.5" opacity={0.5-i*0.05} />
      ))}
      <rect x="36" y="36" width="248" height="128" rx="4" fill="white" stroke="#E8DED1" strokeWidth="1" />
      <rect x="50" y="55" width="60" height="40" rx="3" fill="#292522" />
      <text x="80" y="78" textAnchor="middle" fill="#D97736" fontSize="7" fontFamily="monospace">OBD-II</text>
      {[0,1,2,3,4].map(i => <line key={i} x1={55+i*10} y1="55" x2={55+i*10} y2="42" stroke="#77716A" strokeWidth="1" />)}
      <rect x="140" y="50" width="70" height="70" rx="4" fill="#292522" />
      <text x="175" y="88" textAnchor="middle" fill="#E9A66F" fontSize="7" fontFamily="monospace">ECU</text>
      <text x="175" y="98" textAnchor="middle" fill="#E9A66F" fontSize="6" fontFamily="monospace">MCU</text>
      {[0,1,2].map(i => <line key={i} x1="140" y1={58+i*20} x2="128" y2={58+i*20} stroke="#888" strokeWidth="1.2" />)}
      {[0,1,2].map(i => <line key={i} x1="210" y1={58+i*20} x2="222" y2={58+i*20} stroke="#888" strokeWidth="1.2" />)}
      <rect x="235" y="55" width="40" height="30" rx="3" fill="#77716A" opacity="0.8" />
      <text x="255" y="73" textAnchor="middle" fill="white" fontSize="6" fontFamily="monospace">LDO</text>
      <path d="M 110 75 L 140 75" stroke="#D97736" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M 210 75 L 235 75" stroke="#E9A66F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M 175 120 L 175 145 L 100 145" stroke="#D97736" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M 50 130 L 230 130" stroke="#E9A66F" strokeWidth="2" strokeLinecap="round" opacity="0.4" strokeDasharray="4 3" />
      <text x="140" y="142" textAnchor="middle" fill="#E9A66F" fontSize="6" fontFamily="monospace">CAN BUS</text>
      <rect x="38" y="38" width="45" height="18" rx="4" fill="#FBE8D8" />
      <text x="60" y="50" textAnchor="middle" fill="#D97736" fontSize="7" fontFamily="monospace" fontWeight="bold">8-LAYER</text>
      {[[26,26],[294,26],[26,174],[294,174]].map(([cx,cy],i) => (
        <g key={i}><circle cx={cx} cy={cy} r="5" stroke="#E8DED1" strokeWidth="1.5" fill="white" /><circle cx={cx} cy={cy} r="1.5" fill="#E8DED1" /></g>
      ))}
    </svg>
  );
}

const illustrations = [AutomotivePCBIllustration, LoadControlIllustration, OBDIllustration];

function ProjectVisual({ project, index, viewMode, onToggleView }) {
  const Illustration = illustrations[index];

  return (
    <div className="h-52 overflow-hidden bg-[#292522] relative group/visual">
      {viewMode === 'photo' && project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/visual:scale-110"
        />
      ) : (
        <div className="w-full h-full bg-[#F8F4EC]">
          <Illustration />
        </div>
      )}

      {/* Project ID Tag */}
      <div className="absolute top-3 left-3 bg-[#D97736] text-white text-xs font-bold px-2.5 py-1 rounded-lg font-heading shadow-sm z-10">
        {project.id}
      </div>

      {/* Photo / Schematic View Toggle Button */}
      {project.image && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleView();
          }}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-md hover:bg-white text-[#292522] text-xs font-medium px-2.5 py-1 rounded-lg border border-[#E8DED1] shadow-sm flex items-center gap-1.5 transition-colors z-10"
          title={`Switch to ${viewMode === 'photo' ? 'Schematic Diagram' : 'Hardware Photo'}`}
        >
          {viewMode === 'photo' ? (
            <>
              <Cpu size={13} className="text-[#D97736]" />
              <span>Schematic</span>
            </>
          ) : (
            <>
              <Eye size={13} className="text-[#D97736]" />
              <span>Photo</span>
            </>
          )}
        </button>
      )}

      {/* Subtle overlay gradient on photos */}
      {viewMode === 'photo' && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const [modalView, setModalView] = useState('photo');
  const index = parseInt(project.id, 10) - 1;
  const Illustration = illustrations[index];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#E8DED1] px-6 py-4 flex items-center justify-between rounded-t-3xl z-10">
          <div>
            <span className="text-[#D97736] text-xs font-semibold tracking-widest">PROJECT {project.id}</span>
            <h3 className="font-heading font-bold text-[#292522] text-xl">{project.title}</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-[#F1E9DC] transition-colors" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Visual Box with Tabs */}
        <div className="p-6 bg-[#F8F4EC] border-b border-[#E8DED1]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#77716A]">Project Representation</span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setModalView('photo')}
                className={`text-xs px-3 py-1 rounded-lg font-medium transition-colors ${
                  modalView === 'photo'
                    ? 'bg-[#D97736] text-white shadow-sm'
                    : 'bg-white border border-[#E8DED1] text-[#77716A] hover:text-[#292522]'
                }`}
              >
                Hardware Board
              </button>
              <button
                type="button"
                onClick={() => setModalView('schematic')}
                className={`text-xs px-3 py-1 rounded-lg font-medium transition-colors ${
                  modalView === 'schematic'
                    ? 'bg-[#D97736] text-white shadow-sm'
                    : 'bg-white border border-[#E8DED1] text-[#77716A] hover:text-[#292522]'
                }`}
              >
                Schematic Layout
              </button>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-64 md:h-72 bg-black relative shadow-inner">
            {modalView === 'photo' && project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#F8F4EC]">
                <Illustration />
              </div>
            )}
          </div>
          <p className="text-center text-xs text-[#77716A] mt-3 italic">
            {modalView === 'photo'
              ? 'Photorealistic PCB design render — representative hardware board layout.'
              : 'Illustrative schematic architecture & functional routing diagram.'}
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-[#77716A] leading-relaxed mb-6">{project.description}</p>

          <h4 className="font-heading font-bold text-[#292522] mb-4">Key Technical Features</h4>
          <ul className="space-y-3 mb-6">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-[#77716A] text-sm">
                <ChevronRight size={16} className="text-[#D97736] flex-shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-[#FBE8D8] text-[#D97736] text-xs font-semibold rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewModes, setViewModes] = useState({
    '01': 'photo',
    '02': 'photo',
    '03': 'photo',
  });

  const toggleCardView = (id) => {
    setViewModes((prev) => ({
      ...prev,
      [id]: prev[id] === 'photo' ? 'schematic' : 'photo',
    }));
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F8F4EC]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#D97736]" />
            <span className="text-[#D97736] text-xs font-semibold tracking-widest uppercase">Selected Projects</span>
            <div className="w-8 h-px bg-[#D97736]" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#292522] mb-4">
            Engineering <span className="text-[#D97736]">Projects</span>
          </h2>
          <p className="text-[#77716A] max-w-xl mx-auto font-body">
            Representative PCB design projects showcasing technical expertise in automotive electronics, high-current routing, and power systems.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, i) => {
            const currentMode = viewModes[project.id] || 'photo';

            return (
              <div
                key={project.id}
                className={`bg-white rounded-2xl border border-[#E8DED1] overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Visual Header (Photo or Schematic) */}
                <ProjectVisual
                  project={project}
                  index={i}
                  viewMode={currentMode}
                  onToggleView={() => toggleCardView(project.id)}
                />

                {/* Content */}
                <div className="p-6">
                  <p className="text-[#D97736] text-xs font-semibold tracking-wider uppercase mb-1">{project.subtitle}</p>
                  <h3 className="font-heading font-bold text-[#292522] text-xl mb-3">{project.title}</h3>
                  <p className="text-[#77716A] text-sm leading-relaxed mb-5">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-[#FBE8D8] text-[#D97736] text-xs font-medium rounded-lg">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 bg-[#F1E9DC] text-[#77716A] text-xs font-medium rounded-lg">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Details */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-3 border-2 border-[#D97736] text-[#D97736] font-semibold rounded-xl hover:bg-[#D97736] hover:text-white transition-all duration-200 group"
                  >
                    View Details
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[#77716A] text-xs mt-8 italic">
          * PCB hardware images and schematic diagrams are professional design representations showcasing engineering methodologies.
        </p>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
