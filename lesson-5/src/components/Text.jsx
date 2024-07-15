import dict from "../lang"

import { useLang } from "../hooks/useLang"

const Text = () => {
    const [lang] = useLang();

    return (
        <p>{dict[lang].text}</p>
    )
}

export default Text