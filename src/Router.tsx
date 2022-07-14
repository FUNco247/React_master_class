import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Chart from "./routes/Price";
import Price from "./routes/Chart";

function Router() {
  return (
    <BrowserRouter basename="React_master_class">
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
