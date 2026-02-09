import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { path, timestamp, userAgent } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Error" <${process.env.SMTP_USER}>`,
      to: process.env.REPORT_EMAIL,
      subject: "Alguém caiu em uma página 404",
      html: `
        <h2>Erro 404 no seu portfólio</h2>
        <p><strong>Rota acessada:</strong> ${path}</p>
        <p><strong>Data:</strong> ${new Date(timestamp).toLocaleString("pt-BR")}</p>
        <p><strong>User Agent:</strong> ${userAgent}</p>
        <p><strong>URL completa:</strong> ${process.env.NEXT_PUBLIC_SITE_URL || "https://caiocesardev.com.br"}${path}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro ao enviar email de erro 404:", error);
    return NextResponse.json(
      { ok: false, error: "Erro ao enviar email" },
      { status: 500 }
    );
  }
}