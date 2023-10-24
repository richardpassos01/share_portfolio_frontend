import AppBar from '@components/AppBar';

const RootPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppBar boxShadown={true} />
      {children}
    </>
  );
};

export default RootPage;
