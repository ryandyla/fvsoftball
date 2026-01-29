import { Link, NavLink } from "react-router-dom";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>;
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "text-sm font-medium transition",
          isActive ? "text-slate-900" : "text-slate-600 hover:text-slate-900",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-white text-slate-900">
<header className="
  sticky top-0 z-50
  border-b border-slate-200
  bg-gradient-to-b from-slate-50/95 to-white/85
  backdrop-blur
">
        <Container>
          <div className="flex h-36 items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
<img
  src="/images/fvgfs-logo.png"
  alt="Fountain Valley Girls Fastpitch Softball"
  className="
    h-20
    sm:h-24
    md:h-28
    lg:h-52
    w-auto
    drop-shadow-[0_2px_6px_rgba(0,0,0,0.15)]
  "
/>

            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              <NavItem to="/registration">Registration</NavItem>
              <NavItem to="/schedule">Schedule</NavItem>
              <NavItem to="/news">News</NavItem>
              <NavItem to="/sponsors">Sponsors</NavItem>
              <NavItem to="/contact">Contact</NavItem>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                to="/registration"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Register
              </Link>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <Container>{children}</Container>
      </main>

      <footer className="mt-20 border-t border-slate-200 bg-slate-50">
        <Container>
          <div className="py-10 grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold">FV Softball</div>
              <p className="mt-2 text-sm text-slate-600">
                A community-focused girls softball league building skills, confidence, and friendships.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold">Quick Links</div>
              <ul className="mt-2 space-y-2 text-sm">
                <li><Link className="text-slate-600 hover:text-slate-900" to="/registration">Registration</Link></li>
                <li><Link className="text-slate-600 hover:text-slate-900" to="/schedule">Schedule</Link></li>
                <li><Link className="text-slate-600 hover:text-slate-900" to="/sponsors">Sponsors</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold">Contact</div>
              <p className="mt-2 text-sm text-slate-600">
                Questions? Reach out via the contact form.
              </p>
              <Link
                to="/contact"
                className="mt-3 inline-flex text-sm font-medium text-slate-900 underline underline-offset-4 hover:text-slate-700"
              >
                Contact the league
              </Link>
            </div>
          </div>
          <div className="border-t border-slate-200 py-6 text-xs text-slate-500">
            © {new Date().getFullYear()} FV Softball. All rights reserved.
          </div>
        </Container>
      </footer>
    </div>
  );
}
