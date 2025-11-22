import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 


export default function PostsFetchAsync() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

    const navigate = useNavigate();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError("Failed to fetch posts.");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Posts List</h2>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "15px" }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
      <button onClick={() => navigate("/todosfetchaxios")}>
        Go to TodosFetchAxios
      </button>
    </div>
    
  );
}
