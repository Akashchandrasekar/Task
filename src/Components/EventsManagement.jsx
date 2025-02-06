"use client";

import {
  CalendarIcon,
  PhotoIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline"; // Importing heroicons

const EventsManagement = () => {
  const events = [
    {
      id: 1,
      title: "Annual Company Picnic",
      date: "2025-07-15",
      location: "Central Park",
    },
    {
      id: 2,
      title: "Q3 All-Hands Meeting",
      date: "2025-08-01",
      location: "Main Conference Room",
    },
    {
      id: 3,
      title: "Tech Talk: AI in Business",
      date: "2025-08-10",
      location: "Auditorium",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Event Calendar Section */}
      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 flex text-white items-center">
          <CalendarIcon className="h-6 w-6 mr-2 text-white" />
          Event Calendar
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow">
                <th className="px-4 text-white py-2">Event</th>
                <th className="px-4 text-white py-2">Date</th>
                <th className="px-4 text-white py-2">Location</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td className="border text-white px-4 py-2">{event.title}</td>
                  <td className="border  text-white px-4 py-2">{event.date}</td>
                  <td className="border  text-white px-4 py-2">{event.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 flex text-white items-center">
          <DocumentTextIcon className="h-6 w-6 mr-2 text-white" />
          Event Details
        </h2>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="border-b text-white pb-4">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo/Video Gallery Section */}
      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] text-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <PhotoIcon className="h-6 w-6 mr-2 text-white" />
          Photo/Video Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src="https://www.shutterstock.com/image-photo/valmiera-latvia-december-28-2023-600nw-2408970611.jpg"
            alt="Event 2"
            className="w-full h-40 object-cover rounded"
          />

          <img
            src="https://media.istockphoto.com/id/1132336670/photo/people-sunbathing-in-the-park.jpg?s=2048x2048&w=is&k=20&c=C7GqtFCPT408hehWNgJxxduAIPC7dekeD87IUmZEo6U="
            alt="Event 1"
            className="w-full h-40 object-cover rounded"
          />
          <img
            src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?cs=srgb&dl=pexels-divinetechygirl-1181406.jpg&fm=jpg"
            alt="Event 3"
            className="w-full h-40 object-cover rounded"
          />
          <img
            src="https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=612x612&w=0&k=20&c=p_BQCJWRQQtZYnQlOtZMzTjeB_csic8OofTCAKLwT0M="
            alt="Event 4"
            className="w-full h-40 object-cover rounded"
          />
        </div>
      </section>
    </div>
  );
};

export default EventsManagement;
