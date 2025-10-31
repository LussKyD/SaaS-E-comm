// pages/dashboard/products.js
export default function Products() {
  return (
    <main className="p-10 min-h-screen bg-gray-50 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Products</h1>
      <p className="text-gray-600">
        Your product listings will appear here once integrated.
      </p>

      <div className="mt-8 border-t border-gray-200 pt-6">
        <a
          href="/dashboard"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          ← Back to Dashboard
        </a>
      </div>
    </main>
  );
}
