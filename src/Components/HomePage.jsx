const HomePage = () => {
    return (
      <div className="space-y-6 text-white">
        <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-4">Welcome, Employee 😍!</h1>
          <p>We're glad to have you on our team. Here's what's new today:</p>
        </section>
  
        <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Company News</h2>
          <ul className="list-disc pl-5">
            <li>New project launch next week</li>
            <li>Quarterly meeting scheduled for Friday</li>
            <li>Employee of the month announced</li>
          </ul>
        </section>
  
        <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4  text-black gap-4">
            <a href="#" className="bg-blue-100 p-4 rounded text-center hover:bg-blue-500">
              HR Portal
            </a>
            <a href="#" className="bg-blue-100 p-4 rounded text-center hover:bg-blue-500">
              Project Dashboard
            </a>
            <a href="#" className="bg-blue-100 p-4 rounded text-center hover:bg-blue-500">
              Training Center
            </a>
            <a href="#" className="bg-blue-100 p-4 rounded text-center hover:bg-blue-500">
              Resource Booking
            </a>
          </div>
        </section>
      </div>
    );
  };
  
  export default HomePage;
  