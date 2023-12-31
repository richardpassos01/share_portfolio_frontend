import { NextResponse, type NextRequest } from 'next/server';
import { Context } from '@types';
import ResyncController from './ResyncController';

export async function POST(_request: NextRequest, context: Context) {
  try {
    const institutionId = context.params.contextId;

    await ResyncController.resync(institutionId);

    return NextResponse.json({ message: 'ok' }, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: error?.status ?? 500 });
  }
}
