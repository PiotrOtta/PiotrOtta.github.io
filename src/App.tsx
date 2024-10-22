import { Route, Routes } from "react-router-dom";

import LandingPage from "@/pages/landingPage";
import WebsitesPage from "@/pages/websites";
import GamesPage from "@/pages/games";
import AboutMePage from "@/pages/aboutMe";
import ContactMe from "@/pages/contactMe";

function App() {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<WebsitesPage />} path="/websites" />
      <Route element={<GamesPage />} path="/games" />
      <Route element={<AboutMePage />} path="/about" />
      <Route element={<ContactMe />} path="/contact" />
    </Routes>
  );
}

export default App;
