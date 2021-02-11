import React from "react";
import Layout from "./components/layout/Layout.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style/sass/styles.scss";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="Discover our hotels, B&B's, guesthouses and more in Bergen!"
        />
        <title>Holidaze Hotel Booking</title>
      </Helmet>
      <div className="App">
        <header className="App-header">
          <Layout></Layout>
        </header>
      </div>
    </HelmetProvider>
  );
}

export default App;
