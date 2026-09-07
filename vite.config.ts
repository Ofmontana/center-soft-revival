// @lovable.dev/vite-tanstack-config ya incluye los plugins principales de Lovable.
// No agregues manualmente tanstackStart, viteReact, tailwindcss, tsConfigPaths,
// nitro ni TanStack devtools.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";
import nodemailer from "nodemailer";
 
function contactMailPlugin(): Plugin {
  return {
    name: "center-soft-contact-mail",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (request, response) => {
        response.setHeader("Content-Type", "application/json; charset=utf-8");
 
        if (request.method !== "POST") {
          response.statusCode = 405;
          response.setHeader("Allow", "POST");
          response.end(
            JSON.stringify({
              success: false,
              message: "Método no permitido",
            }),
          );
          return;
        }
 
        try {
          const chunks: Buffer[] = [];
 
          for await (const chunk of request) {
            chunks.push(Buffer.from(chunk));
          }
 
          const body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
 
          const nombre = String(body.nombre ?? "").trim();
          const apellido = String(body.apellido ?? "").trim();
          const email = String(body.email ?? "").trim();
          const empresa = String(body.empresa ?? "").trim();
          const telefono = String(body.telefono ?? "").trim();
          const mensaje = String(body.mensaje ?? "").trim();
          const website = String(body.website ?? "").trim();
 
          // Campo honeypot: si un bot lo completa, no se envía ningún correo.
          if (website) {
            response.statusCode = 200;
            response.end(JSON.stringify({ success: true }));
            return;
          }
 
          if (!nombre || !apellido || !email || !mensaje) {
            response.statusCode = 400;
            response.end(
              JSON.stringify({
                success: false,
                message: "Faltan campos obligatorios",
              }),
            );
            return;
          }
 
          if (!/^\S+@\S+\.\S+$/.test(email)) {
            response.statusCode = 400;
            response.end(
              JSON.stringify({
                success: false,
                message: "Email inválido",
              }),
            );
            return;
          }
 
          const smtpPort = Number(process.env.SMTP_PORT || 465);
          const smtpUser = process.env.SMTP_USER;
          const smtpPassword = process.env.SMTP_PASSWORD;
          const smtpHost = process.env.SMTP_HOST;
          const contactTo = process.env.CONTACT_TO || smtpUser;
 
          if (!smtpHost || !smtpUser || !smtpPassword || !contactTo) {
            throw new Error("Faltan variables SMTP del servidor");
          }
 
          const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure:
              String(process.env.SMTP_SECURE).toLowerCase() === "true" ||
              smtpPort === 465,
            auth: {
              user: smtpUser,
              pass: smtpPassword,
            },
          });
 
          await transporter.sendMail({
            from: `Formulario web <${smtpUser}>`,
            to: contactTo,
            replyTo: email,
            subject: "Nueva consulta desde centersoft.com.ar",
            text: [
              `Nombre: ${nombre} ${apellido}`,
              `Email: ${email}`,
              `Empresa: ${empresa || "No informada"}`,
              `Teléfono: ${telefono || "No informado"}`,
              "",
              "Consulta:",
              mensaje,
            ].join("\n"),
          });
 
          response.statusCode = 200;
          response.end(JSON.stringify({ success: true }));
        } catch (error) {
          console.error("Error enviando consulta de contacto", error);
          response.statusCode = 500;
          response.end(
            JSON.stringify({
              success: false,
              message: "No se pudo enviar la consulta",
            }),
          );
        }
      });
    },
  };
}
 
export default defineConfig({
  vite: {
    plugins: [contactMailPlugin()],
    server: {
      allowedHosts: ["centersoft.com.ar", "www.centersoft.com.ar"],
    },
  },
 
  tanstackStart: {
    // Mantiene el entrypoint personalizado de SSR del proyecto.
    server: { entry: "server" },
  },
});
