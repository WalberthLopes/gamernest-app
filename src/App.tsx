import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./modules/account/createAccount";

// Páginas
import Home from "./modules/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/create-account" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
