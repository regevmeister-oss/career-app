import { useSession } from "next-auth/react";

const { data: session } = useSession();

const handleUpgrade = async () => {
  const res = await fetch("/api/checkout", {
    method: "POST",
    body: JSON.stringify({
      userId: session?.user.id,
    }),
  });

  const data = await res.json();
  window.location.href = data.url;
};



