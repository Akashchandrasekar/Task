import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 flex gap-4">
    <Link to="/" className="hover:underline">Home</Link>
    <Link to="/about" className="hover:underline">About Us</Link>
    <Link to="/events" className="hover:underline">Events</Link>
    <Link to="/projects" className="hover:underline">Projects</Link>
    <Link to="/employee" className="hover:underline">Employee Engagement</Link>
    <Link to="/hr" className="hover:underline">HR & Admin</Link>
    <Link to="/resources" className="hover:underline">Resources</Link>
    <Link to="/feedback" className="hover:underline">Feedback</Link>
  </nav>
    );
};

export default Navbar;