import Link from "next/link";

const evidence = [
  ["request", "is-char"],
  ["resolved", "is-char@1.0.0"],
  ["origin", "registry.npmjs.org"],
  ["integrity", "registry-declared SHA-512 by default"],
  ["lifecycle", "dependency scripts not run"],
];

export default function Hero() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <h1 id="home-title">Install packages <span>with evidence.</span></h1>
          <p>
            tapid resolves supported npm packages, verifies registry-declared integrity by default, and records the exact graph before activation.
          </p>
          <div className="hero-actions">
            <Link href="/docs/getting-started/" className="action-primary">Read the quickstart</Link>
            <Link href="#current-scope" className="action-secondary">See the alpha limits</Link>
          </div>
        </div>

        <figure className="install-artifact">
          <div className="artifact-command">
            <span>First package</span>
            <code>tapid i is-char</code>
          </div>
          <div className="artifact-package">
            <strong>is-char</strong>
            <span>1.0.0</span>
          </div>
          <dl className="artifact-evidence">
            {evidence.map(([key, value]) => (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="artifact-result">
            <span>Result</span>
            <code>Installed 1 package(s)</code>
          </div>
          <figcaption>
            Example from the supported npm-compatible path. Full digests are recorded in <code>tapid.lock</code>.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
