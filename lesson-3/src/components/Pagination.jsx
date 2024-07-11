

const Pagination = ({ onChange, page, totalPages }) => {
  return (
    <div>
        <button onClick={() => onChange("PREV")}>Prev</button>
        <span style={{ margin: "0 10px" }}>Page {page} of {totalPages}</span>
        <button onClick={() => onChange("NEXT")}>Next</button>
    </div>
  )
}

export default Pagination