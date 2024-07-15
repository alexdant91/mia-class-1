import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [styleMode, setStyleMode] = useState("light");

    return (
        <DarkModeContext.Provider value={[styleMode, setStyleMode]}>
            {children}
        </DarkModeContext.Provider>
    )
}