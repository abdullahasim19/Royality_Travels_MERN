import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import AuthPage from "./pages/AuthPage";
import TripsPage from "./pages/TripsPage";
import MainNavigation from "./components/Navigation/MainNavigation";
import { useSelector } from 'react-redux';
import Footer from "./components/Footer/Footer";
import HistoryPage from "./pages/HistoryPage";
import Ratings from "./pages/Ratings";

function App() {
  const userData = useSelector((state => state))
  return (
    <BrowserRouter>
    <MainNavigation/>
    <main>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/auth" element={<AuthPage/>}/>
      <Route path="/:pid/booking" element={<BookingPage/>}/>
      <Route path="/trip" element={<TripsPage/>}/>
      <Route path={`/${userData.userid}/history`} element={<HistoryPage/>} />
      <Route path="/rating" element={<Ratings/>}/>
    </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
