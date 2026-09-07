import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Center-Soft Córdoba - capacitación técnica" },
      {
        name: "description",
        content:
          "Contactá a Center-Soft: Av. Vélez Sarsfield 56, 1er piso, Complejo Santo Domingo, Córdoba. Tel. +54 351 5480092 · info@center-soft.com.ar",
      },
      { property: "og:title", content: "Contacto | Center-Soft" },
      {
        property: "og:description",
        content:
          "Escribinos y armamos una propuesta de capacitación a medida de tu operación.",
      },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setSending(true);
    setSent(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.message || "No se pudo enviar la consulta.");
      }

      setSent(true);
      form.reset();
    } catch (submissionError) {
      console.error(submissionError);
      setError(
        "No pudimos enviar la consulta. Intentá nuevamente en unos minutos.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="eyebrow text-accent">Contacto</p>
      <h1 className="mt-4 max-w-2xl text-4xl font-bold sm:text-5xl">
        Dejanos tu consulta
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Completá el formulario o escribinos directamente. Respondemos con una
        propuesta inicial sobre objetivos, contenidos y modalidad de dictado.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium">
              Nombre *
              <input
                required
                name="nombre"
                autoComplete="given-name"
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-accent focus:ring-2 focus:ring-ring/30"
              />
            </label>
            <label className="text-sm font-medium">
              Apellido *
              <input
                required
                name="apellido"
                autoComplete="family-name"
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-accent focus:ring-2 focus:ring-ring/30"
              />
            </label>
            <label className="text-sm font-medium">
              Email *
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-accent focus:ring-2 focus:ring-ring/30"
              />
            </label>
            <label className="text-sm font-medium">
              Empresa
              <input
                name="empresa"
                autoComplete="organization"
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-accent focus:ring-2 focus:ring-ring/30"
              />
            </label>
            <label className="text-sm font-medium sm:col-span-2">
              Teléfono
              <input
                name="telefono"
                autoComplete="tel"
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-accent focus:ring-2 focus:ring-ring/30"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-medium">
            Consulta *
            <textarea
              required
              name="mensaje"
              rows={5}
              className="mt-2 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:border-accent focus:ring-2 focus:ring-ring/30"
            />
          </label>

          {/* Campo trampa para bots. Debe quedar oculto para visitantes. */}
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px] h-px w-px opacity-0"
            aria-hidden="true"
          />

          <p className="mt-3 text-xs text-muted-foreground">
            (*) Campos obligatorios.
          </p>

          <button
            type="submit"
            disabled={sending}
            className="mt-5 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? "Enviando..." : "Enviar consulta"}
          </button>

          {sent && (
            <p className="mt-4 text-sm text-accent" role="status">
              ¡Gracias! Recibimos tu consulta y te respondemos a la brevedad.
            </p>
          )}

          {error && (
            <p className="mt-4 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
        </form>

        <aside className="space-y-6">
          <div className="rounded-xl border border-border bg-surface p-7">
            <p className="eyebrow text-muted-foreground">Datos de contacto</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a className="hover:text-foreground" href="tel:+5493515480092">
                  +54 351 5480092
                </a>
              </li>
              <li>
                <a
                  className="hover:text-foreground"
                  href="mailto:info@center-soft.com.ar"
                >
                  info@center-soft.com.ar
                </a>
              </li>
              <li>
                Av. Vélez Sarsfield 56 - 1er piso
                <br />
                Complejo Santo Domingo
                <br />
                Córdoba, Argentina
              </li>
            </ul>
          </div>
          <div className="surface-ink rounded-xl p-7">
            <p className="font-display text-2xl font-bold text-ink-foreground">
              41 años
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-foreground/80">
              acompañando en la formación técnica e informática a empresas de
              Argentina y el mundo.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
