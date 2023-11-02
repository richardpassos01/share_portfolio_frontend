import { NextResponse, type NextRequest } from 'next/server';
import { Context, InstitutionId } from '@types';
import TransactionController from './TransactionController';

export async function GET(
  request: NextRequest,
  context: Context<InstitutionId>,
) {
  const institutionId = context.params.institutionId;
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '100';
  const order = searchParams.get('order') || 'desc';

  return TransactionController.listTransactions(
    institutionId,
    page,
    limit,
    order,
  )
    .then((result) => NextResponse.json(result, { status: 200 }))
    .catch((error) =>
      NextResponse.json({ error: 'Internal Server Error' }, { status: 500 }),
    );
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ message: 'Hello World' }, { status: 200 });
}
