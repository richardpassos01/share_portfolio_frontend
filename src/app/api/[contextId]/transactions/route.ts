import { NextResponse, type NextRequest } from 'next/server';
import { Context } from '@types';
import TransactionController from './TransactionController';
import { yearMonthFormatterToApi } from '@helpers';

export async function GET(request: NextRequest, context: Context) {
  try {
    const institutionId = context.params.contextId;
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '100';
    const order = searchParams.get('order') || 'desc';
    const monthYears = searchParams.get('monthYear');
    const tickers = searchParams.get('ticker');
    const formattedMonthYear = monthYears
      ? monthYears.split(',').map((ticker) => yearMonthFormatterToApi(ticker))
      : [];
    const formattedTicker = tickers ? tickers.split(',') : [];

    return TransactionController.listTransactions(
      institutionId,
      page,
      limit,
      order,
      formattedMonthYear,
      formattedTicker,
    ).then((result) => NextResponse.json(result, { status: 200 }));
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest, context: Context) {
  try {
    const institutionId = context.params.contextId;
    const data = await request.json();

    await TransactionController.createTransactions(institutionId, data);

    return NextResponse.json({ message: 'ok' }, { status: 201 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: error.status ?? 500 });
  }
}
