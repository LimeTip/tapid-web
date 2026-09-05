import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <div className="site-container">
        <h1>Page not found.</h1>
        <p>The requested tapid page does not exist or has moved.</p>
        <Link href="/" className="action-primary">Return home</Link>
      </div>
    </main>
  );
}
