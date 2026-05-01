import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import AppRoutes from "./routes/AppRoutes";

import styled from "styled-components";

const Layout = styled.div`
  padding-top: 80px; /* Prevent navbar overlap */
`;

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <AppRoutes />
      </Layout>
      <Footer />
    </>
  );
}

export default App;