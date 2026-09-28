import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";
import ArticleDetails from "./pages/ArticleDetails";
import CharacterDetails from "./pages/CharacterDetails";

import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Calendar from "./pages/Calendar";
import Trailers from "./pages/Trailers";
import Merchandise from "./pages/Merchandise";
import Cosplay from "./pages/Cosplay";
import Releases from "./pages/Releases";
import Bookmarks from "./pages/Bookmarks";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import EmailVerification from "./pages/auth/EmailVerification";

import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";

import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />
        <Route
          path="/verify-email"
          element={<EmailVerification />}
        />

        {/* User */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Main Application */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route
            path="/category/:categoryId"
            element={<Category />}
          />

          <Route path="/search" element={<Search />} />

          <Route
            path="/article/:id"
            element={<ArticleDetails />}
          />

          <Route
            path="/character/:id"
            element={<CharacterDetails />}
          />

          <Route path="/events" element={<Events />} />

          <Route
            path="/events/:id"
            element={<EventDetails />}
          />

          <Route path="/calendar" element={<Calendar />} />

          <Route path="/trailers" element={<Trailers />} />

          <Route
            path="/merchandise"
            element={<Merchandise />}
          />

          <Route path="/cosplay" element={<Cosplay />} />

          <Route path="/releases" element={<Releases />} />

          <Route path="/bookmarks" element={<Bookmarks />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;