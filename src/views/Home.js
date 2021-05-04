import { useState, useEffect } from "react";

import Card from "../components/card/Card";

import "./content.scss";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPosts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  let postList = posts.map((post) => (
    <Card
      key={post.id}
      id={post.id}
      title={post.title}
      author={post.userId}
      // history={window.history}
    />
  ));

  return (
    <div className="container">
      <h1>List of blogs</h1>
      <div>{postList}</div>
    </div>
  );
}

export default Home;
