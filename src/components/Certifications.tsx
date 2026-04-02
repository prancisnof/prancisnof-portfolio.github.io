import { motion } from 'motion/react';
import { Verified, Calendar, Link as LinkIcon, Shield, Terminal, Cloud, Database, Cpu } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

export default function Certifications() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <header className="mb-20">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface tracking-tighter mb-6">
          Technical <span className="text-primary">Mastery</span>
        </h1>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          An inventory of specialized knowledge, industry-recognized validations, and the technical stack that powers my architectural logic.
        </p>
      </header>

      <section className="mb-32">
        <div className="flex items-center gap-4 mb-10">
          <Verified className="text-primary" size={24} />
          <h2 className="font-headline text-3xl font-bold uppercase tracking-widest text-on-surface">Certifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => {
            const isLarge = i === 0;
            return (
              <div 
                key={cert.id}
                className={`${
                  isLarge ? 'col-span-1 md:col-span-2' : 'col-span-1'
                } group relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/15 p-8 transition-all hover:bg-surface-container-high`}
              >
                <div className="flex flex-col md:flex-row justify-between gap-6 h-full">
                  <div className="space-y-4 flex-1">
                    <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-label uppercase tracking-widest">
                      {cert.category}
                    </span>
                    <h3 className={`font-headline ${isLarge ? 'text-3xl' : 'text-2xl'} font-bold text-on-surface`}>
                      {cert.title}
                    </h3>
                    <p className="font-body text-on-surface-variant text-sm max-w-md">
                      {cert.description}
                    </p>
                    <div className="flex items-center gap-6 mt-4">
                      <div className="flex items-center gap-2 text-on-surface-variant font-label text-xs">
                        <Calendar size={14} />
                        Issued: {cert.date}
                      </div>
                      {cert.verifyUrl && (
                        <div className="flex items-center gap-2 text-primary font-label text-xs cursor-pointer">
                          <LinkIcon size={14} />
                          Verify Credential
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="relative w-32 h-32 flex-shrink-0 mx-auto md:mx-0">
                    <img 
                      alt={cert.title} 
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      src={cert.image}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                {cert.idNumber && (
                  <div className="mt-8 flex justify-between items-end">
                    <div className="font-label text-[10px] uppercase tracking-tighter text-outline">ID: {cert.idNumber}</div>
                  </div>
                )}
                {cert.expiry && (
                  <div className="mt-8 flex justify-between items-end">
                    <div className="font-label text-[10px] uppercase tracking-tighter text-outline">Expires: {cert.expiry}</div>
                    <Shield className="text-primary opacity-30 group-hover:opacity-100 transition-opacity" size={24} />
                  </div>
                )}
              </div>
            );
          })}
          
          <div className="col-span-1 md:col-span-2 group bg-surface-container-low border border-outline-variant/15 rounded-xl p-8 flex items-center gap-8 transition-all hover:bg-surface-container">
            <div className="hidden sm:block w-24 h-24 rounded-lg bg-surface-container-highest flex items-center justify-center">
              <Terminal className="text-outline" size={40} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline text-xl font-bold text-on-surface">Meta Front-End Developer</h3>
                <span className="text-xs font-label text-on-surface-variant">Nov 2023</span>
              </div>
              <p className="font-body text-sm text-on-surface-variant">In-depth specialization in React, Version Control, and UI/UX design principles for modern web architectures.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <Cpu className="text-primary" size={24} />
          <h2 className="font-headline text-3xl font-bold uppercase tracking-widest text-on-surface">Technical Stack</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h4 className="font-headline text-sm font-bold text-primary uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-primary/30"></span> Core Languages
              </h4>
              <div className="space-y-6">
                {[
                  { name: 'Python (Advanced)', level: '95%' },
                  { name: 'JavaScript / TypeScript', level: '88%' },
                  { name: 'Java / Spring Boot', level: '75%' }
                ].map(skill => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-label text-on-surface font-semibold">{skill.name}</span>
                      <span className="font-label text-xs text-primary/60">{skill.level}</span>
                    </div>
                    <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary-dim transition-all duration-1000"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-headline text-sm font-bold text-primary uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-primary/30"></span> Frameworks & Libraries
              </h4>
              <div className="flex flex-wrap gap-3">
                {['React.js', 'Next.js', 'Django', 'Tailwind CSS', 'Node.js', 'FastAPI', 'TensorFlow'].map(tech => (
                  <span key={tech} className="px-5 py-2 rounded-full border border-outline-variant/30 text-on-surface-variant font-label text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-surface-container rounded-xl p-6 border border-outline-variant/15">
              <div className="flex items-center gap-3 mb-6">
                <Cloud className="text-primary" size={24} />
                <h5 className="font-headline font-bold text-on-surface">Infrastructure</h5>
              </div>
              <ul className="space-y-4">
                {[
                  { name: 'Amazon Web Services', level: 'Expert' },
                  { name: 'Docker & K8s', level: 'Intermediate' },
                  { name: 'CI/CD (GitHub Actions)', level: 'Advanced' }
                ].map(item => (
                  <li key={item.name} className="flex justify-between items-center text-sm font-label">
                    <span className="text-on-surface-variant">{item.name}</span>
                    <span className="text-primary font-bold">{item.level}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-container-high rounded-xl p-6 border border-outline-variant/15 flex flex-col items-center justify-center text-center">
              <Database className="text-primary mb-3" size={32} />
              <h6 className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface mb-2">Databases</h6>
              <p className="text-[10px] font-label text-on-surface-variant">PostgreSQL, MongoDB, Redis</p>
            </div>
            <div className="bg-surface-container-high rounded-xl p-6 border border-outline-variant/15 flex flex-col items-center justify-center text-center">
              <Cpu className="text-primary mb-3" size={32} />
              <h6 className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface mb-2">Systems</h6>
              <p className="text-[10px] font-label text-on-surface-variant">Microservices, Event-Driven</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
