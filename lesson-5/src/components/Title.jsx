import dict from "../lang"

import { useLang } from "../hooks/useLang"

const Title = () => {
    const [lang] = useLang();

    return (
        <h1>{dict[lang].title}</h1>
    )
}

export default Title