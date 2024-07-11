
const Limit = ({ onChange, limit }) => {
  return (
    <div>
        Limit: 
        <select onChange={onChange} value={limit}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
        </select>
    </div>
  )
}

export default Limit