import { 
  ChatBubbleLeftIcon, 
  DocumentTextIcon, 
  ClipboardDocumentCheckIcon,  // ✅ Corrected icon name
  VideoCameraIcon, 
  PencilSquareIcon 
} from "@heroicons/react/24/outline"; 

export function ProjectCollaboration() {
  return (
    <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 flex items-center text-white">
        <ChatBubbleLeftIcon className="h-7 w-7 mr-3" /> Project Collaboration
      </h2>

      <div className="space-y-6">
        {/* Team Chat */}
        <div>
          <h3 className="text-xl font-semibold mb-2 flex items-center text-white">
            <ChatBubbleLeftIcon className="h-6 w-6 mr-2" />
            Team Chat
          </h3>
          <div className="bg-white p-4 rounded shadow-md">
            <p className="text-gray-700">Live chat interface for team discussions.</p>
          </div>
        </div>

        {/* File Sharing */}
        <div>
          <h3 className="text-xl font-semibold mb-2 flex items-center text-white">
            <DocumentTextIcon className="h-6 w-6 mr-2" />
            File Sharing
          </h3>
          <div className="bg-white p-4 rounded shadow-md">
            <p className="text-gray-700">Secure file sharing system for project documents.</p>
          </div>
        </div>

        {/* Task Management */}
        <div>
          <h3 className="text-xl font-semibold mb-2 flex items-center text-white">
            <ClipboardDocumentCheckIcon className="h-6 w-6 mr-2" />  {/* ✅ Fixed icon name */}
            Task Management
          </h3>
          <div className="bg-white p-4 rounded shadow-md">
            <p className="text-gray-700">Kanban-style board for tracking tasks and deadlines.</p>
          </div>
        </div>

        {/* Video Conferencing */}
        <div>
          <h3 className="text-xl font-semibold mb-2 flex items-center text-white">
            <VideoCameraIcon className="h-6 w-6 mr-2" />
            Video Conferencing
          </h3>
          <div className="bg-white p-4 rounded shadow-md">
            <p className="text-gray-700">Integrated video calls for remote collaboration.</p>
          </div>
        </div>

        {/* Whiteboard Collaboration */}
        <div>
          <h3 className="text-xl font-semibold mb-2 flex items-center text-white">
            <PencilSquareIcon className="h-6 w-6 mr-2" />
            Whiteboard Collaboration
          </h3>
          <div className="bg-white p-4 rounded shadow-md">
            <p className="text-gray-700">Real-time whiteboard for brainstorming and planning.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectCollaboration;
