import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Center-Soft capacitación técnica" },
      {
        name: "description",
        content:
          "Contactá a Center-Soft para diseñar un plan de capacitación técnica o formación profesional para tu empresa o para vos.",
      },
      { property: "og:title", content: "Contacto | Center-Soft" },
      {
        property: "og:description",
        content: "Escribinos y armamos una propuesta de capacitación a medida de tu operación.",
      },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="eyebrow text-accent">Contacto</p>
      <h1 className="mt-4 max-w-2xl text-4xl font-bold sm:text-5xl">Hablemos de tu proyecto</h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Completá el formulario o escribinos directamente. Respondemos con una propuesta inicial
        sobre objetivos, contenidos y modalidad de dictado.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium">
              Nombre y apellido
              <input
                required
                name="nombre"
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-accent focus:ring-2 focus:ring-ring/30"
              />
            </label>
            <label className="text-sm font-medium">
              Empresa (opcional)
              <input
                name="empresa"
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-accent focus:ring-2 focus:ring-ring/30"
              />
            </label>
            <label className="text-sm font-medium">
              Email
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-accent focus:ring-2 focus:ring-ring/30"
              />
            </label>
            <label className="text-sm font-medium">
              Teléfono
              <input
                name="telefono"
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-accent focus:ring-2 focus:ring-ring/30"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-medium">
            ¿Qué necesitás?
            <textarea
              required
              name="mensaje"
              rows={5}
              className="mt-2 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-accent focus:ring-2 focus:ring-ring/30"
            />
          </label>

          <button
            type="submit"
            className="mt-6 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Enviar consulta
          </button>

          {sent && (
            <p className="mt-4 text-sm text-accent">
              ¡Gracias! Recibimos tu consulta y te respondemos a la brevedad.
            </p>
          )}
        </form>

        <aside className="space-y-6">
          <div className="rounded-xl border border-border bg-surface p-7">
            <p className="eyebrow text-muted-foreground">Datos de contacto</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a className="hover:text-foreground" href="mailto:info@center-soft.com.ar">
                  info@center-soft.com.ar
                </a>
              </li>
              <li>www.center-soft.com.ar</li>
              <li>Argentina</li>
            </ul>
          </div>
          <div className="surface-ink rounded-xl p-7">
            <p className="font-display text-2xl font-bold text-ink-foreground">41 años</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-foreground/80">
              de experiencia en capacitación técnica para la industria automotriz y metalmecánica.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
