import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Header from "./routes/header/nav";
import Contact from "./routes/contact/contact";
import Shop from "./components/shop/shop"

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />}/>
          <Route path="Contact" element={<Contact />} />
          <Route path="Shop" element={<Shop />} />
      </Route>

    </Routes>
    );
};

export default App;