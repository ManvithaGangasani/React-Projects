import axios from "axios";
import React, { useEffect, useState } from "react";

function Albums() {
    let [albums, setAlbums] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then(response => setAlbums(response.data))
            .catch(error => console.error('Error fetching Albums', error))
    }, [])
    return (<div>
        <table border="2px">
            <thead>
                <tr>
                    <th>UserID</th>
                    <th>ID</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                    albums.map((album) => (
                        <tr>
                            <td>{album.userId}</td>
                            <td>{album.id}</td>
                            <td>{album.title}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    </div>)
}

export default Albums;