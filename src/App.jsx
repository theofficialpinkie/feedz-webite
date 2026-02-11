import React from "react";

function Button({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-black/10";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-black/90"
      : "border border-black/15 text-black hover:bg-black/5";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/15 bg-black/5 px-3 py-1 text-xs text-black/70">
      {children}
    </span>
  );
}

export default function App() {
  const email = "priyankassundhar@gmail.com";
  const calendly = "https://www.calendly.com/priyanka-feedz/30min";
  const linkedin = "https://www.linkedin.com/in/priyanka-sundhar";

  return (
    <div className="min-h-screen text-black">
      {/* Beige grainy background */}
      <div className="relative min-h-screen bg-[#f4efe6]">
        {/* soft grain layer */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
          }}
        />
        {/* subtle vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_55%)]" />

        <div className="relative mx-auto max-w-3xl px-6 py-10">
          {/* Minimal header */}
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold tracking-wide">Feedz</div>
            <Button href={calendly}>Book 30 min</Button>
          </div>

          {/* Straight-shot rail */}
          <div className="mt-14 border-l border-black/10 pl-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <Tag>Seed to Series A</Tag>
              <Tag>Fractional first sales hire</Tag>
              <Tag>YC friendly</Tag>
            </div>

            {/* Hero */}
            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              GTM partner for early-stage startups.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-black/70 md:text-lg">
              I help founders convert customer meetings into a repeatable sales process.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={calendly}>Book 30 min</Button>
              <Button href={`mailto:${email}`} variant="secondary">
                Email
              </Button>
            </div>

            {/* Offer (simple, no boxes) */}
            <div className="mt-12">
              <div className="text-xs tracking-[0.2em] text-black/55">THE OFFER</div>
              <div className="mt-3 text-xl font-semibold">Fractional first sales hire</div>
              <p className="mt-3 text-sm md:text-base text-black/70 leading-relaxed">
                A strategic GTM partner for Seed to Series A startups. I install the systems,
                feedback loops, and sales process that turn early conversations into repeatable revenue.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-black/70">
                <li>• ICP and positioning refinement</li>
                <li>• CRM and sales tooling implementation</li>
                <li>• Structured insight from real customer conversations</li>
                <li>• Qualification and pipeline design</li>
                <li>• Weekly iteration on messaging and strategy</li>
              </ul>
            </div>

            {/* Background (simple) */}
            <div className="mt-12">
              <div className="text-xs tracking-[0.2em] text-black/55">BACKGROUND</div>
              <p className="mt-3 text-sm md:text-base text-black/70 leading-relaxed">
                Hey, I’m Priyanka. I’ve been the first sales hire at high-growth startups and I’ve lived the
                messy early GTM phase: finding the wedge, iterating on messaging, and turning founder-led sales
                into a process the team can run. I like working with ambitious founders who want speed and truth
                from the market.
              </p>
              <p className="mt-3 text-sm text-black/60">
                If you are a YC-backed team, that’s a plus.
              </p>
            </div>

            {/* Footer links */}
            <div className="mt-14 border-t border-black/10 pt-6 text-sm text-black/60">
              <div className="flex flex-wrap items-center gap-4">
                <a className="hover:text-black" href={linkedin}>
                  LinkedIn
                </a>
                <a className="hover:text-black" href={`mailto:${email}`}>
                  {email}
                </a>
                <a className="hover:text-black" href={calendly}>
                  Book
                </a>
              </div>
              <div className="mt-4 text-xs text-black/45">© {new Date().getFullYear()} Feedz</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
