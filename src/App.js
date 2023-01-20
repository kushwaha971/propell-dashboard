import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Unmark from "./components/unmarkfunds";
import Portfoliofetch from "./components/portfoliofetch";


function App() {   
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/unmark-funds" element={<Unmark />} />
          <Route path="/kfin-portfolio-fetch" element={<Portfoliofetch />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
 