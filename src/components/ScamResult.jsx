import React from "react";

export default function ScamResult({ result }) {
  if (!result) return null;

  return (
    <div className="mt-6 bg-white rounded-xl shadow-lg p-6 max-w-md w-full">

      <h2 className="text-xl font-bold mb-3">Analysis Result</h2>

      <p className="mb-2">
        <strong>Verdict:</strong>{" "}
        <span
          className={
            result.verdict === "Scam"
              ? "text-red-500"
              : result.verdict === "Suspicious"
              ? "text-yellow-500"
              : "text-green-500"
          }
        >
          {result.verdict}
        </span>
      </p>

      <p className="mb-2">
        <strong>Risk Score:</strong> {result.score}%
      </p>

      <p className="mb-3">
        <strong>Explanation:</strong> {result.explanation}
      </p>

      <div>
        <strong>Red Flags:</strong>
        <ul className="list-disc ml-5 mt-1">
          {result.flags.map((flag, i) => (
            <li key={i}>{flag}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}