import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | Capacitación técnica, sistemas e idiomas — Center-Soft" },
      {
        name: "description",
        content:
          "Cursos de formación profesional y capacitación técnica, asesoramiento y desarrollo de sistemas, y división idiomas para empresas de la industria automotriz y metalmecánica.",
      },
      { property: "og:title", content: "Nuestros servicios | Center-Soft" },
      {
        property: "og:description",
        content:
          "Capacitación empresarial a medida, desarrollo de software, programación de PLC y CNC, y cursos de idiomas.",
      },
    ],
  }),
  component: ServiciosPage,
});

const process = [
  "Determinación del perfil de competencias deseado en función del rol del participante, en conjunto con la organización.",
  "Relevamiento del perfil de competencias real de los participantes.",
  "Diseño de propuestas formativas: planificación, temarios, cronogramas y tests de nivelación.",
  "Dictado de cursos a cargo de instructores con vasta y reconocida experiencia.",
  "Equipamiento para el dictado: computadoras, impresoras, proyección y material didáctico.",
];

const areas = [
  {
    title: "Área informática",
    items: [
      "Planillas de cálculo (MS Excel: básico, intermedio y macros)",
      "Herramientas de diseño gráfico",
      "Lenguajes de programación, niveles básico y avanzado",
      "Diseño asistido: AutoCAD, SolidWorks, Catia V5",
    ],
  },
  {
    title: "Área herramientas de gestión",
    items: [
      "Trabajo en equipo: liderazgo, comunicación eficaz y gestión de reuniones",
      "Resolución de problemas (Problem Solving)",
      "Normas ISO 9000",
      "Control estadístico de procesos (CEP)",
      "Gestión a la vista",
      "Las 5 'S'",
      "Mantenimiento Total Productivo (TPM)",
    ],
  },
  {
    title: "Medición, CNC y autómatas",
    items: [
      "Equipos CMM de medición en tres coordenadas (D.E.A., Mitutoyo, Cordax-Bendix, Zett Mess)",
      "Evaluación de sistemas de medición",
      "Controladores Lógicos Programables (PLC)",
      "Operación y programación de CNC (Fanuc, Siemens y otros)",
      "Dibujo técnico e interpretación de planos",
      "Metrología",
    ],
  },
];

const systems = [
  "Análisis de sistemas, diseño, desarrollo e implementación",
  "Sistemas llave en mano",
  "Capacitación de usuarios",
  "Mantenimiento de hardware y software",
  "Instalación y configuración de redes",
  "Carga de datos",
  "Programación de PLC y CNC",
];

function ServiciosPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="eyebrow text-accent">Servicios</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
            Capacitación empresarial y sistemas informáticos
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Estamos orientados a la capacitación empresarial, cubriendo las distintas necesidades de
            nuestros clientes. Cada propuesta se construye sobre el perfil de competencias real de
            los participantes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Cursos de formación profesional y capacitación técnica
        </h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <li
              key={p}
              className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <span className="font-display text-sm font-bold text-accent">
                0{i + 1}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {areas.map((a) => (
            <article
              key={a.title}
              className="rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
            >
              <h3 className="text-lg font-semibold text-card-foreground">{a.title}</h3>
              <ul className="mt-4 space-y-2 border-t border-border pt-4 text-sm text-muted-foreground">
                {a.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent">—</span>
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          En todos los casos se incluyen las últimas versiones de cada software, y se preparan
          cursos especiales sobre temas específicos a requerimiento del cliente.
        </p>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Asesoramiento</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Facilitamos a nuestros clientes los elementos de juicio necesarios para lograr una
              adecuada implementación de procesos, procedimientos, equipos y sistemas, a través de:
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-accent">—</span>
                Asesoramiento en el diseño e implementación de procesos formativos en función del
                perfil de competencias.
              </li>
              <li className="flex gap-2">
                <span className="text-accent">—</span>
                Asesoramiento integral en informática.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Desarrollo de sistemas</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Buscamos una adecuada implementación de los sistemas informáticos en función de los
              requerimientos y necesidades reales de la empresa:
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {systems.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="text-accent">—</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <p className="eyebrow text-accent">División idiomas</p>
          <h2 className="mt-3 text-2xl font-bold">Cursos de idiomas para empresas y particulares</h2>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-accent">—</span>
              Inglés en diferentes niveles: general, para negocios y técnico.
            </li>
            <li className="flex gap-2">
              <span className="text-accent">—</span>
              Portugués, en convenio con CEPE IDIOMAS (Centro de Enseñanza de Portugués para Extranjeros).
            </li>
            <li className="flex gap-2">
              <span className="text-accent">—</span>
              Español para extranjeros.
            </li>
          </ul>
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
