
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Errorpage";
import BasicCalcu from "./pages/BasicCalcu";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/calculator" element={<BasicCalcu />} />
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
