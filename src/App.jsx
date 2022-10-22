import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "../src/components/scripts/Home";
import { Jobs } from "../src/components/scripts/Jobs";
import { Messaging } from "../src/components/scripts/Messaging";
import { MyNetwork } from "../src/components/scripts/MyNetwork";
import { Navbar } from "../src/components/scripts/Navbar";
import { Notification } from "../src/components/scripts/Notification";

export const App = () => {
  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mynetwork" element={<MyNetwork />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    
      </BrowserRouter>
    </>
  );
};


export default App;
