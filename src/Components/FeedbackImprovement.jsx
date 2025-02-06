import { FaPoll, FaThumbsUp, FaCoffee } from 'react-icons/fa'; // Importing relevant icons

const FeedbackImprovement = () => {
  return (
    <div className="space-y-6 font-poppins"> {/* Apply Poppins font to the entire component */}
      {/* Section 1: Surveys and Polls */}
      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
          <FaPoll className="mr-2 text-white" /> {/* Adding an icon to the title */}
          Surveys and Polls
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="feedback" className="block mb-2 text-white">
              Your Feedback:
            </label>
            <textarea
              id="feedback"
              className="w-full p-2 border rounded"
              rows={4}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="rating" className="block mb-2 text-white">
              Rate your experience:
            </label>
            <select id="rating" className="w-full p-2 border rounded" required>
              <option value="">Select a rating</option>
              <option value="5">Excellent</option>
              <option value="4">Good</option>
              <option value="3">Average</option>
              <option value="2">Poor</option>
              <option value="1">Very Poor</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-[rgb(0,85,231)] text-white px-4 py-2 rounded hover:bg-yellow-500 transition"
          >
            Submit Feedback
          </button>
        </form>
      </section>

      {/* Section 2: Continuous Improvement */}
      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
          <FaThumbsUp className="mr-2 text-white" />
          Continuous Improvement
        </h2>
        <div className="space-y-4 text-white">
          <p>
            We value your input and are committed to continuously improving our workplace. Here's how we use your
            feedback:
          </p>
          <ul className="list-disc pl-5">
            <li>Regular review of all feedback by management</li>
            <li>Implementation of feasible suggestions</li>
            <li>Quarterly town halls to discuss major improvements</li>
            <li>Annual review of policies based on employee input</li>
          </ul>
        </div>
      </section>

      {/* Section 3: Recent Improvements */}
      <section className="bg-gradient-to-r from-[#4b79a1] to-[#283E51] p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
          <FaCoffee className="mr-2 text-[rgb(247,247,247)]" />
          Recent Improvements
        </h2>
        <div className="space-y-4 text-white">
          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold">New Coffee Machine in Break Room</h3>
            <p>Based on employee suggestions, we've upgraded our coffee machine for better quality beverages.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold">Flexible Work Hours Policy</h3>
            <p>
              After reviewing feedback, we've implemented a more flexible work hours policy to improve work-life
              balance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Enhanced Training Programs</h3>
            <p>
              We've expanded our training programs based on the skills our employees expressed interest in developing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeedbackImprovement;
