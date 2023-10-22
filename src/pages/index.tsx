import AppBar from "../components/AppBar/AppBar";
import Providers from "../components/Providers/Providers";

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
       <Providers>
          <AppBar />
          {children}
        </Providers>
    </>
  );
};

export default RootLayout;