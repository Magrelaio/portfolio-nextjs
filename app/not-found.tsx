"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, AlertTriangle, Mail, Loader2 } from "lucide-react";
import { useState } from "react";

export default function NotFound() {
  const [isSending, setIsSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSendEmail = async () => {
    if (isSending || emailSent) return;
    
    setIsSending(true);
    
    try {
      const response = await fetch("/api/report-404", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: window.location.pathname,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        }),
      });

      const data = await response.json();
      
      if (data.ok) {
        setEmailSent(true);
        setTimeout(() => setEmailSent(false), 3000);
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 relative overflow-hidden">
      
      <div className="absolute pointer-events-none w-[600px] h-[600px] bg-green-600/10 blur-[140px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl"
      >
        <div className="flex justify-center mb-6">
          <AlertTriangle size={56} className="text-green-500" />
        </div>

        <h1 className="text-6xl font-bold mb-4">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-300">
          Página não encontrada
        </h2>

        <p className="text-slate-400 mb-10">
          A página que você procura não existe ou foi movida. <br />
          Se você acha que isto é um erro, envie-me um email!
        </p>
        
        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            <Home size={18} />
            Voltar para o início
          </Link>
          
          <button
            onClick={handleSendEmail}
            disabled={isSending || emailSent}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all cursor-pointer ${
              emailSent 
                ? "bg-green-700 text-green-100 cursor-default" 
                : isSending
                ? "bg-green-800 text-green-200 cursor-wait"
                : "bg-green-600 hover:bg-green-500 text-white"
            }`}
          >
            {isSending ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Enviando...
              </>
            ) : emailSent ? (
              <>
                <Mail size={18} />
                Email Enviado!
              </>
            ) : (
              <>
                <Mail size={18} />
                Reportar erro
              </>
            )}
          </button>
        </div>
        
        {emailSent && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-green-400 text-sm"
          >
            Obrigado pelo reporte! Fui notificado sobre este erro.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}