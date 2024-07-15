import { createContext, useState } from "react"

export const LangContext = createContext(null);

export const LangProvider = ({ children }) => {
    const [lang, setLang] = useState("it");

    return (
        <LangContext.Provider value={[lang, setLang]}>
            {children}
        </LangContext.Provider>
    )
}