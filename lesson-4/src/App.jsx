import { useState } from "react";
import { useFetchData } from "./hooks/useFetchData"

const API_URLS = [
  { url: "https://jsonplaceholder.typicode.com/posts", name: "Posts" },
  { url: "https://jsonplaceholder.typicode.com/comments", name: "Comments" },
  { url: "https://jsonplaceholder.typicode.com/users", name: "Users" },
  { url: "https://jsonplaceholder.typicode.com/albums", name: "Albums" },
  { url: "https://jsonplaceholder.typicode.com/photos", name: "Photos" },
]

const App = () => {
  const [currentData, setCurrentData] = useState(null);
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");

  const { data } = useFetchData(url);

  const handleChangeUrl = (event) => {
    setUrl(event.target.value);
  }

  const handleInnerData = (index, name) => {
    console.log(index, name, data[index][name]);
    setCurrentData(data[index][name]);
  }

  return (
    <div className="main">
      {
        currentData && (
          <div className="info-box-wrapper">
            <div className="info-box">
              <button onClick={() => setCurrentData(null)}>Close</button>
              <pre>{JSON.stringify(currentData, null, 2)}</pre>
            </div>
          </div>
        )
      }
      <div>
        <select value={url} onChange={handleChangeUrl}>
          {
            API_URLS.map((option, i) => (
              <option key={`url-select-option-${i}`} value={option.url}>{option.name}</option>
            ))
          }
        </select>
      </div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            {
              data && data[0] && Object.keys(data[0]).map((name, i) => (
                <th key={`table-th-${i}`}>{name}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((item, index) => (
              <tr key={item.id}>
                {
                  Object.keys(item).map((name, i) => (
                    <td key={`table-td-${item.id}-${i}`}>
                      {
                        typeof item[name] === "boolean" ? 
                          item[name] ? "YES" : "NO"
                          :
                          typeof item[name] === "object" ? 
                            <button onClick={() => handleInnerData(index, name)}>Show data</button>
                            : 
                            item[name]
                      }
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
