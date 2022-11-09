import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import AuthPage from "./pages/AuthPage";
import TripsPage from "./pages/TripsPage";
import MainNavigation from "./components/Navigation/MainNavigation";

function App() {
  return (
    <BrowserRouter>
    <MainNavigation/>
    <main>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/auth" element={<AuthPage/>}/>
      <Route path="/booking" element={<BookingPage/>}/>
      <Route path="/trip" element={<TripsPage/>}/>
    </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
