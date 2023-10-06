import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UpdatePage() {
    const [post, setPost] = useState({});
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
    const params = useParams();
    const url = `https://react-vite-crud-app-default-rtdb.europe-west1.firebasedatabase.app/posts/${params.postId}.json`;

    useEffect(() => {
        async function getPost() {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setPost(data);
        }
        getPost();
    }, [post.caption, post.image, url]);

    async function handleSubmit(event) {

        event.preventDefault();

        const postToUpdate = {
            caption: caption,
            image: image
        }
        postToUpdate.uid = post.uid;
        const response = await fetch(url, { method: "PUT", body: JSON.stringify(postToUpdate) });

        if (response.ok) {
            navigate("/projects");
            alert("All good man");
        } else {
            console.log("Something is not OK")
        }
    }

    async function handleDelete() {
        const wantToDelete = confirm("Are you sure you want ot delete?");
        if (wantToDelete) {
            const response = await fetch(url, {
                method: "DELETE",
            });
            if (response.ok) {
                navigate("/");
            } else {
                alert("Something went wrong")
            }
        }
    };

    return (
        <section className="page">
            <h1>Update Projects</h1>
            <form onSubmit={handleSubmit}>
                <label>New caption</label>
                < input
                    type="text"
                    value={caption}
                    onChange={(event) => setCaption(event.target.value)} />
                <label>New image</label>
                <input
                    type="url"
                    value={image}
                    onChange={(event) => setImage(event.target.value)} />

                <button>Update</button>
            </form>
            <button onClick={handleDelete}>Delete</button>
        </section >
    )
}