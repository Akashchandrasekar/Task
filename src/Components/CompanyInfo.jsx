"use client";

import {
  BuildingOfficeIcon,
  UsersIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline"; // Corrected imports

const CompanyInfo = () => {
  return (
    <div className="space-y-6">
      {/* About Us Section */}
      <section
        className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
          <BuildingOfficeIcon className="h-6 w-6 mr-2 text-white" />
          About Us
        </h2>
        <p className="mb-4 text-white">
          Our company was founded in 2000 with a mission to innovate and lead in
          our industry.
        </p>
        <h3 className="text-xl font-semibold mb-2 text-white">Our Mission</h3>
        <p className="mb-4 text-white">
          To provide cutting-edge solutions that transform businesses and
          improve lives.
        </p>
        <h3 className="text-xl font-semibold mb-2 text-white">Our Vision</h3>
        <p className="text-white">
          To be the global leader in innovative technology solutions by 2030.
        </p>
      </section>

      {/* Leadership Team Section */}
      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
          <UsersIcon className="h-6 w-6 mr-2 text-white" />
          Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <img
              src="https://img.freepik.com/free-photo/african-man-black-suit_1157-46903.jpg?semt=ais_hybrid"
              alt="CEO"
              className="w-32 h-32 rounded-full mx-auto mb-2"
            />
            <h3 className="font-semibold text-white">John Doe</h3>
            <p className="text-white">CEO</p>
          </div>
          <div className="text-center">
            <img
              src="https://t4.ftcdn.net/jpg/01/56/19/15/360_F_156191504_F8KusEJnAdRbyztflKKtQnnU43GIyWv4.jpg"
              alt="CTO"
              className="w-32 h-32 rounded-full mx-auto mb-2"
            />
            <h3 className="font-semibold text-white">Jane Smith</h3>
            <p className="text-white">CTO</p>
          </div>
          <div className="text-center">
            <img
              src="https://www.shutterstock.com/image-photo/handsome-smiling-young-man-folded-260nw-2069457431.jpg"
              alt="CFO"
              className="w-32 h-32 rounded-full mx-auto mb-2"
            />
            <h3 className="font-semibold text-white">Mike Johnson</h3>
            <p className="text-white">CFO</p>
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
          <WrenchIcon className="h-6 w-6 mr-2 text-white" />
          Our Capabilities
        </h2>
        <ul className="list-disc pl-5 text-white">
          <li>State-of-the-art manufacturing facilities</li>
          <li>Advanced R&D labs</li>
          <li>Global distribution network</li>
          <li>Industry-leading software development team</li>
        </ul>
      </section>
    </div>
  );
};

export default CompanyInfo;
