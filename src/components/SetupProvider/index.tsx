import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Routes from '@constants/Routes';
import { useInstitution } from '@hooks/useInstitution';

function SetupProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const { institution } = useInstitution();
  const router = useRouter();

  useEffect(() => {
    if (
      session?.user?.institutions?.length === 0 &&
      router.pathname !== Routes.INSTITUTION &&
      !institution.name
    ) {
      router.push(Routes.INSTITUTION);
    }
  }, [router, session, institution]);

  return <>{children}</>;
}

export default SetupProvider;
