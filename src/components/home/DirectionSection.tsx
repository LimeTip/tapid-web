import Link from "next/link";

const available = [
  "Supported npm metadata and deterministic transitive resolution",
  "Registry-declared SHA-512 integrity required by default for online installs",
  "Canonical schema-6 lockfiles and verified store replay",
  "Managed node_modules and executable metadata",
  "Dependency lifecycle scripts suppressed during installation",
  "Explicit root project scripts with argument and exit-code forwarding",
];

const limits = [
  "An explicit compatibility exception can use locally computed integrity, but frozen replay rejects that provenance",
  "No complete npm compatibility, peer resolution, workspaces, aliases, or tags",
  "No private-registry authentication or lifecycle-script approval workflow",
  "No package malware verdict, provenance guarantee, or process sandbox",
  "No asset-backed stable release available through the public installer yet",
];

export default function DirectionSection() {
  return (
    <section className="scope-section" id="current-scope" aria-labelledby="scope-title">
      <div className="site-container">
        <div className="scope-intro">
          <h2 id="scope-title">Useful as an alpha. Precise about the boundary.</h2>
          <p>
            tapid 0.0.7 is a source-built development target for evaluating a deliberately bounded npm-compatible path. It is not production support.
          </p>
        </div>

        <div className="scope-columns">
          <div>
            <h3>What works now</h3>
            <ul>{available.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <aside>
            <h3>What tapid does not claim</h3>
            <ul>{limits.map((item) => <li key={item}>{item}</li>)}</ul>
          </aside>
        </div>

        <div className="scope-action">
          <div>
            <strong>Evaluate the current path</strong>
            <span>Build from source, run one supported package flow, and inspect the result.</span>
          </div>
          <Link href="/docs/getting-started/" className="action-primary">Open getting started</Link>
        </div>
      </div>
    </section>
  );
}
