import { CheckCircleIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline'; // Importing icons

export function CompletedProjects({ projects }) {
    return (
      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
          <ArchiveBoxIcon className="h-6 w-6 mr-2" /> {/* Icon for Completed Projects */}
          Completed Projects
        </h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="border-b pb-4">
              <h3 className="text-xl font-semibold flex text-white items-center">
                <CheckCircleIcon className="h-5 w-5 mr-2 text-white" /> {/* Icon for project name */}
                {project.name}
              </h3>
              <p className='text-white'>Outcome: {project.outcome}</p>
              <p className='text-white'>Success Story: {project.story}</p>
            </div>
          ))}
        </div>
      </section>
    );
}
