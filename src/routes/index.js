import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Mainpage from '../pages/Mainpage'
import SignIn from '../pages/SignIn'

const RootRoute = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Mainpage />}/>
                <Route path='/signin' element={<SignIn />} />
            </Routes>
        </Router>
    )
}

export default RootRoute