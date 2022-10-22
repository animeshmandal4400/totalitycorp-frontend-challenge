import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "../src/components/scripts/Home";
import { Navbar } from "../src/components/scripts/Navbar";

export const App = () => {
  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    
      </BrowserRouter>
    </>
  );
};


export default App;
