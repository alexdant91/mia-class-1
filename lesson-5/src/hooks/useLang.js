import { useContext } from "react"
import { LangContext } from "../providers/LangProvider"

export const useLang = () => {
    return useContext(LangContext);
}