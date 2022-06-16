import Main from "components/Main";
import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Nav";
import { Outlet } from 'react-router-dom';
import Search from "components/Search";

export const DefaultPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Main>
        <Search />
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}