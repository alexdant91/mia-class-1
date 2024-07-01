const Number = ({ number, updateNumber }) => {
    return (
        <>
            <input type="number" value={number} onInput={updateNumber} placeholder="Number to add..." />
        </>
    )
}

export default Number;