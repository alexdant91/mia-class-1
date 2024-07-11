const Table = ({ data, isLoading }) => {
  return (
    <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>id</th>
            <th>user id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {
            data.length == 0 && (
              <tr>
                <td colSpan={4} style={{ textAlign: "center" }}>
                  { 
                    isLoading ? "Loading data..." : "Empty data..."
                  }
                </td>
              </tr>
            )
          }
          {
            data.length > 0 && (
              data.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))
            )
          }
        </tbody>
      </table>
  )
}

export default Table