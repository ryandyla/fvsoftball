import { Link } from "react-router-dom";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function Card({
  title,
  value,
  sub,
}: {
  title: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-xs font-medium text-slate-500">{title}</div>
      <div className="mt-2 text-lg font-semibold tracking-tight">{value}</div>
      {sub ? <div className="mt-1 text-sm text-slate-600">{sub}</div> : null}
    </div>
  );
}

function SectionHeader({ title, desc }: { title: string; desc?: string }) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {desc ? <p className="mt-2 text-slate-600">{desc}</p> : null}
      </div>
    </div>
  );
}

export default function Home() {
  // Replace these with repo-backed JSON later
  const regOpen = true;

  const announcements = [
    {
      id: "a1",
      title: "Spring Registration is Open",
      date: "Jan 28",
      urgent: false,
      body: "Register early to secure your spot. Evaluations will be scheduled by division.",
    },
    {
      id: "a2",
      title: "Volunteer Coaches Needed",
      date: "Jan 20",
      urgent: false,
      body: "No experience required—training and support provided. Help make the season great.",
    },
    {
      id: "a3",
      title: "Field Cleanup Day",
      date: "Jan 12",
      urgent: false,
      body: "Bring gloves and a good attitude. Community hours available for students.",
    },
  ];

  const sponsors = ["Acme Dental", "Coastal Printing", "Sunset Realty", "Valley Sports"];

  return (
    <div>
      {/* Hero */}
      <section className="pt-10 sm:pt-14">
  <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-sm">
    {/* Background image */}
    <img
      src="/images/hero.jpg"
      alt="Softball players"
      className="absolute inset-0 h-full w-full object-cover opacity-45"
    />
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/45 to-slate-900/70" />

    <div className="relative p-8 sm:p-12 text-white">
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium">
          {regOpen ? "Registration Open" : "Registration Closed"}
        </span>
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium">
          6U – 14U
        </span>
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium">
          Fountain Valley, CA
        </span>
      </div>

      <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
        A modern community league where girls grow through softball.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-white/85">
        Clear schedules, timely updates, and a supportive environment for players and families.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/registration"
          className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
        >
          Register Now
        </Link>
        <Link
          to="/schedule"
          className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
        >
          View Schedule
        </Link>
      </div>
    </div>
  </div>

  {/* Quick info cards */}
  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <Card title="Season" value="Spring 2026" sub="Feb – May" />
    <Card title="Registration" value={regOpen ? "Open Now" : "Closed"} sub="Limited spots by division" />
    <Card title="Divisions" value="6U – 14U" sub="All skill levels welcome" />
    <Card title="Location" value="FV Sports Complex" sub="Game + practice fields" />
  </div>
</section>


      {/* Announcements */}
      <section className="mt-14">
        <SectionHeader
          title="Announcements"
          desc="Timely updates for families—weather, events, and important dates."
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {announcements.map((a) => (
            <article
              key={a.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">{a.title}</div>
                <div className="text-xs text-slate-500">{a.date}</div>
              </div>
              <p className="mt-3 text-sm text-slate-600">{a.body}</p>
              <div className="mt-4">
                <Link
                  to="/news"
                  className="text-sm font-medium text-slate-900 underline underline-offset-4 hover:text-slate-700"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sponsors strip */}
      <section className="mt-14">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <SectionHeader
            title="Sponsors"
            desc="Thank you to the local businesses that support our players and families."
          />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sponsors.map((s) => (
              <div
                key={s}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm"
              >
                {s}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              to="/sponsors"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
            >
              Become a sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14 mb-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight">Help make the season great.</h2>
          <p className="mt-2 text-slate-600">
            Volunteer coaches and team parents keep the league running smoothly.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              Contact Us
            </Link>
            <Link
              to="/registration"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Registration Info
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
