import { NextResponse, type NextRequest } from 'next/server';
import { Context, InstitutionId } from '@types';
import PortfolioController from './PortfolioController';

export async function GET(
  _request: NextRequest,
  context: Context<InstitutionId>,
) {
  try {
    const institutionId = context.params.institutionId;

    return PortfolioController.get(institutionId).then((result) =>
      NextResponse.json(result, { status: 200 }),
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status },
    );
  }
}

const resync = async (
  _request: NextRequest,
  context: Context<InstitutionId>,
) => {
  try {
    const institutionId = context.params.institutionId;

    await PortfolioController.resync(institutionId);

    return NextResponse.json({ message: 'ok' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status },
    );
  }
};

export { resync as POST };
