import { motion } from 'motion/react';
import { ExternalLink, PlayCircle, Code, Terminal } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function Projects() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <header className="mb-20">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-[1px] w-12 bg-primary"></span>
          <span className="font-label text-sm uppercase tracking-[0.2em] text-primary">Portfolio Archive</span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-background leading-none mb-6">
          Engineered <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">Solutions.</span>
        </h1>
        <p className="font-body text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          A curated selection of technical architectures, ranging from distributed systems to full-stack applications. Each project is a testament to precision and scalable design.
        </p>
      </header>

      <div className="grid grid-cols-12 gap-6">
        {PROJECTS.map((project, i) => {
          const isLarge = i === 0;
          return (
            <div 
              key={project.id}
              className={`${
                isLarge ? 'col-span-12 lg:col-span-8' : 'col-span-12 md:col-span-6 lg:col-span-4'
              } bg-surface-container rounded-xl overflow-hidden group hover:bg-surface-container-high transition-all duration-500 border border-outline-variant/10`}
            >
              <div className={`flex flex-col ${isLarge ? 'md:flex-row h-full' : ''}`}>
                <div className={`${isLarge ? 'md:w-1/2' : 'h-48'} overflow-hidden relative`}>
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-60 md:hidden"></div>
                </div>
                <div className={`${isLarge ? 'md:w-1/2 p-8 md:p-10' : 'p-8'} flex flex-col justify-between`}>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-label uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <h3 className={`font-headline ${isLarge ? 'text-3xl' : 'text-2xl'} font-bold mb-4 text-on-surface group-hover:text-primary transition-colors`}>
                      {project.title}
                    </h3>
                    <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-8">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-label text-outline uppercase tracking-widest bg-surface-container-low px-2 py-1 rounded border border-outline-variant/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.stats && (
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {project.stats.map(stat => (
                        <div key={stat.label} className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/10">
                          <p className="text-[10px] font-label text-outline uppercase mb-1">{stat.label}</p>
                          <p className="text-on-surface font-headline font-bold">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-4 pt-4 border-t border-outline-variant/10">
                    {project.github && (
                      <a className="flex items-center gap-2 text-primary font-label text-sm font-bold hover:gap-4 transition-all" href={project.github}>
                        <span>GITHUB</span>
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a className="flex items-center gap-2 text-on-surface-variant font-label text-sm font-bold hover:text-on-surface transition-all" href={project.demo}>
                        <span>LIVE DEMO</span>
                        <PlayCircle size={16} />
                      </a>
                    )}
                    {!project.github && !project.demo && (
                      <button className="bg-primary/10 text-primary px-4 py-1 rounded-full font-label text-xs font-bold hover:bg-primary hover:text-on-primary-fixed transition-all">
                        VIEW PROJECT
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <section className="mt-32 p-12 bg-surface-container-low rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <Terminal size={200} />
        </div>
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-4xl font-bold mb-6 text-on-background">Modern Stack <br />Architectures</h2>
            <p className="font-body text-on-surface-variant mb-8 leading-relaxed">
              I specialize in building modular systems that bridge the gap between high-level user experiences and low-level hardware performance.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-label text-outline mb-1">
                  <span>SYSTEMS DESIGN</span>
                  <span>95%</span>
                </div>
                <div className="h-1 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[95%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-label text-outline mb-1">
                  <span>DATA PIPELINES</span>
                  <span>88%</span>
                </div>
                <div className="h-1 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[88%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-highest p-8 rounded-xl border border-outline-variant/20 shadow-2xl">
            <pre className="font-mono text-sm text-tertiary-dim overflow-x-auto">
              <code>
{`// The Core Philosophy
class LogicalArchitect {
  constructor() {
    this.scalability = true;
    this.precision = 1.0;
  }

  async deploy(project) {
    await optimize(project);
    return "Infrastructure Ready";
  }
}`}
              </code>
            </pre>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
