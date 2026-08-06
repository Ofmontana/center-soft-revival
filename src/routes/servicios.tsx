import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | Center-Soft capacitación técnica para la industria" },
      {
        name: "description",
        content:
          "Capacitación técnica en planta, formación profesional, consultoría de necesidades formativas y servicios informáticos para empresas automotrices y metalmecánicas.",
      },
      { property: "og:title", content: "Servicios de capacitación técnica | Center-Soft" },
      {
        property: "og:description",
        content:
          "Programas a medida, formación profesional y soporte informático para planes de capacitación empresarial.",
      },
    ],
  }),
  component: ServiciosPage,
});

const services = [
  {
    title: "Capacitación técnica en planta",
    text: "Programas diseñados sobre los procesos, equipos y estándares reales de cada empresa. Se dictan en el lugar de trabajo, con prácticas sobre el equipamiento propio.",
    items: ["Relevamiento de procesos", "Material didáctico propio", "Dictado en sitio o aula"],
  },
  {
    title: "Formación profesional",
    text: "Trayectos formativos para operarios, técnicos y mandos medios, con objetivos por nivel y evaluación de competencias adquiridas.",
    items: ["Itinerarios por nivel", "Evaluación de competencias", "Certificación de asistencia"],
  },
  {
    title: "Consultoría en necesidades formativas",
    text: "Detección de brechas de conocimiento, armado del plan anual de capacitación y definición de indicadores de seguimiento.",
    items: ["Diagnóstico de brechas", "Plan anual", "Indicadores y seguimiento"],
  },
  {
    title: "Servicios informáticos",
    text: "Herramientas digitales, soporte y contenidos que acompañan los planes de formación y permiten sostenerlos en el tiempo.",
    items: ["Contenidos digitales", "Soporte y asistencia", "Gestión de registros"],
  },
  {
    title: "Cursos para particulares",
    text: "Formación abierta para quienes buscan iniciarse o actualizarse en competencias técnicas e informáticas aplicadas a la industria.",
    items: ["Grupos reducidos", "Enfoque práctico", "Modalidad presencial o remota"],
  },
  {
    title: "Programas a medida",
    text: "Cuando ningún formato estándar aplica, desarrollamos el programa completo desde cero junto al área de RR.HH. o Producción.",
    items: ["Diseño desde cero", "Contenidos exclusivos", "Cronograma acordado"],
  },
];

const sectors = [
  "Industria automotriz",
  "Metalmecánica",
  "Autopartistas",
  "Talleres y servicios técnicos",
];

function ServiciosPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="eyebrow text-accent">Servicios</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
            Capacitación aplicada al trabajo real
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Cada proyecto parte del relevamiento de la operación: qué se hace, con qué equipos y qué
            necesita saber cada puesto. Sobre eso construimos el programa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-colors hover:border-accent/50"
            >
              <h2 className="text-lg font-semibold text-card-foreground">{s.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent">—</span>
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="rounded-xl border border-border bg-surface p-8">
          <p className="eyebrow text-muted-foreground">Sectores donde trabajamos</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {sectors.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-card-foreground"
              >
                {s}
              </span>
            ))}
          </div>
          <Link
            to="/contacto"
            className="mt-8 inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Pedir una propuesta
          </Link>
        </div>
      </section>
    </>
  );
}
