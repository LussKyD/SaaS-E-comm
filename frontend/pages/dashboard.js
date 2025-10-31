export default function Dashboard() {
  return (
    <div style={{padding:40}}>
      <h2>Dashboard</h2>
      <p>This is a starter dashboard for store management.</p>
      <ul>
        <li><a href="/dashboard/billing">Billing & Upgrade</a></li>
        <li><a href="/dashboard/products">Products</a></li>
      </ul>
    </div>
  );
}
