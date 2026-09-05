"use client";

import { useEffect, useRef } from "react";

export default function CopyCommand({ command }: { command: string }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const resetTimerRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (resetTimerRef.current !== null) window.clearTimeout(resetTimerRef.current);
  }, []);

  function update(label: string, announcement: string) {
    if (buttonRef.current) buttonRef.current.textContent = label;
    if (statusRef.current) statusRef.current.textContent = announcement;
  }

  function setDisabled(disabled: boolean) {
    if (buttonRef.current) buttonRef.current.disabled = disabled;
  }

  async function copy() {
    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }

    update("Copying", "Copying commands.");
    setDisabled(true);

    try {
      if (!navigator.clipboard) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(command);
      update("Copied", "Commands copied to the clipboard.");
      resetTimerRef.current = window.setTimeout(() => {
        update("Copy commands", "");
        resetTimerRef.current = null;
      }, 1800);
    } catch {
      update("Select and copy", "Copy failed. Select the commands manually.");
    } finally {
      setDisabled(false);
    }
  }

  return (
    <div className="copy-command">
      <pre aria-label="Quickstart commands"><code>{command}</code></pre>
      <button ref={buttonRef} type="button" onClick={copy}>Copy commands</button>
      <span ref={statusRef} className="sr-only" aria-live="polite" />
    </div>
  );
}
