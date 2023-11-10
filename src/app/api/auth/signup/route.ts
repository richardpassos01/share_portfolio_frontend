import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const response = await request.json();
  return NextResponse.json(response);
}
