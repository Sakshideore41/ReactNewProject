import { Routes, Route } from 'react-router-dom';
import AboutUs from "./AboutUs";
import AddEmployee from "./Addemployee";
import DeleteEmployee from "./DeleteEmployee";
import EditEmployee from "./EditEmployee";
import Emplist from "./Emplist";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import ProtectedRoute from "./ProtectedRoute";

function RoutingPath(props) {
    return (
        <Routes>
            <Route path='/Home' element={
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>} 
            />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/Emplist' element={
                <ProtectedRoute>
                    <Emplist />
                </ProtectedRoute>} 
            />
            <Route path='/Addemployee' element={
                <ProtectedRoute>
                    <AddEmployee name={props.name} />
                </ProtectedRoute>} 
            />
            <Route path='/EditEmployee/:id' element={<EditEmployee />} />
            <Route path='/DeleteEmployee/:id' element={<DeleteEmployee />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Logout' element={<Logout />} />
        </Routes>
    );
}

export default RoutingPath;
