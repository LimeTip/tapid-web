import Link from "next/link";

const steps = [
  {
    title: "Resolve",
    body: "Bind each supported request to an exact package version, registry origin, and dependency edge.",
  },
  {
    title: "Verify",
    body: "Require registry-declared SHA-512 integrity by default before an online artifact enters the verified store.",
  },
  {
    title: "Record",
    body: "Write canonical schema-6 identities, graph edges, manifest state, and verified tree inputs to tapid.lock.",
  },
  {
    title: "Activate",
    body: "Stage managed node_modules and make it current only after the required inputs validate.",
  },
];

const lockfile = `{
  "lockfileVersion": 6,
  "rootManifestDigest": "sha256-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "resolverVersion": "0",
  "linkerVersion": "0",
  "roots": [
    "https://registry.example.test|alpha@1.0.0|peer=-|platform=os=;cpu=;libc="
  ],
  "packages": {
    "https://registry.example.test|alpha@1.0.0|peer=-|platform=os=;cpu=;libc=": {
      "registry": "https://registry.example.test",
      "name": "alpha",
      "version": "1.0.0",
      "artifactIntegrity": "sha512-ndzQj2/g3boQWYtZQd+xKkW0TfhrPjTperEStZq/VaKgGIw/wMEZ9DsrhO9Yo/BpUtwv0kArKxmAWfv+FVKoPg==",
      "registryIntegrityDeclared": true,
      "unpackedDigest": "sha256-cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
      "treeDigest": "sha256-cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
      "platformContext": "os=;cpu=;libc=",
      "dependencies": {}
    }
  }
}`;

export default function WorkflowSection() {
  return (
    <>
      <section className="workflow-section" aria-labelledby="workflow-title">
        <div className="site-container">
          <div className="section-heading">
            <h2 id="workflow-title">A short command with a visible chain of decisions.</h2>
            <p>
              Each stage answers a separate trust question. The result remains inspectable instead of becoming a universal safety score.
            </p>
          </div>
          <ol className="workflow-steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lockfile-section" aria-labelledby="lockfile-title">
        <div className="site-container lockfile-grid">
          <div className="lockfile-copy">
            <h2 id="lockfile-title">The lockfile is evidence for replay.</h2>
            <p>
              It binds the project manifest to exact package identities and verified tree inputs. Offline and frozen modes validate those inputs before activation.
            </p>
            <Link href="/docs/concepts/package-identity/" className="action-secondary">Understand package identity</Link>
          </div>
          <figure className="lockfile-artifact">
            <pre tabIndex={0} aria-label="Scrollable schema-6 lockfile test fixture"><code>{lockfile}</code></pre>
            <figcaption>
              Structurally valid schema-6 fixture from the lockfile tests. Values are synthetic test inputs, not a package security verdict. Scroll horizontally on narrow screens to inspect complete keys and digests.
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
