
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Catalog from "./components/card/Сatalog";

import Forward from "./components/forward/Forward";

function App() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentItems = JSON.parse(searchParams.get("items")) || [];

  return (
    <div >
      <Routes>
        {/* <Route path="/favorite" element={<FavoriteCards />} /> */}
        <Route path="/forward" element={<Forward items={currentItems} />} />
        <Route path="/" element={<Catalog />} />
      </Routes>

    </div>
  );
}

export default App;




