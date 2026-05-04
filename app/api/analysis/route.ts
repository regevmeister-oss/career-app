import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  const analysis = await prisma.analysis.create({
    data: {
      userId: "demo-user",
      result: JSON.stringify(body)
    }
  })

  return NextResponse.json(analysis)
}
