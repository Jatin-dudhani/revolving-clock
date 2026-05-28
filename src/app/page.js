import Clock from "@/components/Clock";
import BackgroundGlow from "@/components/BackgroundGlow";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 gap-10 overflow-hidden">
      {/* Animated background */}
      <BackgroundGlow />

      {/* Grid overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--accent-cyan) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 animate-fadeUp">
        {/* Header */}
        <div className="text-center">
          <p
            className="text-[11px] tracking-[0.5em] uppercase mb-1"
            style={{ color: "var(--accent-cyan)", opacity: 0.7 }}
          >
            System Time
          </p>
          <h1
            className="text-2xl md:text-4xl font-semibold tracking-[0.3em] uppercase"
            style={{
              background: "linear-gradient(135deg, var(--text) 40%, var(--accent-cyan))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Revolving Clock
          </h1>
        </div>

        {/* Clock */}
        <Clock />

        {/* Footer */}
        <p
          className="text-[10px] tracking-[0.2em] uppercase opacity-30"
          style={{ color: "var(--text-muted)" }}
        >
          Running on local time · Updates every second
        </p>
      </div>
    </main>
  );
}
