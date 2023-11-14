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

    return InstitutionController.create(userId, data).then((result) =>
      NextResponse.json(result, { status: 201 }),
    );
  } catch (error: any) {
    return new NextResponse(error.message, { status: error.status ?? 500 });
  }
}
