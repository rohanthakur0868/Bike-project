import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsappButton from "./components/WhatsappButton.jsx";
import Home from "./pages/Home.jsx";
import Community from "./pages/Community.jsx";
import Events from "./pages/Events.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Join from "./pages/Join.jsx";
import Signup from "./pages/Signup.jsx";
import BikeDetails from "./pages/BikeDetails.jsx"; 
import FeatureDetails from "./pages/FeatureDetails.jsx";
import FeaturedBikes from "./pages/FeaturedBikes";
import Members from "./pages/Members";
import Messages from "./pages/Messages.jsx";
const App = () => {
  return (
    <Router>
      <Navbar />

      <div className="pt-20">
       <Routes>

  <Route path="/" element={<Home />} />
  <Route path="/community" element={<Community />} />
  <Route path="/events" element={<Events />} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/join" element={<Join />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/bike/:name" element={<BikeDetails />} />
  <Route path="/feature/:feature" element={<FeatureDetails />} />

  <Route path="/featured-bikes" element={<FeaturedBikes />} />
  <Route path="/members" element={<Members />} />
  <Route path="/messages" element={<Messages />} />

</Routes>
      </div>

      <WhatsappButton />
      <Footer />
    </Router>
  );
};

export default App;