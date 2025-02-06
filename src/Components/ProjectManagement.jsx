// app/ProjectManagement.tsx (Client-side entry)
import { useState, useEffect } from "react";
import { OngoingProjects } from "./OngoingProjects";
import { CompletedProjects } from "./CompletedProjects";
import { ProjectCollaboration } from "./ProjectCollaboration";


const ProjectManagement = () => {
  const [ongoingProjects, setOngoingProjects] = useState([]);
  const [completedProjects, setCompletedProjects] = useState([]);

  // You could fetch this data from an API or database in the future
  useEffect(() => {
    // Simulate fetching data
    setOngoingProjects([
      { id: 1, name: "Project Alpha", status: "In Progress", timeline: "Q3 2025" },
      { id: 2, name: "Project Beta", status: "Planning", timeline: "Q4 2025" },
    ]);
    setCompletedProjects([
      { id: 3, name: "Project Gamma", outcome: "Successful launch", story: "Increased efficiency by 30%" },
      { id: 4, name: "Project Delta", outcome: "Client satisfaction", story: "Delivered ahead of schedule" },
    ]);
  }, []);

  return (
    <div className="space-y-6">
      <OngoingProjects projects={ongoingProjects} />
      <CompletedProjects projects={completedProjects} />
      <ProjectCollaboration />
    </div>
  );
};

export default ProjectManagement;
