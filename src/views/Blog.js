import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Blog() {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setBlog(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  // console.log("blog :" , {blog.title});

  return (
    <div className="container">
      <h1>{blog.title}</h1>
      <p>Author: {blog.userId}</p>
      <p className="content">{blog.body}</p>
    </div>
  );
}

export default Blog;
