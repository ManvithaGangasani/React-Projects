import axios from "axios";
import React, { useEffect, useState } from "react";

function Comments() {
    let [comments, setComments] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(response => setComments(response.data))
            .catch(error => console.error('Error fetching Comments', error))
    }, [])
    return (<div>
        <table border="2px">
            <thead>
                <tr>
                    <th>PostID</th>
                    <th>ID</th>
                    <th>name</th>
                    <th>email</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                    comments.map((comment) => (
                        <tr>
                            <td>{comment.postId}</td>
                            <td>{comment.id}</td>
                            <td>{comment.name}</td>
                            <td>{comment.email}</td>
                            <td>{comment.body}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    </div>)
}

export default Comments;