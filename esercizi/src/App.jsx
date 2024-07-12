import { useState , useEffect } from "react"

const Table = ({ data }) => {
  return (
    <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>postId</th>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {
            data.length > 0 && (
              data.map((post) => (
                <tr key={post.postId}>
                  <td>{post.postId}</td>
                  <td>{post.id}</td>
                  <td>{post.name}</td>
                  <td>{post.email}</td>
                  <td>{post.body}</td>
                </tr>
              ))
            )
          }
        </tbody>
      </table>
  )
}

const App = () => {

    const [posts , setPosts] = useState([]) ;

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/comments", { // viene sempre utilizzato fetch per fare le chiamate API
            method : "GET"  // i 5 metodi sono : get ,post ,patch , put , delete
          })

          if(!response.ok) {
            throw new Error("Error during fetch data")
          } 
          const data = await response.json(); // se non ci sono errori durante la chiamata precedente , l'array viene caricato in data

          setPosts(data) //l'array di oggetti viene settato in posts(da const [posts, setPosts]) , preso da data

        } catch(error) {
          console.log(error)
        }
      }

      fetchData()

    }, [])

    return (
      <>
        <Table data={posts} />
      </>
    )

}

export default App
