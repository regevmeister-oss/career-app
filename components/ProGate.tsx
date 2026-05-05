"use client";

import { useSession } from "next-auth/react";

export default function ProGate({ children }: any) {
  const { data: session } = useSession();

  if (!session?.user?.isPro) {
    return (
      <div className="p-6 bg-red-500/20 rounded">
        🔒 This feature is PRO only
      </div>
    );
  }

  return children;
}


