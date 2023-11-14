import { NextResponse, type NextRequest } from 'next/server';
import { Context } from '@types';
import InstitutionController from './InstitutionController';

export async function GET(_request: NextRequest, context: Context) {
  try {
    const userId = context.params.contextId;

    return InstitutionController.listInstitutions(userId).then((result) =>
      NextResponse.json(result, { status: 200 }),
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest, context: Context) {
  try {
    const userId = context.params.contextId;
    const data = await request.json();

    await InstitutionController.create(userId, data);

    return NextResponse.json({ message: 'ok' }, { status: 201 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: error.status ?? 500 });
  }
}
