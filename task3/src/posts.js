import axios from "axios";
import React, { useEffect, useState } from "react";

function Posts() {
    let [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching Posts:', error))
    }, [])
    return (<div>
        <table border="2px">
            <thead>
                <tr>
                    <th>UserID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map((post) => (
                        <tr>
                            <td>{post.userId}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    </div>)
}

export default Posts;