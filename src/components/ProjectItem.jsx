import UserAvatar from "./UserAvatar"
import { useNavigate } from "react-router-dom"

export default function ProjectItem({ project }) {

    const navigate = useNavigate();

    function handleClick() {
        navigate(`/posts/${project.id}`)
    }

    return (
        <article onClick={handleClick} key={project.id}>
            <UserAvatar uid={project.uid} />
            <h3>{project.caption}</h3>
            <img src={project.image} alt={project.caption} />
        </article>)
}