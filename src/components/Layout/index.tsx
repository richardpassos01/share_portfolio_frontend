import React, { Suspense, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { ProgressBar } from '@designSystem';

function Layout({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(status !== 'loading' ? false : true);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [status]);

  return (
    <div>
      <title>B3 Portfólio</title>
      <Suspense fallback={<ProgressBar isLoading={isLoading} />}>
        {isLoading ? (
          <ProgressBar isLoading={isLoading} />
        ) : (
          <div>{children}</div>
        )}
      </Suspense>
    </div>
  );
}

export default Layout;
