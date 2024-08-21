import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutingPath from './apidemo/RoutingPath';
import Header from './apidemo/Header';
import DataContextProvider from './apidemo/DataContext';
import { useState } from 'react';
import Hello from './classcompdemo/Hello';
import ReduxEmplist from './reduxdemo/ReduxEmplist';

function App() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    return (
        <div>
            <hr />
            <DataContextProvider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
                <div id="App">
                    <Header />
                    <RoutingPath />
                </div>
            </DataContextProvider>
        </div>
    );
}

export default App;
