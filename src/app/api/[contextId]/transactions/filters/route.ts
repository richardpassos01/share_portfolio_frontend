import { NextResponse, type NextRequest } from 'next/server';
import { Context } from '@types';
import FiltersController from './FiltersController';

export async function GET(_request: NextRequest, context: Context) {
  try {
    const institutionId = context.params.contextId;

    return FiltersController.getTransactionTableFilters(institutionId).then(
      (result) => NextResponse.json(result, { status: 200 }),
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
