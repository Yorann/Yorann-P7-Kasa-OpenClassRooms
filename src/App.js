import "./sass/app.scss";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import AccomodationPage from "./pages/AccomodationPage";
import NotFoundPage from "./pages/NotFoundPage";

/**
 * L'application contient le layout et redirige vers home, about , accomodation page
 * @returns 
 */
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="accomodationpage/:id" element={<AccomodationPage />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
