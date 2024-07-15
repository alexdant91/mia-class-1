import { useStyleMode } from "../hooks/useStyleMode";

const DarkMode = ({ children }) => {
    const [styleMode, setStyleMode] = useStyleMode();

    return (
        <div className={styleMode == "light" ? "" : "dark"}>
            {children}
        </div>
    )
}

export default DarkMode