// context/DataContext.js
import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
    const [data, setData] = useState(null);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
