import { useState } from "react";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CreatePage() {
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event) {

        event.preventDefault();

        const newPost = {
            caption: caption,
            image: image,
            uid: "ZfPTVEMQKf9vhNiUh0bj"
        }

        const url = "https://react-vite-crud-app-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
        const response = await fetch(url, { method: "POST", body: JSON.stringify(newPost) });

        console.log(newPost);
        if (response.ok) {
            navigate("/projects");
            alert("All good man");
        } else {
            console.log("Something is not OK")
        }
    };

    return (
        <section className="page">
            <h1>Create new Projects</h1>
            <form onSubmit={handleSubmit}>
                <label>Caption</label>
                < input
                    type="text"
                    placeholder="Write a caption"
                    value={caption}
                    onChange={(event) => setCaption(event.target.value)} />

                <label>Image</label>
                <input
                    type="url"
                    placeholder="Place an image url"
                    value={image}
                    onChange={(event) => setImage(event.target.value)} />

                <button>Create</button>
            </form>
        </section >
    )
}