import { useLang } from "../hooks/useLang"

const SelectLang = ({ items }) => {
    const [lang, setLang] = useLang();

    return (
        <>
            <select value={lang} onChange={({ target: { value } }) => setLang(value)}>
                {
                    items.map(item => (
                        <option key={item} value={item}>{item}</option>
                    ))
                }
            </select>    
        </>
    )
}

export default SelectLang