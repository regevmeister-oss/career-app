"use client";

import { useSession, signOut } from "next-auth/react";

export default function UserBar() {
  const { data } = useSession();

  if (!data?.user) return null;

  return (
    <div className="fixed top-4 right-4 text-white text-sm">
      {data.user.email}
      <button onClick={() => signOut()} className="ml-4 text-red-400">
        Logout
      </button>
    </div>
  );
}



