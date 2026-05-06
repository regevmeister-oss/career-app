'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Processing() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/result');
    }, 3000);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center text-3xl bg-black text-white">
      AI חושב...
    </div>
  );
}
