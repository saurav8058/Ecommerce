import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import { Helmet } from "react-helmet";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Service from "../../pages/Service";


const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      
      <Header />
      
      <main style={{ minHeight: "100vh" }}>
     
      <ToastContainer />
   
        {children}
      </main>

    
 
      <Footer />
     

    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "Start Product 99 To According you",
  keywords: "mern,react,node,mongodb",
  author: "SAURAV GAUR",
};

export default Layout;
