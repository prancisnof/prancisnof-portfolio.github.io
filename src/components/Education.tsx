import { motion } from 'motion/react';
import { Award, GraduationCap, Code, Users } from 'lucide-react';
import { COURSE_GROUPS } from '../constants';

export default function Education() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <header className="mb-24 flex flex-col md:flex-row items-baseline gap-4">
        <h1 className="text-6xl md:text-8xl font-headline font-bold text-on-surface tracking-tighter leading-none">
          Academic<br /><span className="text-primary">Foundations</span>
        </h1>
        <p className="font-label text-sm text-on-surface-variant max-w-xs md:ml-12 border-l border-outline-variant/30 pl-4">
          Structured logic and computational theory: the blueprint of my technical journey.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <section className="md:col-span-8 bg-surface-container rounded-xl p-8 relative overflow-hidden group border border-outline-variant/10">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <GraduationCap size={120} className="text-primary" />
          </div>
          <div className="relative z-10">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4 block">Major Institution</span>
            <h2 className="text-4xl font-headline font-bold text-on-surface mb-2">Stanford University</h2>
            <p className="text-xl text-on-surface-variant font-body mb-8">Bachelor of Science in Computer Science</p>
            <div className="flex flex-wrap gap-12 mt-auto">
              <div>
                <p className="font-label text-xs uppercase text-outline mb-1">Cumulative GPA</p>
                <p className="text-3xl font-headline font-bold text-tertiary">3.92 / 4.0</p>
              </div>
              <div>
                <p className="font-label text-xs uppercase text-outline mb-1">Duration</p>
                <p className="text-3xl font-headline font-bold text-on-surface">2020 — 2024</p>
              </div>
              <div>
                <p className="font-label text-xs uppercase text-outline mb-1">Concentration</p>
                <p className="text-3xl font-headline font-bold text-on-surface">AI & Systems</p>
              </div>
            </div>
          </div>
        </section>

        <section className="md:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-low border border-outline-variant/10 rounded-xl p-6 flex-1">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary" size={24} />
              <h3 className="font-headline font-bold text-lg uppercase tracking-tight">Academic Honors</h3>
            </div>
            <ul className="space-y-4">
              {[
                { year: '2023', title: 'Tau Beta Pi Engineering Honor Society' },
                { year: '2022', title: "President's Award for Academic Excellence" },
                { year: '2021-2024', title: "Dean's List (All Semesters)" }
              ].map((honor, i) => (
                <li key={i} className="group">
                  <p className="font-label text-xs text-outline group-hover:text-primary transition-colors">{honor.year}</p>
                  <p className="text-on-surface font-medium">{honor.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="md:col-span-12 bg-surface-container-low border border-outline-variant/10 rounded-xl p-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h3 className="font-headline text-3xl font-bold mb-2">Core Technical Mastery</h3>
              <p className="text-on-surface-variant">Selected coursework highlighting fundamental and advanced CS domains.</p>
            </div>
            <div className="hidden lg:block h-[1px] flex-grow mx-8 bg-outline-variant/20 mb-3"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
            {COURSE_GROUPS.map((group, i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-outline-variant/20 pb-2">
                  <span className="font-label text-xs font-bold uppercase tracking-widest text-outline">{group.title}</span>
                </div>
                <div className="space-y-3">
                  {group.courses.map((course, j) => (
                    <div key={j} className="flex justify-between items-start">
                      <span className="font-body font-medium">{course.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label uppercase">{course.code}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="group relative bg-surface-container rounded-xl p-8 hover:bg-surface-container-high transition-all border border-outline-variant/10">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface-bright flex items-center justify-center text-primary border border-primary/10">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold">Stanford ACM Student Chapter</h4>
                  <p className="font-label text-xs text-outline uppercase tracking-wide">President</p>
                </div>
              </div>
              <span className="text-sm font-label text-on-surface-variant bg-surface-variant/50 px-3 py-1 rounded-full border border-outline-variant/20">2022 — Present</span>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              Spearheaded technical workshops and hackathons for a community of 500+ students. Negotiated sponsorships with top-tier tech firms and integrated career development panels with faculty experts.
            </p>
          </div>

          <div className="group relative bg-surface-container rounded-xl p-8 hover:bg-surface-container-high transition-all border border-outline-variant/10">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface-bright flex items-center justify-center text-tertiary border border-tertiary/10">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold">Open Source Guild</h4>
                  <p className="font-label text-xs text-outline uppercase tracking-wide">Lead Tech Mentor</p>
                </div>
              </div>
              <span className="text-sm font-label text-on-surface-variant bg-surface-variant/50 px-3 py-1 rounded-full border border-outline-variant/20">2021 — 2023</span>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              Mentored underclassmen on Git workflow and collaborative development. Audited and improved the university's course registration dashboard through student-led contributions.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
