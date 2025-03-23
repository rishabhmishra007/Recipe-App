import React from "react";
import Navbar from "./components/navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Details from "./pages/details";

const App = () => {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />


          // catch all unknown url and redirects to home pages
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
