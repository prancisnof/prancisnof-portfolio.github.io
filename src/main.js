// Constants for the portfolio
const PROJECTS = [
  {
    id: 'nexus-core',
    title: 'Nexus Core',
    category: 'Distributed Systems',
    description: 'A high-performance distributed task scheduler built for microservices orchestration. Features sub-millisecond latency and automatic failover.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1000&auto=format&fit=crop',
    tags: ['Rust', 'gRPC', 'Redis'],
    stats: [{ label: 'THROUGHPUT', value: '100k req/s' }, { label: 'LATENCY', value: '< 0.5ms' }],
    github: '#',
    demo: '#'
  },
  {
    id: 'ciphershield',
    title: 'CipherShield Vault',
    category: 'Security',
    description: 'Zero-knowledge encryption layer for cloud storage providers. Implements AES-256-GCM with client-side key management.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
    tags: ['TypeScript', 'WebCrypto', 'AWS'],
    github: '#',
    demo: '#'
  },
  {
    id: 'quantum-viz',
    title: 'Quantum Viz',
    category: 'Data Visualization',
    description: 'Real-time 3D visualization engine for complex quantum state simulations. Built with WebGL and custom shaders.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop',
    tags: ['Three.js', 'GLSL', 'React'],
    github: '#',
    demo: '#'
  }
];

const CERTIFICATIONS = [
  {
    id: 'aws-saa',
    title: 'AWS Solutions Architect Associate',
    category: 'Cloud Architecture',
    date: 'Jan 2024',
    description: 'Expertise in designing distributed systems on AWS, focusing on scalability, security, and cost-optimization.',
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=500&auto=format&fit=crop',
    idNumber: 'AWS-SAA-12345',
    verifyUrl: '#'
  },
  {
    id: 'google-data',
    title: 'Google Professional Data Engineer',
    category: 'Data Engineering',
    date: 'Dec 2023',
    description: 'Specialization in building data processing systems, machine learning models, and BigQuery optimization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop',
    idNumber: 'GCP-PDE-67890',
    verifyUrl: '#'
  }
];

const COURSE_GROUPS = [
  {
    title: 'Systems & Architecture',
    courses: [
      { name: 'Operating Systems', code: 'CS140' },
      { name: 'Distributed Systems', code: 'CS244B' },
      { name: 'Computer Architecture', code: 'CS110' }
    ]
  },
  {
    title: 'AI & Algorithms',
    courses: [
      { name: 'Machine Learning', code: 'CS229' },
      { name: 'Artificial Intelligence', code: 'CS221' },
      { name: 'Design of Algorithms', code: 'CS161' }
    ]
  },
  {
    title: 'Theory & Logic',
    courses: [
      { name: 'Compilers', code: 'CS143' },
      { name: 'Complexity Theory', code: 'CS154' },
      { name: 'Discrete Math', code: 'CS103' }
    ]
  }
];

// Icons as SVG strings
const ICONS = {
  Brain: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.248 4 4 0 0 0 6.953 1.857 4 4 0 0 0 6.953-1.857 4 4 0 0 0 .52-8.248 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5z"/><path d="M9 13a3 3 0 1 0 6 0"/></svg>`,
  Users: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  Lightbulb: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
  MessageSquare: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  Award: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  GraduationCap: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  Code: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  ExternalLink: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  PlayCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`,
  Terminal: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  Verified: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>`,
  Calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  Link: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  Shield: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  Cloud: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19c3.037 0 5.5-2.463 5.5-5.5 0-2.799-2.084-5.11-4.817-5.45A7 7 0 0 0 4.5 11.5c0 .32.022.634.062.942C2.427 13.245 1 15.204 1 17.5 1 20.537 3.463 23 6.5 23h11"/></svg>`,
  Database: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>`,
  Cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
  Mail: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  Share2: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  Send: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  Github: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  Linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  Twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`
};

// State management
let activeTab = 'Home';

function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="min-h-screen flex flex-col bg-background text-on-background">
      ${renderNavbar()}
      <main class="flex-grow">
        ${renderContent()}
      </main>
      ${renderFooter()}
    </div>
  `;
  attachEventListeners();
}

function renderNavbar() {
  const tabs = ['Home', 'Education', 'Projects', 'Certifications', 'Contact'];
  return `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/10">
      <div class="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div class="flex items-center gap-3 group cursor-pointer" onclick="setActiveTab('Home')">
          <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-on-primary font-headline font-bold text-xl group-hover:rotate-12 transition-transform">L</div>
          <div class="hidden sm:block">
            <div class="text-sm font-bold tracking-tighter leading-none">LOGICAL</div>
            <div class="text-[10px] font-label text-primary tracking-[0.3em] leading-none mt-1">ARCHITECT</div>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-1">
          ${tabs.map(tab => `
            <button 
              onclick="setActiveTab('${tab}')"
              class="px-5 py-2 rounded-full text-sm font-label transition-all ${activeTab === tab ? 'bg-primary text-on-primary font-bold shadow-lg shadow-primary/20' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}"
            >
              ${tab.toUpperCase()}
            </button>
          `).join('')}
        </div>
        <button class="md:hidden p-2 text-on-surface">
          ${ICONS.Terminal}
        </button>
      </div>
    </nav>
  `;
}

function renderFooter() {
  return `
    <footer class="w-full py-12 mt-20 bg-slate-950 border-t border-outline-variant/10">
      <div class="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div class="mb-8 md:mb-0 text-center md:text-left">
          <div class="text-lg font-bold text-on-surface font-headline mb-2">Logical Architect</div>
          <p class="font-body text-sm text-on-surface-variant">© 2024 Logical Architect. Built with Precision.</p>
        </div>
        <div class="flex space-x-8">
          ${['GitHub', 'LinkedIn', 'Email', 'Source Code'].map(link => `
            <a href="#" class="text-on-surface-variant hover:text-primary transition-colors font-body text-sm">${link}</a>
          `).join('')}
        </div>
      </div>
    </footer>
  `;
}

function renderContent() {
  switch (activeTab) {
    case 'Home':
    case 'About':
      return renderAbout();
    case 'Education':
      return renderEducation();
    case 'Projects':
      return renderProjects();
    case 'Certifications':
      return renderCertifications();
    case 'Contact':
      return renderContact();
    default:
      return renderAbout();
  }
}

function renderAbout() {
  const skills = [
    { icon: 'Brain', title: 'Problem Solving', desc: 'Deconstructing complex bottlenecks into manageable, iterative solutions.' },
    { icon: 'Users', title: 'Collaboration', desc: 'Bridging the gap between technical constraints and stakeholder vision.' },
    { icon: 'Lightbulb', title: 'Adaptability', desc: 'Thriving in the rapid flux of emerging frameworks and paradigms.' },
    { icon: 'MessageSquare', title: 'Communication', desc: "Articulating 'why' behind the 'how' for cross-functional alignment." },
  ];

  return `
    <div class="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto animate-fade-in">
      <header class="mb-20">
        <span class="font-label text-primary tracking-widest uppercase text-xs mb-4 block">The Narrative</span>
        <h1 class="font-headline text-5xl md:text-7xl font-bold text-on-surface leading-tight tracking-tighter">
          Engineering <br /> <span class="text-primary">Elegance</span> in Logic.
        </h1>
      </header>

      <section class="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div class="space-y-12">
          <div class="space-y-6">
            <h2 class="font-headline text-2xl font-semibold text-primary">The Spark</h2>
            <p class="font-body text-lg leading-relaxed text-on-surface-variant">
              My journey didn't start with complex algorithms, but with a fascination for how simple systems could produce intricate outcomes. As a Computer Science graduate, I’ve transitioned from the theoretical halls of academia to the pragmatic landscape of professional software development. I don't just write code; I design systems that solve human problems with mathematical precision.
            </p>
          </div>

          <div class="bg-surface-container p-8 rounded-xl border-l-4 border-primary">
            <h3 class="font-headline text-xl mb-4 text-on-surface">Academics to Reality</h3>
            <p class="font-body text-on-surface-variant italic">
              "The transition from solving textbook problems to architecting scalable solutions taught me that the most elegant code is often the code you decide not to write."
            </p>
          </div>

          <div class="space-y-8">
            <h2 class="font-headline text-2xl font-semibold text-primary">Beyond the Syntax</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${skills.map(skill => `
                <div class="bg-surface-container-low p-6 rounded-lg transition-all hover:bg-surface-container-high group">
                  <div class="text-primary mb-3">${ICONS[skill.icon]}</div>
                  <h4 class="font-headline text-lg font-bold mb-2">${skill.title}</h4>
                  <p class="font-label text-sm text-on-surface-variant">${skill.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="space-y-8">
          <div class="relative group aspect-[4/5] rounded-xl overflow-hidden bg-surface-container">
            <img 
              alt="Professional portrait" 
              class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
              referrerPolicy="no-referrer"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-surface-dim/90 via-transparent to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md bg-surface-bright/30 rounded-lg border border-outline-variant/20">
              <p class="font-label text-xs text-primary mb-1 uppercase tracking-widest">Currently Building</p>
              <p class="font-headline text-sm font-medium">Distributed Microservices Architecture</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderEducation() {
  return `
    <div class="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto animate-fade-in">
      <header class="mb-24 flex flex-col md:flex-row items-baseline gap-4">
        <h1 class="text-6xl md:text-8xl font-headline font-bold text-on-surface tracking-tighter leading-none">
          Academic<br /><span class="text-primary">Foundations</span>
        </h1>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <section class="md:col-span-8 bg-surface-container rounded-xl p-8 relative overflow-hidden group border border-outline-variant/10">
          <div class="relative z-10">
            <span class="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4 block">Major Institution</span>
            <h2 class="text-4xl font-headline font-bold text-on-surface mb-2">Stanford University</h2>
            <p class="text-xl text-on-surface-variant font-body mb-8">Bachelor of Science in Computer Science</p>
            <div class="flex flex-wrap gap-12 mt-auto">
              <div>
                <p class="font-label text-xs uppercase text-outline mb-1">Cumulative GPA</p>
                <p class="text-3xl font-headline font-bold text-tertiary">3.92 / 4.0</p>
              </div>
              <div>
                <p class="font-label text-xs uppercase text-outline mb-1">Duration</p>
                <p class="text-3xl font-headline font-bold text-on-surface">2020 — 2024</p>
              </div>
            </div>
          </div>
        </section>

        <section class="md:col-span-12 bg-surface-container-low border border-outline-variant/10 rounded-xl p-8 mt-6">
          <h3 class="font-headline text-3xl font-bold mb-10">Core Technical Mastery</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            ${COURSE_GROUPS.map(group => `
              <div class="space-y-4">
                <div class="flex items-center gap-2 border-b border-outline-variant/20 pb-2">
                  <span class="font-label text-xs font-bold uppercase tracking-widest text-outline">${group.title}</span>
                </div>
                <div class="space-y-3">
                  ${group.courses.map(course => `
                    <div class="flex justify-between items-start">
                      <span class="font-body font-medium">${course.name}</span>
                      <span class="text-[10px] px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label uppercase">${course.code}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderProjects() {
  return `
    <div class="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto animate-fade-in">
      <header class="mb-20">
        <h1 class="font-headline text-5xl md:text-7xl font-bold text-on-background leading-none mb-6">
          Engineered <br /> <span class="text-primary">Solutions.</span>
        </h1>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${PROJECTS.map(project => `
          <div class="bg-surface-container rounded-xl overflow-hidden group hover:bg-surface-container-high transition-all duration-500 border border-outline-variant/10">
            <div class="h-48 overflow-hidden relative">
              <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="${project.image}" alt="${project.title}" referrerPolicy="no-referrer" />
            </div>
            <div class="p-8">
              <span class="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-label uppercase tracking-wider mb-4 inline-block">${project.category}</span>
              <h3 class="font-headline text-2xl font-bold mb-4 text-on-surface">${project.title}</h3>
              <p class="font-body text-on-surface-variant text-sm leading-relaxed mb-6">${project.description}</p>
              <div class="flex flex-wrap gap-2 mb-6">
                ${project.tags.map(tag => `<span class="text-[10px] font-label text-outline uppercase tracking-widest bg-surface-container-low px-2 py-1 rounded border border-outline-variant/20">${tag}</span>`).join('')}
              </div>
              <div class="flex gap-4 pt-4 border-t border-outline-variant/10">
                <a href="${project.github}" class="text-primary font-label text-sm font-bold flex items-center gap-2">GITHUB ${ICONS.ExternalLink}</a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderCertifications() {
  return `
    <div class="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto animate-fade-in">
      <header class="mb-20">
        <h1 class="font-headline text-5xl md:text-7xl font-bold text-on-surface tracking-tighter mb-6">
          Technical <span class="text-primary">Mastery</span>
        </h1>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${CERTIFICATIONS.map(cert => `
          <div class="bg-surface-container border border-outline-variant/15 rounded-xl p-8 flex flex-col md:flex-row gap-6">
            <div class="flex-1 space-y-4">
              <span class="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-label uppercase tracking-widest">${cert.category}</span>
              <h3 class="font-headline text-2xl font-bold text-on-surface">${cert.title}</h3>
              <p class="font-body text-on-surface-variant text-sm">${cert.description}</p>
              <div class="font-label text-xs text-on-surface-variant">Issued: ${cert.date}</div>
            </div>
            <div class="w-24 h-24 flex-shrink-0">
              <img src="${cert.image}" alt="${cert.title}" class="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderContact() {
  return `
    <div class="pt-32 pb-20 px-6 max-w-7xl mx-auto animate-fade-in">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div class="lg:col-span-5 space-y-12">
          <h1 class="text-5xl md:text-7xl font-headline font-bold text-on-surface leading-tight">
            Let's build the <span class="text-primary">next system</span> together.
          </h1>
          <div class="space-y-6">
            <p class="text-on-surface-variant text-lg font-body">Drop me a line and let's start a conversation.</p>
            <div class="flex flex-col gap-4">
              <a href="mailto:hello@logicalarchitect.com" class="flex items-center gap-4 text-on-surface hover:text-primary transition-colors">
                ${ICONS.Mail} <span>hello@logicalarchitect.com</span>
              </a>
              <a href="#" class="flex items-center gap-4 text-on-surface hover:text-primary transition-colors">
                ${ICONS.Linkedin} <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
        <div class="lg:col-span-7">
          <div class="bg-surface-container-low rounded-2xl p-8 md:p-12 border border-outline-variant/5 shadow-2xl">
            <form class="space-y-8" onsubmit="event.preventDefault(); alert('Message sent (simulated)');">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input class="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:border-primary outline-none" placeholder="Full Name" type="text" />
                <input class="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:border-primary outline-none" placeholder="Email Address" type="email" />
              </div>
              <textarea class="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:border-primary outline-none resize-none" placeholder="Your Message" rows="4"></textarea>
              <button class="bg-primary text-on-primary font-headline font-bold px-10 py-4 rounded-full flex items-center gap-3 hover:scale-105 transition-all">
                Send Transmission ${ICONS.Send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Global functions for event handling
window.setActiveTab = (tab) => {
  activeTab = tab;
  renderApp();
  window.scrollTo(0, 0);
};

function attachEventListeners() {
  // Add any specific non-inline event listeners here if needed
}

// Initial render
document.addEventListener('DOMContentLoaded', renderApp);
