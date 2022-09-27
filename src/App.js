import "./App.css"
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Careers } from "./pages/Careers"
import { Events } from "./pages/Events"
import { Products } from "./pages/Products"
import { Support } from "./pages/Support"

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/careers" element={<Careers />} />

                <Route path="/events" element={<Events />} />

                <Route path="/products" element={<Products />} />

                <Route path="/support" element={<Support />} />
            </Routes>
        </>
    )
}

export default App
