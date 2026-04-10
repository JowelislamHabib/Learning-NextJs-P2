"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Caught error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl border border-error">
        <div className="card-body items-center text-center">
          <div className="text-error mb-2"></div>

          <h2 className="card-title text-error italic">Kam Sarche!</h2>
          <p className="text-sm opacity-70">
            Obai ami pore aytasi apne ekhn chole jan
          </p>

          <div className="card-actions mt-4">
            <button
              className="btn btn-error btn-outline"
              onClick={() => reset()}
            >
              Dekhi arekbar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
