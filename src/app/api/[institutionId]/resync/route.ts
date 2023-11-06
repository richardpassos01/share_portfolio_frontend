import { NextResponse, type NextRequest } from 'next/server';
import { Context, InstitutionId } from '@types';
import ResyncController from './ResyncController';

export async function POST(
  _request: NextRequest,
  context: Context<InstitutionId>,
) {
  try {
    const institutionId = context.params.institutionId;

    await ResyncController.resync(institutionId);

    return NextResponse.json({ message: 'ok' }, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: error?.status ?? 500 });
  }
}
