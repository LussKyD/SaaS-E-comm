// pages/dashboard.js
export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-10 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Dashboard
        </h1>
        <p className="text-gray-600 mb-8">
          Manage your store operations and settings below.
        </p>

        <ul className="space-y-4">
          <li>
            <a
              href="/dashboard/billing"
              className="block w-full text-center bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Billing & Upgrade
            </a>
          </li>
          <li>
            <a
              href="/dashboard/products"
              className="block w-full text-center bg-white border border-gray-300 text-gray-800 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Products
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
