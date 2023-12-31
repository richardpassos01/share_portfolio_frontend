import { NextResponse, type NextRequest } from 'next/server';
import { Context } from '@types';
import OverviewController from './OverviewController';

export async function GET(_request: NextRequest, context: Context) {
  try {
    const institutionId = context.params.contextId;

    return OverviewController.get(institutionId).then((result) =>
      NextResponse.json(result, { status: 200 }),
    );
  } catch (error: any) {
    return new NextResponse(error.message, { status: error?.status ?? 500 });
  }
}
