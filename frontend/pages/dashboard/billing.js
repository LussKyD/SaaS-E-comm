// pages/dashboard/billing.js
export default function Billing() {
  const handleCheckout = async () => {
    try {
      const res = await fetch('/api/billing/create-checkout-session', {
        method: 'POST',
      });
      const data = await res.json();
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        alert('Checkout link unavailable. Please try again.');
      }
    } catch (error) {
      console.error('Checkout failed:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-8 font-sans">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-10 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Billing</h1>
        <p className="text-gray-600 mb-6">
          Upgrade your account to unlock premium features and full access to all tools.
        </p>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800">Pro Plan</h2>
          <p className="text-gray-600 mt-1">Just $19/month — cancel anytime.</p>
        </div>

        <button
          onClick={handleCheckout}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Upgrade via Stripe
        </button>

        <div className="mt-8 text-center">
          <a
            href="/dashboard"
            className="text-gray-500 hover:text-gray-800 transition"
          >
            ← Back to Dashboard
          </a>
        </div>
      </div>
    </main>
  );
}
