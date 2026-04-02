export default function Footer() {
  return (
    <footer className="w-full py-12 mt-20 bg-slate-950 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <div className="text-lg font-bold text-on-surface font-headline mb-2">Logical Architect</div>
          <p className="font-body text-sm text-on-surface-variant">© 2024 Logical Architect. Built with Precision.</p>
        </div>
        <div className="flex space-x-8">
          {['GitHub', 'LinkedIn', 'Email', 'Source Code'].map((link) => (
            <a 
              key={link}
              href="#" 
              className="text-on-surface-variant hover:text-primary transition-colors font-body text-sm"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
