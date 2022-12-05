import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import AuthPage from "./pages/AuthPage";
import TripsPage from "./pages/TripsPage";
import MainNavigation from "./components/Navigation/MainNavigation";
import { useSelector } from 'react-redux';
import Footer from "./components/Footer/Footer";
import HistoryPage from "./pages/HistoryPage";
import WishlistPage from "./pages/WishlistPage";
import Ratings from "./pages/Ratings";
import TopRated from "./pages/TopRated";

function App() {
  const userData = useSelector((state => state))
  let routes;
  if(userData.login){
    routes=(
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/:pid/booking" element={<BookingPage/>}/>
      <Route path="/trip" element={<TripsPage/>}/>
      <Route path='/:uid/history' element={<HistoryPage/>} />
      <Route path='/:uid/wishlist' element={<WishlistPage/>} />
      <Route path="/:pid/rating" element={<Ratings/>}/>
      <Route path="/toprated" element={<TopRated/>}/>
    </Routes>)
  }
  else
  {
    routes=(
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/trip" element={<TripsPage/>}/>
      <Route path="/toprated" element={<TopRated/>}/>
      <Route path="/auth" element={<AuthPage/>}/>
    </Routes>)
  }
  return (
    <BrowserRouter>
    <MainNavigation/>
    <main>
    {routes}
    </main>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
