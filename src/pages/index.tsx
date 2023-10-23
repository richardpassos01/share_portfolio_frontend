import AppBar from '@components/AppBar';

const RootPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
};

export default RootPage;
