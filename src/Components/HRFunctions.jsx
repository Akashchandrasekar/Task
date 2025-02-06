import { useState } from "react";
import { CalendarIcon, UserGroupIcon, DocumentTextIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import { FaBook, FaUserTie, FaPlaneDeparture, FaBriefcase } from 'react-icons/fa';

export default function HRFunctions() {
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic on the client-side
    console.log("Leave request:", { leaveType, startDate, endDate });
    alert("Leave request submitted successfully!");
  };

  return (
    <div className="space-y-6">
      {/* Attendance & Leave Management Section */}
      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow text-white">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <CalendarIcon className="h-6 w-6 mr-2 text-blue-500" />
          Attendance & Leave Management
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="leaveType" className="block mb-2">
              Leave Type:
            </label>
            <select
              id="leaveType"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Leave Type</option>
              <option value="vacation">Vacation</option>
              <option value="sick">Sick Leave</option>
              <option value="personal">Personal Leave</option>
            </select>
          </div>
          <div>
            <label htmlFor="startDate" className="block mb-2">
              Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block mb-2">
              End Date:
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit Leave Request
          </button>
        </form>
      </section>

      {/* Employee Directory Section */}
      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51]p-6 rounded-lg text-white shadow">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <UserGroupIcon className="h-6 w-6 mr-2 text-blue-500" />
          Employee Directory
        </h2>
        <EmployeeDirectory />
      </section>

      {/* HR Policies Section */}
      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg text-white shadow">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <DocumentTextIcon className="h-6 w-6 mr-2 text-blue-500" />
          HR Policies
        </h2>
        <HRPolicies />
      </section>

      {/* Training & Development Section */}
      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow text-white">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <AcademicCapIcon className="h-6 w-6 mr-2 text-blue-500" />
          Training & Development
        </h2>
        <TrainingAndDevelopment />
      </section>
    </div>
  );
}

// Server Component for Employee Directory
export function EmployeeDirectory() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow">
      <div className="border p-4 rounded text-center">
        <img 
          src="https://www.shutterstock.com/image-photo/handsome-smiling-young-man-folded-260nw-2069457431.jpg" 
          alt="employeesimg" 
          className="rounded-full h-40 w-40 mx-auto"
        />
        <h3 className="font-semibold mt-2">John Doe</h3>
        <p>Software Engineer</p>
        <p>john.doe@company.com</p>
      </div>
      <div className="border p-4 rounded text-center">
        <img 
          src="https://img.freepik.com/free-photo/african-man-black-suit_1157-46903.jpg?semt=ais_hybrid" 
          alt="employeesimg" 
          className="rounded-full h-40 w-40 mx-auto"
        />
        <h3 className="font-semibold mt-2">Jane Smith</h3>
        <p>Product Manager</p>
        <p>jane.smith@company.com</p>
      </div>
      <div className="border p-4 rounded text-center">
        <img 
          src="https://t4.ftcdn.net/jpg/01/56/19/15/360_F_156191504_F8KusEJnAdRbyztflKKtQnnU43GIyWv4.jpg" 
          alt="employeesimg" 
          className="rounded-full h-40 w-40 mx-auto"
        />
        <h3 className="font-semibold mt-2">Mike Johnson</h3>
        <p>UX Designer</p>
        <p>mike.johnson@company.com</p>
      </div>
    </div>
  );
}

// Server Component for HR Policies
export function HRPolicies() {
    return (
      <ul className="list-disc pl-5">
        <li className="flex items-center space-x-2">
          <FaBook className="text-blue-500" />
          <a href="#" className="text-blue-500 hover:underline">
            Employee Handbook
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <FaUserTie className="text-blue-500" />
          <a href="#" className="text-blue-500 hover:underline">
            Benefits Information
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <FaBriefcase className="text-blue-500" />
          <a href="#" className="text-blue-500 hover:underline">
            Code of Conduct
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <FaPlaneDeparture className="text-blue-500" />
          <a href="#" className="text-blue-500 hover:underline">
            Travel Policy
          </a>
        </li>
      </ul>
    );
  }

// Server Component for Training & Development
export function TrainingAndDevelopment() {
  return (
    <div className="space-y-4 bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow">
      <div>
        <h3 className="text-xl font-semibold mb-2">Available Courses</h3>
        <ul className="list-disc pl-5">
          <li>Leadership Skills 101</li>
          <li>Advanced Project Management</li>
          <li>Introduction to Machine Learning</li>
        </ul>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        View All Courses
      </button>
    </div>
  );
}
