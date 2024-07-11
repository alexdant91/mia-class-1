import { useEffect, useRef, useState } from "react"
import { API_URL_POSTS } from "./config/constants";

import Table from "./components/Table";
import Pagination from "./components/Pagination";
import Limit from "./components/Limit";
import ErrorBox from "./components/ErrorBox";

const CACHE_TIMEOUT = 60000 * 30;

const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const cache = useRef({});

  const handlePageChange = (type) => {
    if (type === "PREV") {
      setPage(p => p - 1)
    } else if (type === "NEXT") {
      setPage(p => p + 1)
    }
  }

  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value));
  } 

  // hook
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const url = `${API_URL_POSTS}?skip=${(page - 1) * limit}&limit=${limit}`;
        
        if (cache.current[url]) {
          setPosts(cache.current[url]);
          return;
        }
        
        const response = await fetch(url, {
          method: "GET"
        });

        if (!response.ok) {
          setError(true);
          return;
        }

        const data = await response.json();

        setPosts(data.posts);
        cache.current[url] = data.posts;
        setTotalPages(Math.ceil(data.total / limit));

      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [page, limit]);

  useEffect(() => {
    if (posts.length > 0) {
      setPage(1)
    }
  }, [limit]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Object.keys(cache.current).length > 0) {
        cache.current = {};
        console.log("Cache cleared")
      }
    }, CACHE_TIMEOUT);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <>
      <div>
        <Pagination onChange={handlePageChange} page={page} totalPages={totalPages} />
        <Limit onChange={handleLimitChange} limit={limit} />
      </div>
      <div>
        <ErrorBox error={error} />
      </div>
      <div>
        <Table data={posts} isLoading={loading} />
      </div>
    </>
  )
}

export default App
