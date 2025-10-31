export default function Home() {
  return (
    <main style={{padding:40, fontFamily:'Inter, sans-serif'}}>
      <header style={{display:'flex', alignItems:'center', gap:20}}>
        <img src="/draco-logo.jpg" alt="Draco" style={{width:80}}/>
        <h1>Draco Dynasty — SaaS Storefront Starter</h1>
      </header>
      <section style={{marginTop:30}}>
        <p>Launch stores quickly. Billing powered by Stripe. Multi-tenant support.</p>
        <a href="/dashboard">Go to dashboard →</a>
      </section>
    </main>
  );
}
