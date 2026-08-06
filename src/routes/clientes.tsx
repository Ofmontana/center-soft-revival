import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/clientes")({
  head: () => ({
    meta: [
      { title: "Clientes | Empresas que confían en Center-Soft" },
      {
        name: "description",
        content:
          "FIAT, IVECO, Volkswagen, Scania, Chrysler, Perkins, Teksid y muchas más: empresas que confiaron la capacitación de su personal a Center-Soft.",
      },
      { property: "og:title", content: "Nuestros clientes | Center-Soft" },
      {
        property: "og:description",
        content:
          "Más de tres décadas capacitando personal en las principales industrias automotrices y metalmecánicas de Córdoba y el país.",
      },
    ],
  }),
  component: ClientesPage,
});

const clients = [
  "FIAT Auto Argentina S.A.",
  "IVECO Argentina S.A.",
  "VOLKSWAGEN Planta Córdoba (ex TRANSAX S.A.)",
  "Chrysler Argentina S.A.",
  "SCANIA Argentina S.A. (Tucumán)",
  "PERKINS S.A.",
  "TEKSID Argentina S.A.",
  "ISVOR FIAT Argentina S.A.",
  "SACHS Automotive Argentina S.A.",
  "DANA San Luis",
  "Grandes Motores Diesel S.A.",
  "CORMEC Córdoba Mecánica S.A.",
  "PRODISMO S.A.",
  "FIPLEX S.A.",
  "F.M.C. Argentina S.A.",
  "KLÖCKNER PENTAPLAST Argentina S.A.",
  "EDASA (Embotelladora de Coca-Cola, ex INTI S.A.)",
  "PRITTY S.A.",
  "SUPERCEMENTO S.A.",
  "DELTA Constructora S.A.",
  "I.L.A.S.A. Pajas Blancas",
  "Fuerza Aérea Argentina (Falda del Carmen)",
  "Fundación Sandro Peretini (C.T.A. Gob. Amadeo Sabattini)",
  "Cámara de Farmacias de la Provincia de Córdoba",
  "FUMISCOR",
  "Pedemonte y Asociados",
];

function ClientesPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="eyebrow text-accent">Clientes</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
            Empresas que confiaron en nosotros
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Entre las principales empresas que han contado con nuestros servicios, confiando la
            capacitación de su personal a Center-Soft y/o como usuarias de nuestros sistemas
            informáticos, se encuentran:
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c) => (
            <li
              key={c}
              className="rounded-lg border border-border bg-card px-5 py-4 text-sm font-medium text-card-foreground shadow-[var(--shadow-card)]"
            >
              {c}
            </li>
          ))}
        </ul>

        <div className="surface-ink mt-14 rounded-2xl px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-ink-foreground">
            ¿Querés sumar a tu empresa a esta lista?
          </h2>
          <Link
            to="/contacto"
            className="mt-6 inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Hablemos
          </Link>
        </div>
      </section>
    </>
  );
}
