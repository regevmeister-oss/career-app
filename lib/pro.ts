import { NextResponse } from "next/server";

export function checkPro(user: any) {
  return user?.isPro === true;
}





