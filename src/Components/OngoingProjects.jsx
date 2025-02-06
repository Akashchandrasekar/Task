// Importing the correct icons from Heroicons
import { ClipboardIcon, CheckCircleIcon } from '@heroicons/react/24/outline'; 

export function OngoingProjects({ projects }) {
    return (
      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
          <ClipboardIcon className="h-6 w-6 mr-2" /> {/* Corrected icon for the title */}
          Ongoing Projects
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow">
                <th className="px-4 py-2 flex items-center text-white">
                  <ClipboardIcon className="h-5 w-5 mr-2  text-white" /> {/* Corrected icon in the table header */}
                  Project Name
                </th>
                <th className="px-4 py-2 flex  text-white items-center">
                  <CheckCircleIcon className="h-5  text-white w-5 mr-2" /> {/* Status icon */}
                  Status
                </th>
                <th className="px-4 py-2  text-white">Timeline</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td className="border px-4 py-2  text-white">{project.name}</td>
                  <td className="border px-4 py-2  text-white">
                    <CheckCircleIcon className="  h-5 w-5 mr-2 text-green-500" />
                    {project.status}
                  </td>
                  <td className="border  text-white px-4 py-2">{project.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
}
