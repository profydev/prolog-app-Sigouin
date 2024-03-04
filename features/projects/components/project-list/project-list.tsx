import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
import { LoadingIndicator, ErrorScreen } from "@features/ui";

export function ProjectList() {
  const { data, isLoading, isError, error, refetch } = useGetProjects();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    console.error(error);
    return <ErrorScreen error={error} onTryAgain={refetch} />;
  }

  return (
    <ul className={styles.list} data-testid="project-list">
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
