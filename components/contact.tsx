export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <h3 className="text-3xl font-bold mb-6">Contato</h3>

      <p className="text-gray-400 mb-6">
        Quer trabalhar comigo ou conversar sobre algo?
      </p>

      <a
        href="mailto:seuemail@email.com"
        className="bg-primary px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
      >
        Enviar Email
      </a>
    </section>
  );
}
