import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-capacitacion.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Center-Soft | 41 años en capacitación técnica y formación profesional" },
      {
        name: "description",
        content:
          "Desde 1985 diseñamos e implementamos proyectos de capacitación técnica y formación profesional para la industria automotriz, metalmecánica y particulares.",
      },
      { property: "og:title", content: "Center-Soft | Capacitación técnica desde 1985" },
      {
        property: "og:description",
        content:
          "41 años de experiencia en proyectos de formación profesional para el sector empresarial y particulares.",
      },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    title: "Capacitación técnica",
    text: "CNC, PLC, metrología, interpretación de planos y sistemas de medición CMM, con prácticas sobre el equipamiento real de cada planta.",
  },
  {
    title: "Formación profesional",
    text: "Diseño del perfil de competencias, relevamiento del nivel real, temarios, cronogramas y tests de nivelación.",
  },
  {
    title: "Asesoramiento y sistemas",
    text: "Análisis, desarrollo e implementación de software, redes, mantenimiento y programación de PLC y CNC.",
  },
  {
    title: "División idiomas",
    text: "Inglés general y de negocios, portugués en convenio con CEPE y español para extranjeros.",
  },
];

const stats = [
  { value: "1985", label: "Año de fundación" },
  { value: "41", label: "Años de actividad" },
  { value: "+25", label: "Empresas clientes de primera línea" },
  { value: "Córdoba", label: "Base de operaciones, con dictado en planta" },
];


function Index() {
  return (
    <>
      <section className="surface-ink relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
          <div>
            <p className="eyebrow text-ink-foreground/70">Servicios profesionales · Córdoba · desde 1985</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-ink-foreground sm:text-5xl lg:text-6xl">
              41 años formando a la industria argentina
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/80">
              Center-Soft es una empresa de servicios profesionales vinculados a proyectos de
              capacitación técnica y formación profesional, orientados a satisfacer las necesidades
              del sector empresarial y de particulares.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/servicios"
                className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Ver servicios
              </Link>
              <Link
                to="/contacto"
                className="rounded-md border border-ink-foreground/25 px-6 py-3 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
              >
                Solicitar una propuesta
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-ink-foreground/15 shadow-[var(--shadow-panel)]">
            <img
              src={heroImage}
              alt="Instructor de Center-Soft dictando una capacitación técnica frente a operarios en planta industrial"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-bold text-foreground">{s.value}</p>
              <p className="mt-1 text-sm leading-snug text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow text-accent">Qué hacemos</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
          Proyectos de formación diseñados sobre la realidad de cada empresa
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-colors hover:border-accent/50"
            >
              <h3 className="text-lg font-semibold text-card-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="eyebrow text-accent">Clientes</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Confiaron la capacitación de su personal a Center-Soft
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "FIAT Auto Argentina",
              "IVECO Argentina",
              "Volkswagen Córdoba",
              "Scania Argentina",
              "Chrysler Argentina",
              "Perkins",
              "Teksid Argentina",
              "Grandes Motores Diesel",
            ].map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-card-foreground"
              >
                {c}
              </span>
            ))}
          </div>
          <Link
            to="/clientes"
            className="mt-8 inline-block text-sm font-semibold text-accent hover:underline"
          >
            Ver todos los clientes →
          </Link>
        </div>
      </section>


      <section className="mx-auto max-w-6xl px-5 pb-4">
        <div className="surface-ink rounded-2xl px-8 py-14 text-center">
          <h2 className="text-2xl font-bold text-ink-foreground sm:text-3xl">
            ¿Necesitás un plan de capacitación para tu equipo?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-foreground/80">
            Analizamos las necesidades de tu organización y armamos una propuesta concreta, con
            objetivos, contenidos y modalidad de dictado.
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Contactanos
          </Link>
        </div>
      </section>
    </>
  );
}
