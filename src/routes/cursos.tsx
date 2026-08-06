import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cursos")({
  head: () => ({
    meta: [
      { title: "Cursos | CNC, PLC, Metrología, Catia V5 y Excel — Center-Soft" },
      {
        name: "description",
        content:
          "Cursos de CNC (tornos y fresadoras), PLC, Metrología e interpretación de planos, Catia V5, Excel e idiomas. Formación técnica para la industria en Córdoba.",
      },
      { property: "og:title", content: "Cursos técnicos e informáticos | Center-Soft" },
      {
        property: "og:description",
        content:
          "Capacitación intensiva en CNC, PLC, metrología, diseño asistido, Excel e idiomas, para empresas y particulares.",
      },
    ],
  }),
  component: CursosPage,
});

const courses = [
  {
    title: "CNC 2 ejes — Tornos",
    text: "Operación y programación de control numérico computarizado en tornos (Fanuc, Siemens y otros). Indispensable para la industria automotriz.",
    tag: "Control numérico",
  },
  {
    title: "CNC 3 ejes — Fresadoras",
    text: "Programación y operación de centros de mecanizado, con prácticas sobre casos reales de producción.",
    tag: "Control numérico",
  },
  {
    title: "Metrología e interpretación de planos",
    text: "Curso intensivo de dibujo técnico, tolerancias y sistemas de medición. El curso indispensable para ingresar a trabajar en la industria automotriz.",
    tag: "Medición",
  },
  {
    title: "PLC — Controladores Lógicos Programables",
    text: "Fundamentos, programación y puesta en marcha de autómatas programables aplicados a líneas industriales.",
    tag: "Automatización",
  },
  {
    title: "Catia V5 — Nivel 1",
    text: "Diseño de piezas, autopartes, conjuntos y mecanismos de mediana complejidad. También Catia V5 FEM, AutoCAD y SolidWorks.",
    tag: "Diseño asistido",
  },
  {
    title: "Excel — Básico, Intermedio y Avanzado (Macros)",
    text: "Tres niveles progresivos, desde planillas de cálculo hasta programación de macros aplicada a la gestión.",
    tag: "Informática",
  },
  {
    title: "Idiomas",
    text: "Inglés en distintos niveles (general y de negocios), portugués en convenio con CEPE y español para extranjeros.",
    tag: "División idiomas",
  },
  {
    title: "Ingreso y preparación universitaria",
    text: "Acompañamiento para estudiantes que preparan el ingreso a carreras técnicas y de ingeniería.",
    tag: "Formación",
  },
];

function CursosPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="eyebrow text-accent">Cursos</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
            Formación técnica con salida laboral
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Dictados por instructores con vasta y reconocida experiencia, con equipamiento propio
            para la práctica. Abiertos a particulares y disponibles como capacitación cerrada para
            empresas.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <article
              key={c.title}
              className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-colors hover:border-accent/50"
            >
              <p className="eyebrow text-accent">{c.tag}</p>
              <h2 className="mt-3 text-lg font-semibold text-card-foreground">{c.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-surface p-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            En todas las áreas se preparan cursos especiales sobre temas específicos, a
            requerimiento del cliente, incluyendo tests de nivelación, cronogramas y material
            didáctico.
          </p>
          <Link
            to="/contacto"
            className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Consultar fechas de inicio
          </Link>
        </div>
      </section>
    </>
  );
}
