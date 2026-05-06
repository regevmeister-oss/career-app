import { prisma } from "@/lib/prisma";

export async function checkReferralUnlock(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (user && user.referrals >= 2 && !user.isPro) {
    await prisma.user.update({
      where: { id: userId },
      data: { isPro: true },
    });
  }
}
