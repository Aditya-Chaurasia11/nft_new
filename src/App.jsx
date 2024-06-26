import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Navbar from "./Components/Navbar.jsx";
import Nft from "./Pages/Nft.jsx";
import Transfer from "./Pages/Transfer.jsx";
import NftPage from "./Pages/NftPage.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/nft" element={<Nft />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/nft/:address/:index" element={<NftPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
