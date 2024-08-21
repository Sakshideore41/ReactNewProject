import { useContext, useEffect } from "react";
import DataContext from "./DataContext";

function Logout() {
    const dataContext = useContext(DataContext);

    useEffect(() => {
        dataContext.setIsUserLoggedIn(false);
    }, [dataContext]);

    const element =
        <>
            <h2>You are logged out successfully</h2>
        </>
    return element;
}

export default Logout;


