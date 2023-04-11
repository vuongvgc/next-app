"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("error", error);
  }, [error]);

  return (
    <div className="h-12 w-12 flex justify-center align-middle">
      <div>something went wrong !</div>
      <button onClick={() => reset}>Try Again</button>
    </div>
  );
}
