import React, { useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';

const languages = ['JavaScript', 'Python'];

const LanguageContext = createContext();

function LanguageProvider({ children }) {
    const [favLanguage, setFavLanguage] = useState(languages[0]);

    const toggleFavLanguage = () => {

        setFavLanguage((prevLanguage) =>
            prevLanguage === languages[0] ? languages[1] : languages[0]
        );

    };

    return (
        <LanguageContext.Provider
            value={{ favLanguage, toggleFavLanguage }}
        >
            {children}

        </LanguageContext.Provider>
    )
}

function App() {
    // implement Context here so can be used in child components
    return (
        <LanguageProvider>
            <MainSection />
        </LanguageProvider>
    );
}

function MainSection() {
    const { favLanguage, toggleFavLanguage } = useContext(LanguageContext);
    return (
        <div>
            <p id="favoriteLanguage">favorite programing language: {favLanguage}</p>
            <button onClick={toggleFavLanguage} id="changeFavorite">toggle language</button>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);