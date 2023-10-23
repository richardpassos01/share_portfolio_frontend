import AppBar from '../components/AppBar/AppBar';

const RootPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
};

export default RootPage;
