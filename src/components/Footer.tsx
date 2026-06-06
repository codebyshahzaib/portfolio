import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant/10 bg-surface-container-lowest w-full py-12 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-[1200px] mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
            M.SHAHZAIB
          </span>
          <p className="text-on-surface-variant text-sm text-center md:text-left">
            © 2024 Muhammad Shahzaib. Engineered for excellence.
          </p>
        </div>
        <div className="flex gap-8">
          <Link
            href="#"
            className="text-on-surface-variant hover:text-primary transition-all duration-300 hover:-translate-y-1"
          >
            LinkedIn
          </Link>
          <Link
            href="#"
            className="text-on-surface-variant hover:text-primary transition-all duration-300 hover:-translate-y-1"
          >
            GitHub
          </Link>
          <Link
            href="/behind-the-code"
            className="text-on-surface-variant hover:text-primary transition-all duration-300 hover:-translate-y-1"
          >
            Terminal
          </Link>
          <Link
            href="#top"
            className="text-primary hover:underline transition-all duration-300 flex items-center gap-1"
          >
            Back to Top
            <span className="material-symbols-outlined text-sm">arrow_upward</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
