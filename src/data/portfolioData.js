// Central data file for Saravanan J's portfolio

export const personalInfo = {
  name: "Saravanan J",
  designation: "PCB Design Engineer",
  specialization: "Automotive Power Electronics",
  location: "Chengalpattu, Tamil Nadu, India",
  email: "saravanan174922@gmail.com",
  phone: "+91 8072023856",
  profilePhoto: "/saravanan-profile.jpg",
  resume: "/resume/Saravanan_PCB_Resume.pdf",
  heroTagline: "PCB DESIGN ENGINEER · AUTOMOTIVE POWER ELECTRONICS",
  heroHeading: "Engineering Precision.\nDesigning Intelligent Connections.",
  heroIntro:
    "Experienced PCB Design Engineer specializing in multilayer PCB design, high-speed routing, automotive electronics and power electronics solutions. Passionate about developing reliable, efficient and precision-driven electronic systems.",
  aboutIntro:
    "I am Saravanan J, a PCB Design Engineer with professional experience in automotive electronics, multilayer PCB design, power electronics and high-speed circuit development. My experience includes schematic capture, PCB layout, component creation, complex routing and engineering design processes. I have worked on consumer electronics, automotive and industrial products, with exposure to complex multilayer PCB designs, high-speed interfaces, EMI/EMC compliance and manufacturing requirements. I focus on developing reliable and efficient PCB solutions while maintaining quality, precision and engineering standards.",
};

export const skills = [
  {
    category: "PCB Design",
    icon: "Layers",
    color: "#D97736",
    items: [
      "Multilayer PCB Design",
      "High-Speed PCB Design",
      "HDI PCB Design",
      "Analog PCB Design",
      "Digital PCB Design",
      "Mixed-Signal PCB Design",
      "Power Electronics PCB Design",
      "Rigid and Flex PCB Design",
    ],
  },
  {
    category: "High-Speed Interfaces",
    icon: "Zap",
    color: "#E9A66F",
    items: ["DDR", "SRAM", "PCIe", "SerDes", "USB", "Ethernet", "LVDS", "HDMI", "DISPLAY PORT"],
  },
  {
    category: "Engineering",
    icon: "Settings",
    color: "#D97736",
    items: [
      "SI/PI Compliance",
      "EMI/EMC Compliance",
      "Design for Manufacturing (DFM)",
      "Design for Testing (DFT)",
      "Impedance Control",
      "RF Design",
      "PCB Manufacturing",
      "PCB Assembly Processes",
    ],
  },
  {
    category: "Software Tools",
    icon: "Monitor",
    color: "#E9A66F",
    items: ["Altium Designer", "Cadence Allegro", "Mentor Graphics-PADS"],
  },
];

export const experience = [
  {
    id: "01",
    company: "Sona BLW Precision Forgings Ltd (Sona Comstar)",
    designation: "PCB Design Engineer – Automotive Power Electronics",
    duration: "January 2026 – Present",
    location: "Chengalpattu",
    current: true,
    description: "Working in the automotive power electronics domain, contributing to precision PCB design for next-generation automotive systems.",
    responsibilities: [
      "Automotive power electronics PCB design",
      "High-voltage PCB design (up to 690V DC)",
      "3-Phase AC system integration",
      "Stack-up and impedance control",
      "High-voltage creepage and clearance compliance",
      "EMI/EMC handling for automotive standards",
    ],
  },
  {
    id: "02",
    company: "Qmax Systems India Private Limited",
    designation: "PCB Design Engineer",
    duration: "August 2021 – December 2025",
    location: "Chennai",
    current: false,
    description: "Delivered comprehensive PCB design solutions across consumer electronics, automotive and industrial product domains.",
    responsibilities: [
      "Processing engineering change requests",
      "Schematic capture and PCB layout",
      "Component creation using Altium Designer, Allegro and PADS",
      "Developing multilayer PCB layouts",
      "Designing complex multilayer boards",
      "High-speed routing",
      "Analog and digital design",
      "Rigid and flex substrate technologies",
      "RF design techniques",
      "Understanding PCB and PCBA manufacturing processes",
      "Working with electrical, mechanical and manufacturing engineering teams",
    ],
  },
];

export const projects = [
  {
    id: "01",
    title: "Automotive PCB Design",
    subtitle: "Power Control System",
    image: "/images/automotive-pcb.jpg",
    description:
      "Designed an automotive power control system to efficiently distribute and regulate electrical power while ensuring safety, reliability and protection of electrical loads.",
    tags: ["DC-DC Converter", "Power Rails", "Overcurrent Protection", "Automotive", "Thermal Design"],
    features: [
      "DC-DC Buck/Boost converters",
      "Regulated 5V and 12V power rails",
      "Overcurrent protection",
      "Short-circuit protection",
      "Reverse polarity protection",
      "Thermal protection",
    ],
    color: "#D97736",
    bgColor: "#FBE8D8",
  },
  {
    id: "02",
    title: "Load Control Unit",
    subtitle: "Multi-Load Management System",
    image: "/images/load-control-unit.jpg",
    description:
      "Designed a Load Control Unit to monitor, prioritize and control multiple electrical loads in automotive and industrial systems.",
    tags: ["High-Current Routing", "Thermal Vias", "Power Grounding", "EMI Compliance", "Filtering"],
    features: [
      "High-current PCB routing",
      "Wide copper tracks",
      "Thermal vias",
      "Power and signal grounding strategy",
      "Thermal management",
      "Decoupling and filtering",
      "EMI considerations",
    ],
    color: "#B85E1E",
    bgColor: "#F1E9DC",
  },
  {
    id: "03",
    title: "On-Board Diagnostics (OBD)",
    subtitle: "8-Layer Automotive OBD System",
    image: "/images/obd-pcb.jpg",
    description:
      "Designed a PCB for an On-Board Diagnostics system, ensuring reliable communication with the vehicle ECU and stable power management under automotive operating conditions.",
    tags: ["8-Layer PCB", "ECU Interface", "Reverse Polarity", "Load Dump Protection", "Cranking"],
    features: [
      "8-layer PCB architecture",
      "12V to 5V/3.3V regulation",
      "Reverse polarity protection",
      "Load dump protection",
      "Cranking protection",
      "Thermal management",
      "Component placement optimization",
    ],
    color: "#77716A",
    bgColor: "#F8F4EC",
  },
];

export const highlights = [
  { value: 20, unit: "Layers", label: "Maximum PCB Layer Count", suffix: "" },
  { value: 800, unit: "Pins", label: "Complex BGA Routing Experience", suffix: "" },
  { value: "140 × 280", unit: "mm", label: "Board Size Highlight", suffix: "" },
  { value: 90, unit: "%", label: "Component Density Highlight", suffix: "" },
  { value: 690, unit: "V DC", label: "High-Voltage Design", suffix: "" },
];

export const highlightBadges = [
  "3-Phase AC Systems",
  "Stack-up & Impedance Control",
  "EMI/EMC Handling",
  "High-Voltage Creepage & Clearance",
];

export const education = [
  {
    id: "01",
    degree: "B.Tech – Electrical and Electronics Engineering",
    institution: "SRM Institute of Science and Technology",
    location: "Kattankulathur, Chengalpattu",
    year: "Successfully Completed",
    score: "8.5 CGPA",
    scoreLabel: "CGPA",
    status: "completed",
    icon: "GraduationCap",
  },
  {
    id: "02",
    degree: "Diploma in Electrical and Electronics Engineering",
    institution: "Sri Durga Devi Polytechnic College",
    location: "",
    year: "2021",
    score: "98%",
    scoreLabel: "Percentage",
    status: "completed",
    icon: "Award",
  },
  {
    id: "03",
    degree: "SSLC",
    institution: "St. Gabriel's Higher Secondary School",
    location: "Broadway, Chennai",
    year: "2018",
    score: "88.4%",
    scoreLabel: "Percentage",
    status: "completed",
    icon: "BookOpen",
  },
];

export const strengths = [
  { title: "Problem Solving", icon: "Brain", desc: "Analytical approach to complex engineering challenges" },
  { title: "Teamwork", icon: "Users", desc: "Collaborative cross-functional engineering teams" },
  { title: "Innovative Thinking", icon: "Lightbulb", desc: "Creative solutions for precision design requirements" },
  { title: "Critical Thinking", icon: "Target", desc: "Methodical analysis and decision-making" },
  { title: "Self-Driven Approach", icon: "Rocket", desc: "Proactive ownership of engineering deliverables" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

