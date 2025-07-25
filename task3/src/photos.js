import axios from "axios";
import React, { useEffect, useState } from "react";

function Photos() {
    let [photos, setPhotos] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(response => setPhotos(response.data))
            .catch(error => console.error('Error fetching Photos:', error))
    }, [])
    return (<div>
        <table border="2px">
            <thead>
                <tr>
                    <th>AlbumID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>URL</th>
                    <th>ThumbmailURL</th>
                </tr>
            </thead>
            <tbody>
                {
                    photos.map((photo) => (
                        <tr>
                            <td>{photo.albumId}</td>
                            <td>{photo.id}</td>
                            <td>{photo.title}</td>
                            <td>{photo.url}</td>
                            <td>{photo.thumbnailUrl}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    </div>)
}

export default Photos;