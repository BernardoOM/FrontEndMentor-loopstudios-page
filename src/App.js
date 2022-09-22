import "./App.css"
import { Routes, Route } from "react-router-dom"
import { Home } from "./components/pages/Home"
import { About } from "./components/pages/About"
import { Careers } from "./components/pages/Careers"
import { Events } from "./components/pages/Events"
import { Products } from "./components/pages/Products"
import { Support } from "./components/pages/Support"

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
