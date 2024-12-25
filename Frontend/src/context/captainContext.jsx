import { createContext, useContext, useState } from 'react';

// Create the context
export const CaptainDataContext = createContext();

// Create a provider component
const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    }


    // Context value
    const value = {
        captain,
        setCaptain,
        isAuthenticated,
        loading,
        };

        return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
        );
    };

    // Custom hook for using captain context
    export const useCaptain = () => {
        const context = useContext(CaptainContext);
        if (!context) {
        throw new Error('useCaptain must be used within a CaptainProvider');
        }
        return context;
    };

    export default CaptainContext;