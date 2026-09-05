import Link from "next/link";
import CopyCommand from "./CopyCommand";

const quickstart = `mkdir demo
cd demo
tapid init
tapid i is-char`;

export default function EvidenceSection() {
  return (
    <section className="quickstart-section" aria-labelledby="quickstart-title">
      <div className="site-container quickstart-grid">
        <div>
          <h2 id="quickstart-title">From an empty folder to an exact package graph.</h2>
          <p>
            The current alpha is built from source. Once the binary is available, this is the shortest supported package workflow.
          </p>
          <Link href="/docs/getting-started/" className="inverse-link">Build the alpha from source</Link>
        </div>
        <CopyCommand command={quickstart} />
      </div>
    </section>
  );
}
