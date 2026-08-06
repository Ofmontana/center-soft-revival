import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros | Center-Soft, servicios profesionales desde 1985" },
      {
        name: "description",
        content:
          "Center-Soft acumula más de 40 años de actividad en empresas del medio, principalmente de la industria automotriz y metalmecánica.",
      },
      { property: "og:title", content: "Nosotros | Center-Soft desde 1985" },
      {
        property: "og:description",
        content:
          "Historia, enfoque y forma de trabajo de una empresa con 41 años en capacitación técnica y formación profesional.",
      },
    ],
  }),
  component: NosotrosPage,
});

const timeline = [
  { year: "1985", text: "Nace Center-Soft como empresa de servicios profesionales e informáticos." },
  { year: "1990s", text: "Primeros proyectos de capacitación técnica en plantas metalmecánicas." },
  { year: "2000s", text: "Consolidación del trabajo con la industria automotriz y autopartista." },
  { year: "2010s", text: "Incorporación de contenidos digitales y modalidades mixtas de dictado." },
  { year: "Hoy", text: "41 años de actividad continua formando equipos técnicos y particulares." },
];

const values = [
  { title: "Experiencia real", text: "Cuatro décadas trabajando dentro de plantas industriales, no solo en el aula." },
  { title: "Programas a medida", text: "Ningún contenido genérico: cada programa se arma sobre la operación del cliente." },
  { title: "Continuidad", text: "Relaciones de largo plazo con empresas que renuevan sus planes año tras año." },
];

function NosotrosPage() {
  return (
    <>
      <section className="surface-ink">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow text-ink-foreground/70">Nosotros</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold text-ink-foreground sm:text-5xl">
            Una empresa de servicios profesionales con 41 años de actividad
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/80">
            Fundada en 1985, Center-Soft desarrolla proyectos de capacitación técnica y formación
            profesional orientados a satisfacer las necesidades del sector empresarial y de
            particulares. Contamos con una amplia experiencia de más de 40 años de actividad en
            diversas empresas de nuestro medio, principalmente de la industria automotriz y
            metalmecánica en general.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="eyebrow text-accent">Trayectoria</p>
            <h2 className="mt-4 text-3xl font-bold">De 1985 a hoy</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Cuatro décadas acompañando la evolución técnica de la industria argentina y de las
              personas que trabajan en ella.
            </p>
          </div>

          <ol className="relative border-l border-border pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative pb-9 last:pb-0">
                <span className="absolute -left-[2.15rem] top-1 h-3 w-3 rounded-full bg-accent" />
                <p className="font-display text-sm font-semibold text-accent">{t.year}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-16 md:grid-cols-3">
          {values.map((v) => (
            <article key={v.title} className="rounded-xl border border-border bg-card p-7">
              <h3 className="text-lg font-semibold text-card-foreground">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">Trabajemos juntos</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Contanos qué necesita tu equipo y preparamos una propuesta de capacitación concreta.
        </p>
        <Link
          to="/contacto"
          className="mt-8 inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Ir a contacto
        </Link>
      </section>
    </>
  );
}
