import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Quiénes somos | Center-Soft, servicios profesionales desde 1985" },
      {
        name: "description",
        content:
          "Center-Soft es una empresa de servicios profesionales vinculados a proyectos de capacitación técnica y formación profesional, con 41 años de actividad en Córdoba.",
      },
      { property: "og:title", content: "Quiénes somos | Center-Soft" },
      {
        property: "og:description",
        content:
          "Amplia experiencia en empresas de la industria automotriz y metalmecánica de Córdoba y el país, desde 1985.",
      },
    ],
  }),
  component: NosotrosPage,
});

const values = [
  {
    title: "Experiencia real de planta",
    text: "Instructores con trayectoria en la industria automotriz y metalmecánica, que conocen los procesos y el equipamiento sobre los que se capacita.",
  },
  {
    title: "Programas a medida",
    text: "Cada propuesta parte del perfil de competencias deseado y del relevamiento del perfil real de los participantes.",
  },
  {
    title: "Doble especialidad",
    text: "Capacitación técnica y servicios informáticos en una misma empresa: formación, asesoramiento y desarrollo de sistemas.",
  },
];

const timeline = [
  { year: "1985", text: "Nace Center-Soft como empresa de servicios profesionales en Córdoba." },
  {
    year: "Años 90",
    text: "Consolidación en la industria automotriz y metalmecánica: FIAT, IVECO, Volkswagen, Perkins, Teksid y más.",
  },
  {
    year: "2000s",
    text: "Ampliación a desarrollo de software, redes, programación de PLC y CNC, y sistemas llave en mano.",
  },
  {
    year: "Actualidad",
    text: "41 años de actividad, con cursos abiertos para particulares y capacitación cerrada para empresas.",
  },
];

function NosotrosPage() {
  return (
    <>
      <section className="surface-ink">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow text-ink-foreground/70">Quiénes somos</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-ink-foreground sm:text-5xl">
            Servicios profesionales para la industria, desde 1985
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/80">
            Center-Soft es una empresa de servicios profesionales, fundamentalmente vinculados a
            proyectos de capacitación técnica y formación profesional, orientados a satisfacer las
            necesidades del sector empresarial y de particulares.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-foreground/80">
            Contamos con una amplia experiencia de más de 41 años de actividad en diversas empresas
            de nuestro medio, principalmente de la industria automotriz y metalmecánica en general.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <article
              key={v.title}
              className="rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
            >
              <h2 className="text-lg font-semibold text-card-foreground">{v.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="eyebrow text-accent">Trayectoria</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Cuatro décadas acompañando planes de formación</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t) => (
              <li key={t.year} className="border-t-2 border-accent pt-4">
                <p className="font-display text-xl font-bold text-foreground">{t.year}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="surface-ink rounded-2xl px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-ink-foreground sm:text-3xl">
            Conocé a las empresas que confiaron en nosotros
          </h2>
          <Link
            to="/clientes"
            className="mt-6 inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Ver clientes
          </Link>
        </div>
      </section>
    </>
  );
}
