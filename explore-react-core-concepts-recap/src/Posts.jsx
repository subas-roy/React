import { useEffect, useState } from "react"

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div>
      <h3>Posts</h3>
    </div>
  )
}


/**
 * 1. create a state to store the data
 * 2. create use effect with no dependencies(empty array)
 * 2. use fetch to load data
 * 
 */