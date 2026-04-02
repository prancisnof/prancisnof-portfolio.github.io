import { motion } from 'motion/react';
import { Brain, Users, Lightbulb, MessageSquare } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: <Brain size={24} />, title: 'Problem Solving', desc: 'Deconstructing complex bottlenecks into manageable, iterative solutions.' },
    { icon: <Users size={24} />, title: 'Collaboration', desc: 'Bridging the gap between technical constraints and stakeholder vision.' },
    { icon: <Lightbulb size={24} />, title: 'Adaptability', desc: 'Thriving in the rapid flux of emerging frameworks and paradigms.' },
    { icon: <MessageSquare size={24} />, title: 'Communication', desc: "Articulating 'why' behind the 'how' for cross-functional alignment." },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <header className="mb-20">
        <span className="font-label text-primary tracking-widest uppercase text-xs mb-4 block">The Narrative</span>
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface leading-tight tracking-tighter">
          Engineering <br /> <span className="text-primary">Elegance</span> in Logic.
        </h1>
      </header>

      <section className="editorial-grid">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="font-headline text-2xl font-semibold text-primary">The Spark</h2>
            <p className="font-body text-lg leading-relaxed text-on-surface-variant">
              My journey didn't start with complex algorithms, but with a fascination for how simple systems could produce intricate outcomes. As a Computer Science graduate, I’ve transitioned from the theoretical halls of academia to the pragmatic landscape of professional software development. I don't just write code; I design systems that solve human problems with mathematical precision.
            </p>
            <p className="font-body text-lg leading-relaxed text-on-surface-variant">
              During my studies, I realized that "good enough" is the enemy of efficient. This realization shifted my focus toward performance optimization and clean architecture—treating every line of code as a structural beam in a digital cathedral.
            </p>
          </div>

          <div className="bg-surface-container p-8 rounded-xl border-l-4 border-primary">
            <h3 className="font-headline text-xl mb-4 text-on-surface">Academics to Reality</h3>
            <p className="font-body text-on-surface-variant italic">
              "The transition from solving textbook problems to architecting scalable solutions taught me that the most elegant code is often the code you decide not to write."
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="font-headline text-2xl font-semibold text-primary">Beyond the Syntax</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <div key={i} className="bg-surface-container-low p-6 rounded-lg transition-all hover:bg-surface-container-high group">
                  <div className="text-primary mb-3">{skill.icon}</div>
                  <h4 className="font-headline text-lg font-bold mb-2">{skill.title}</h4>
                  <p className="font-label text-sm text-on-surface-variant">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative group aspect-[4/5] rounded-xl overflow-hidden bg-surface-container">
            <img 
              alt="Professional portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md bg-surface-bright/30 rounded-lg border border-outline-variant/20">
              <p className="font-label text-xs text-primary mb-1 uppercase tracking-widest">Currently Building</p>
              <p className="font-headline text-sm font-medium">Distributed Microservices Architecture</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container p-6 rounded-xl flex flex-col justify-center items-center text-center">
              <span className="font-headline text-3xl font-bold text-primary">500+</span>
              <span className="font-label text-xs uppercase text-on-surface-variant">LeetCode Solved</span>
            </div>
            <div className="bg-surface-container p-6 rounded-xl flex flex-col justify-center items-center text-center">
              <span className="font-headline text-3xl font-bold text-primary">02</span>
              <span className="font-label text-xs uppercase text-on-surface-variant">Open Source Contribs</span>
            </div>
            <div className="bg-surface-container p-6 rounded-xl col-span-2 space-y-3">
              <h5 className="font-headline text-sm font-bold flex items-center gap-2">
                Terminal Philosophy
              </h5>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                I believe in the "Unix Philosophy"—building tools that do one thing and do it exceptionally well. My environment is vim-based, my logic is deterministic, and my coffee is strictly black.
              </p>
            </div>
            <div className="bg-surface-container-high p-6 rounded-xl col-span-2 border border-primary/10">
              <h5 className="font-label text-[10px] uppercase text-primary tracking-widest mb-4">Tech Stack Snapshot</h5>
              <div className="flex flex-wrap gap-2">
                {['Rust', 'TypeScript', 'PostgreSQL', 'Docker', 'Go'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-surface-container text-on-surface text-[10px] rounded-full border border-outline-variant/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
