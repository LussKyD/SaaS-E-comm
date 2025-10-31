export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10 font-sans">
      <header className="flex items-center gap-4 mb-8">
        <img src="/draco-logo.jpg" alt="Draco" className="w-20 rounded-full shadow-lg" />
        <h1 className="text-3xl font-bold text-gray-800">
          Draco Dynasty — SaaS Storefront Starter
        </h1>
      </header>
      <section className="text-center">
        <p className="text-lg text-gray-600 mb-4">
          Launch stores quickly. Billing powered by Stripe. Multi-tenant support.
        </p>
        <a
          href="/dashboard"
          className="inline-block bg-black text-white px-5 py-3 rounded-md hover:bg-gray-800 transition"
        >
          Go to dashboard →
        </a>
      </section>
    </main>
  );
}
