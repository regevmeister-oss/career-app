"use client";

import { useEffect, useState } from "react";

export default function Chart({ scores }: any) {
  return (
    <div className="w-full max-w-md mt-6">
      {Object.entries(scores).map(([key, value]: any) => (
        <div key={key} className="mb-3">
          <p className="text-sm mb-1">{key}</p>
          <div className="w-full bg-gray-800 rounded-full h-3">
            <div
              className="bg-yellow-400 h-3 rounded-full"
              style={{ width: ${value * 20}% }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
