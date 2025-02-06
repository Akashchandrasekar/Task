import { BuildingOfficeIcon, DevicePhoneMobileIcon, AcademicCapIcon, DocumentIcon } from '@heroicons/react/24/outline'; // Use DocumentIcon instead of ClipboardListIcon

export function ResourcesFacilities() {
  return (
    <div className="space-y-6">
      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg text-white shadow">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
          <DocumentIcon className="h-6 w-6 mr-2" /> {/* Replaced ClipboardListIcon with DocumentIcon */}
          Facilities Overview
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold flex items-center mb-2">
              <BuildingOfficeIcon className="h-5 w-5 mr-2 text-white" />
              Manufacturing Facilities
            </h3>
            <p>
              Our state-of-the-art manufacturing facility is equipped with the latest technology to ensure high-quality
              production.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold flex items-center mb-2">
              <DevicePhoneMobileIcon className="h-5 w-5 mr-2 text-white" />
              Office Spaces
            </h3>
            <p>Modern, open-plan offices designed to foster collaboration and creativity.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold flex items-center mb-2">
              <AcademicCapIcon className="h-5 w-5 mr-2 text-white" />
              Research Labs
            </h3>
            <p>Cutting-edge research laboratories for innovation and product development.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg text-white shadow">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
          <DocumentIcon className="h-6 w-6 mr-2 text-white" />
          Resource Booking
        </h2>
        <form action="/api/book-resource" method="POST" className="space-y-4">
          <div>
            <label htmlFor="resource" className="block mb-2">
              Resource:
            </label>
            <select
              id="resource"
              name="resource"
              className="w-full p-2 border rounded text-black "
              required
            >
              <option value="">Select a Resource</option>
              <option value="meetingRoom">Meeting Room</option>
              <option value="conferenceHall">Conference Hall</option>
              <option value="projector">Projector</option>
              <option value="laptop">Laptop</option>
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block mb-2">
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full text-white p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="time" className="block mb-2">
              Time:
            </label>
            <input
              type="time"
              id="time"
              name="time"
              className="w-full p-2 border text-white rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Book Resource
          </button>
        </form>
      </section>
    </div>
  );
}

export default ResourcesFacilities;
