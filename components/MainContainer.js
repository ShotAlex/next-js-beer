import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";


const MainContainer = ({ title = '', description = '', children }) => {
  return (
    <>
      <Head>
        <meta
          keywords={'beer ' + title}
          description={description || 'top beer'}
          content={description || 'top beer'}
        />
        <title>{title}</title>
      </Head>

      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  );
};

export default MainContainer;