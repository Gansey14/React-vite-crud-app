import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectItem from "../components/projectItem";

export default function ProjectsPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function getProjects() {
            const url = "https://react-vite-crud-app-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
            const response = await fetch(url, {
                method: "GET"
            });
            const data = await response.json();
            const postsArray = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array

            setProjects(postsArray);
        }

        getProjects();
    }, []);

    return (
        <section className="page">
            <h1>Projects page</h1>
            <section className="grid">
                {projects.map(project => (
                    <ProjectItem project={project} key={project.id} />
                ))}
            </section>
        </section>
    );
}