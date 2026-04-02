import { motion } from 'motion/react';
import { Mail, Share2, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-12">
          <header className="space-y-4">
            <span className="font-label text-primary font-semibold tracking-[0.2em] uppercase text-xs">Available for hire</span>
            <h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface leading-tight">
              Let's build the <span className="text-primary">next system</span> together.
            </h1>
          </header>
          <div className="space-y-6 max-w-md">
            <p className="text-on-surface-variant text-lg leading-relaxed font-body">
              Whether you're a recruiter looking for a precision-driven Computer Science graduate or a founder with a complex architectural problem to solve, I'm ready to collaborate.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed font-body">
              I specialize in scalable backends, clean UI architectures, and logical problem solving. Drop me a line and let's start a conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a className="group bg-surface-container hover:bg-surface-container-high p-6 rounded-xl transition-all border border-outline-variant/10" href="mailto:hello@logicalarchitect.com">
              <div className="flex flex-col gap-4">
                <Mail className="text-primary group-hover:scale-110 transition-transform" size={32} />
                <div>
                  <h3 className="font-headline font-bold text-on-surface">Direct Email</h3>
                  <p className="font-label text-sm text-on-surface-variant">hello@logicalarchitect.com</p>
                </div>
              </div>
            </a>
            <a className="group bg-surface-container hover:bg-surface-container-high p-6 rounded-xl transition-all border border-outline-variant/10" href="#">
              <div className="flex flex-col gap-4">
                <Share2 className="text-primary group-hover:scale-110 transition-transform" size={32} />
                <div>
                  <h3 className="font-headline font-bold text-on-surface">Social Networks</h3>
                  <p className="font-label text-sm text-on-surface-variant">LinkedIn & GitHub</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-surface-container-low rounded-2xl p-8 md:p-12 border border-outline-variant/5 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
            <form className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">Full Name</label>
                  <input className="w-full bg-transparent border-b border-outline-variant/30 focus:border-primary focus:ring-0 transition-colors py-3 text-on-surface placeholder:text-outline-variant/50" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">Email Address</label>
                  <input className="w-full bg-transparent border-b border-outline-variant/30 focus:border-primary focus:ring-0 transition-colors py-3 text-on-surface placeholder:text-outline-variant/50" placeholder="john@company.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">Subject</label>
                <select className="w-full bg-transparent border-b border-outline-variant/30 focus:border-primary focus:ring-0 transition-colors py-3 text-on-surface appearance-none">
                  <option className="bg-surface-container text-on-surface">New Opportunity / Job Inquiry</option>
                  <option className="bg-surface-container text-on-surface">Collaboration Project</option>
                  <option className="bg-surface-container text-on-surface">General Question</option>
                  <option className="bg-surface-container text-on-surface">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">Your Message</label>
                <textarea className="w-full bg-transparent border-b border-outline-variant/30 focus:border-primary focus:ring-0 transition-colors py-3 text-on-surface placeholder:text-outline-variant/50 resize-none" placeholder="Tell me about your project or role..." rows={4}></textarea>
              </div>
              <div className="flex items-center justify-between pt-4">
                <p className="font-label text-[10px] text-on-surface-variant uppercase max-w-[200px]">By submitting this form, you agree to technical collaboration terms.</p>
                <button className="bg-primary-container text-on-primary-container font-headline font-bold px-10 py-4 rounded-full flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/10" type="submit">
                  Send Transmission
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {[
              { icon: <Github size={24} />, name: 'GitHub' },
              { icon: <Linkedin size={24} />, name: 'LinkedIn' },
              { icon: <Twitter size={24} />, name: 'Twitter' },
              { icon: <Share2 size={24} />, name: 'Stack Overflow' }
            ].map(social => (
              <div key={social.name} className="flex items-center gap-2">
                {social.icon}
                <span className="font-label text-sm">{social.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-32">
        <div className="relative h-[400px] w-full rounded-3xl overflow-hidden grayscale contrast-125 brightness-75">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-background/80 via-transparent to-transparent"></div>
          <div className="w-full h-full bg-slate-900 flex items-center justify-center relative">
            <img 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2000&auto=format&fit=crop" 
              alt="Map"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/40 rounded-full animate-ping"></div>
                <div className="relative bg-primary w-6 h-6 rounded-full border-4 border-background shadow-xl shadow-primary/40"></div>
              </div>
              <div className="absolute top-10 -left-16 bg-surface-container/80 backdrop-blur-md border border-outline-variant/20 px-4 py-2 rounded-lg whitespace-nowrap">
                <p className="font-label text-xs font-bold text-primary">CURRENT BASE: REMOTE / CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
