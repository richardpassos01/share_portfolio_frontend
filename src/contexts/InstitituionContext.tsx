import { useSession } from 'next-auth/react';
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

export const initialState = {
  institution: {} as Record<string, string>,
  setInstitution: (() => {}) as Dispatch<
    SetStateAction<Record<string, string>>
  >,
};

export const initialInstitution = {
  id: '',
  name: '',
};

export const InstitutionContext = createContext(initialState);

export const InstitutionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: session } = useSession();

  const [institution, setInstitution] =
    useState<Record<string, string>>(initialInstitution);

  useEffect(() => {
    setInstitution(
      session?.user?.institutions.length
        ? session.user.institutions[0]
        : initialInstitution,
    );
  }, [session]);

  return (
    <InstitutionContext.Provider value={{ institution, setInstitution }}>
      {children}
    </InstitutionContext.Provider>
  );
};
