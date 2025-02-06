import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger icon
import HomePage from "./Components/HomePage";
import CompanyInfo from "./Components/CompanyInfo";
import EventsManagement from "./Components/EventsManagement";
import ProjectManagement from "./Components/ProjectManagement";
import EmployeeEngagement from "./Components/EmployeeEngagement";
import HRFunctions from "./Components/HRFunctions";
import ResourcesFacilities from "./Components/ResourcesFacilities";
import FeedbackImprovement from "./Components/FeedbackImprovement";
import Footer from "./Components/Footer";

const App = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#000428] to-[#004e92] font-poppins">
      {/* Navigation Bar */}
      <nav className="bg-[#191970] p-4 fixed top-0 w-full z-50">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">My App</div>

          {/* Hamburger Icon */}
          <div className="block lg:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-2 text-white">
            <li><a href="#home" className="nav-link">Home |</a></li>
            <li><a href="#company-info" className="nav-link">Company Info |</a></li>
            <li><a href="#events" className="nav-link">Events |</a></li>
            <li><a href="#projects" className="nav-link">Projects |</a></li>
            <li><a href="#engagement" className="nav-link">Employee Engagement |</a></li>
            <li><a href="#hr" className="nav-link">HR Functions |</a></li>
            <li><a href="#resources" className="nav-link">Resources & Facilities |</a></li>
            <li><a href="#feedback" className="nav-link">Feedback |</a></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-blue-600 p-4">
            <ul className="space-y-4 text-white">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#company-info" className="nav-link">Company Info</a></li>
              <li><a href="#events" className="nav-link">Events</a></li>
              <li><a href="#projects" className="nav-link">Projects</a></li>
              <li><a href="#engagement" className="nav-link">Employee Engagement</a></li>
              <li><a href="#hr" className="nav-link">HR Functions</a></li>
              <li><a href="#resources" className="nav-link">Resources & Facilities</a></li>
              <li><a href="#feedback" className="nav-link">Feedback</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Render All Components with IDs for Scrolling */}
      <div className="container mx-auto p-4 pt-20">
        <section id="home"><HomePage /></section>
        <section id="company-info"><CompanyInfo /></section>
        <section id="events"><EventsManagement /></section>
        <section id="projects"><ProjectManagement /></section>
        <section id="engagement"><EmployeeEngagement /></section>
        <section id="hr"><HRFunctions /></section>
        <section id="resources"><ResourcesFacilities /></section>
        <section id="feedback"><FeedbackImprovement /></section>
        <section id="footer"><Footer/></section>
      </div>
    </div>
  );
};

export default App;
