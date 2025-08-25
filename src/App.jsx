import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";


function App() {

  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />

          </Route>
        </Routes>

      </BrowserRouter>


    </>
  );
}

export default App;
