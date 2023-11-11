import { NextResponse, type NextRequest } from 'next/server';
import { Context, InstitutionId } from '@types';
import MonthlyBalanceController from './MonthlyBalanceController';

export async function GET(
  _request: NextRequest,
  context: Context<InstitutionId>,
) {
  try {
    const institutionId = context.params.contextId;

    return MonthlyBalanceController.list(institutionId).then((result) =>
      NextResponse.json(result, { status: 200 }),
    );
  } catch (error: any) {
    return new NextResponse(error.message, { status: error.status ?? 500 });
  }
}
