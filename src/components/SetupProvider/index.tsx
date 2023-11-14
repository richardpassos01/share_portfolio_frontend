import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Routes from '@constants/Routes';

function SetupProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (
      session &&
      !session.user?.institutions?.length &&
      router.pathname !== Routes.INSTITUTION
    ) {
      router.push(Routes.INSTITUTION);
    }
  }, [router, session]);

  return <>{children}</>;
}

export default SetupProvider;
