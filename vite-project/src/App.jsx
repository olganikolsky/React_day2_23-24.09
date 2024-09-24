import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [post, setPost] = useState([]);
  const show = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((post) => setPost(post));
  };
  useEffect(() => show(), []);
  function handleClickButton() {
    return setPost(post);
  }

  return (
    <>
      <button onClick={handleClickButton}>Отправить запрос</button>
      <ul>
        {post.map((item) => (
          <ol key={item.id}>
            <h1>{item.userId}</h1>
            <p>Title: {item.title}</p>
            <p>Description: {item.body}</p>
          </ol>
        ))}
      </ul>
    </>
  );
}

export default App;
