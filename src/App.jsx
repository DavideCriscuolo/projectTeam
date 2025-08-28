import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import TripDetailsPage from "./pages/TripDetailsPage";
import FeaturesPage from "./pages/FeaturesPage";

//contact details page component
import ContactDetailsPage from "./pages/ContactDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />

            <Route path="/trip/:id" Component={TripDetailsPage} />
            <Route path="/features" Component={FeaturesPage} />
            <Route
              path="/contact/:participantId"
              Component={ContactDetailsPage}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
