import { useContext } from "react";
import DataContext from "./DataContext";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
const dataContext = useContext(DataContext);
if (dataContext.isUserLoggedIn) {
return children;
}
else {
return <Navigate to="/Login" />
}
}
export default ProtectedRoute;
