import { getFeaturedProjects } from "@/lib/github";
import ProjectsGrid from "./ProjectsGrid";

export default async function Projects() {
  const projects = await getFeaturedProjects();

  return <ProjectsGrid projects={projects} />;
}
