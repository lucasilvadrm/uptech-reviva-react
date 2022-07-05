import ContainerMain from "components/ContainerMain";
import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Nav";
import Search from "components/Search";
import { ReactNode } from "react";

interface PropsDefault {
  children: ReactNode;
}

export const DefaultPage = ({ children }: PropsDefault) => {
  return (
    <>
      <Header />
      <Navbar />
      <ContainerMain>
        <Search />
        {children}
      </ContainerMain>
      <Footer />
    </>
  );
};
