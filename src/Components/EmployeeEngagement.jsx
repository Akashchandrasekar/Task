"use client";

import { useState } from "react";
import { FaComments } from "react-icons/fa"; // Importing chat icon from react-icons
import { AcademicCapIcon, SparklesIcon } from "@heroicons/react/24/outline"; // Heroicons for other sections

const EmployeeEngagement = () => {
  const [idea, setIdea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted idea:", idea);
    setIdea("");
    alert("Thank you for your idea!");
  };

  return (
    <div className="space-y-6">
      {/* Idea Submission Section */}
      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] text-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <SparklesIcon className="h-6 w-6 mr-2 text-white" />
          Idea Submission
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="idea" className="block mb-2">
              Your Idea:
            </label>
            <textarea
              id="idea"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className="w-full p-2 border rounded"
              rows={4}
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit Idea
          </button>
        </form>
      </section>

      {/* Recognition & Awards Section */}
      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow text-white">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <AcademicCapIcon className="h-6 w-6 mr-2  text-white" />
          Recognition & Awards
        </h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold">Employee of the Month</h3>
            <p>Congratulations to Jane Doe for her outstanding performance!</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold">Team Achievement Award</h3>
            <p>Project X team for delivering exceptional results under tight deadlines.</p>
          </div>
        </div>
      </section>

      {/* Discussion Forums Section */}
      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg text-white shadow">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaComments className="h-6 w-6 mr-2 text-white" /> {/* Using the chat icon from react-icons */}
          Discussion Forums
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Latest Discussions</h3>
            <ul className="list-disc pl-5">
              <li>Improving our customer service process</li>
              <li>Ideas for the next team building event</li>
              <li>Discussing the new product launch strategy</li>
            </ul>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Start a New Discussion</button>
        </div>
      </section>
    </div>
  );
};

export default EmployeeEngagement;
