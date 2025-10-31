export default function Billing() {
  const handleCheckout = async () => {
    // call backend to create checkout session
    const res = await fetch('/api/billing/create-checkout-session', {method:'POST'});
    const data = await res.json();
    window.location.href = data.checkoutUrl;
  };

  return (
    <div style={{padding:40}}>
      <h3>Billing</h3>
      <p>Upgrade to Pro: $19/month</p>
      <button onClick={handleCheckout}>Upgrade via Stripe</button>
    </div>
  );
}
