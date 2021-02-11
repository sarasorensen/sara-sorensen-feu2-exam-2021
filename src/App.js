import React from "react";
import { AuthContextProvider } from "./context/AuthContext";
import Layout from "./components/layout/Layout.jsx";
//import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style/sass/styles.scss";

function App() {
  return (
    <React.StrictMode>
      <AuthContextProvider>
        <div className="App">
          <header className="App-header">
            <Layout></Layout>
          </header>
        </div>
      </AuthContextProvider>
    </React.StrictMode>
  );
}

export default App;
