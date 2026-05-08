import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-mint-gradient mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo className="h-10 w-auto mb-5" />
          <p className="text-sm text-navy/70 max-w-xs leading-relaxed">
            AI-Powered Phase III Clinical Trial Acceleration Platform.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Early proof-of-concept
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/55 mb-4">
            Platform
          </h4>
          <ul className="space-y-2.5 text-sm text-navy/80">
            <li><Link to="/" className="hover:text-primary">Overview</Link></li>
            <li><Link to="/demo" className="hover:text-primary">Demo</Link></li>
            
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/55 mb-4">
            For
          </h4>
          <ul className="space-y-2.5 text-sm text-navy/80">
            <li>Biotech Companies</li>
            <li>Pharma Companies</li>
            <li>CROs</li>
            <li>Academic Institutions</li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/55 mb-4">
            Get in touch
          </h4>
          <p className="text-sm text-navy/70 leading-relaxed mb-4">
            Talking with teams about pilot collaborations.
          </p>
          <a
            href="mailto:accelp3.contact@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
      <div className="border-t border-border/60 py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-navy/55">
          <span>© {new Date().getFullYear()} AccelP3. All rights reserved.</span>
          <span>Decision-support tool. Not clinically validated. Not FDA-approved.</span>
        </div>
      </div>
    </footer>
  );
}
