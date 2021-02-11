import React from "react";
import Layout from "./components/layout/Layout.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style/sass/styles.scss";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <meta
            name="description"
            content="Discover our hotels, B&B's, guesthouses and more in Bergen!"
            data-rh={true}
          />
          <title>Holidaze Hotel Booking</title>
        </Helmet>
        <header className="App-header">
          <Layout></Layout>
        </header>
      </div>
    </HelmetProvider>
  );
}

export default App;
