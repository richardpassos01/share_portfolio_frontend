import AppBar from "../components/AppBar/AppBar";
import Providers from "../components/Providers/Providers";

const RootPage = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
          <AppBar />
          {children}
    </>
  );
};

export default RootPage;