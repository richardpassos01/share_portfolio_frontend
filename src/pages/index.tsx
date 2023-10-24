import { Header } from '../design-system/components/Header';

const RootPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default RootPage;
