import React from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import RowList from "./Components/Rows/RowList/RowList";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <RowList /> {/* All rows rendered here */}
      <Footer />
    </div>
  );
}

export default App;
