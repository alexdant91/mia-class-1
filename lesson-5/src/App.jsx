import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import SelectLang from "./components/SelectLang";
import _dict from "./lang"
import { useStyleMode } from "./hooks/useStyleMode";
import DarkMode from "./components/DarkMode";


const App = () => {
    const [dict, setDict] = useState(null);
    const [styleMode, setStyleMode] = useStyleMode();
    
    useEffect(() => {
        // Chiamata al server per ottenere testi e traduzioni
        // 
        setTimeout(() => setDict(_dict), 500);
    }, [])

    return (
        <DarkMode>
            {
                dict == null ? ( <>Loading...</> ) : (
                    <>  
                        <div>
                            <select value={styleMode} onChange={({ target: { value } }) => setStyleMode(value)}>
                                <option value="light">light</option>
                                <option value="dark">dark</option>
                            </select>
                        </div>
                        <div>
                            <SelectLang items={Object.keys(dict)} />
                        </div>
                        <div>
                            <Hero />
                        </div>
                        <div>
                            <SelectLang items={Object.keys(dict)} />
                        </div>
                    </>
                )
            }
        </DarkMode>
    )
}

export default App