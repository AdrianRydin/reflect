"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export default function AdminRowActions({
  id,
  status,
}: {
  id: string;
  status: "draft" | "published";
}) {
  const [pending, start] = useTransition();
  const router = useRouter();

  function patch(next: { status?: "draft" | "published" }) {
    start(async () => {
      const res = await fetch(`/api/blog/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "applications/json" },
        body: JSON.stringify(next),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        alert(j?.error ?? "Kunde inte uppdatera");
        return;
      }
      router.refresh();
    });
  }

  function del() {
    if (!confirm("Är du säker på att du vill radera posten?")) return;
    start(async () => {
      const res = await fetch(`/api/blog/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        alert(j?.error ?? "Kunde inte radera");
        return;
      }
      router.refresh();
    });
  }
  return (
    <div className="flex items-center gap-2">
      {status === "published" ? (
        <button
          disabled={pending}
          onClick={() => patch({ status: "draft" })}
          className="px-2 py-1 rounded-lg border border-neutral-700 hover:bg-neutral-800"
        >
          Unpublish
        </button>
      ) : (
        <button
          disabled={pending}
          onClick={() => patch({ status: "published" })}
          className="px-2 py-1 rounded-lg border border-neutral-700 hover:bg-neutral-800"
        >
          Publish
        </button>
      )}
      <button
        disabled={pending}
        onClick={del}
        className="inline-flex items-center gap-1 px-2 py-1 rounded-lg border border-red-600 text-red-400 hover:bg-red-950/30"
      >
        <Trash2 className="w-4 h-4" />
        Delete
      </button>
    </div>
  );
}
