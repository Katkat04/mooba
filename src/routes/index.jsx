import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "../pages/Homepage"

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </Router>
    )
}
export default AppRoutes