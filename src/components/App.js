import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Logement from '../pages/Logement'
import Propos from '../pages/Propos'
import Error from '../pages/Error'
import Header from '../components/Header'
import Footer from '../components/Footer'

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Logement" element={<Logement />} />
                <Route path="/Propos" element={<Propos />} />
                <Route path="/Error" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
