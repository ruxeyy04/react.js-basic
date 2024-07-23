
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Errorpage";
import BasicCalcu from "./pages/BasicCalcu";
import PokeAPI from "./pages/PokeAPI";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/calculator" element={<BasicCalcu />} />
        <Route path="/pokeapi" element={<PokeAPI />} />
        <Route
          path="*"
          element={
            <>
              <Error />
            </>
          }
        />
      </Routes>
    </>
  );
}
