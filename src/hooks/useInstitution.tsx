import { useContext } from 'react';
import { InstitutionContext } from '@contexts/InstitituionContext';

export const useInstitution = () => {
  const context = useContext(InstitutionContext);
  if (!context) {
    throw new Error(
      'useInstitution must be used within an InstitutionProvider',
    );
  }
  return context;
};
