import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Mainpage from '../pages/Mainpage'

const RootRoute = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Mainpage />}/>
            </Routes>
        </Router>
    )
}

export default RootRoute