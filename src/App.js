import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import SignIn from "./routes/signIn/SignIn";
import Home from "./routes/home/Home";

const App = () => {

  const Shop = () => {
    return (
        <div>
            <div>
                shop page
            </div>
        </div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
