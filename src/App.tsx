import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./modules/home/Home";
import Profile from "./modules/account/Profile";
import Shop from "./modules/shop/Shop";
import CreateAccount from "./modules/account/components/createAccount";
import PaymentSucced from "./modules/shop/components/paymentSucced";
import PaymentFailed from "./modules/shop/components/paymentFailed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/create-account" element={<CreateAccount />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/success" element={<PaymentSucced />} />
        <Route path="/shop/failed" element={<PaymentFailed />} />
        <Route path="/account/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
