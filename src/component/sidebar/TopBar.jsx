import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa";

const TopBar = ({ handleModalToggle }) => {
  return (
    <div className="bg-gray-200 lg:hidden flex justify-between items-center  rounded-lg p-4 mb-12 border border-[#b5c2e099]">
      <div>
        <p className="">Selected products</p>
        <p className="">$134.98</p>
      </div>

      <button
        onClick={handleModalToggle}
        className="  hover:bg-gray-300 flex items-center transition-colors duration-300 px-3 py-2 rounded-lg"
      >
        View details
        <span className="ml-2">
          <FaChevronDown style={{ fontSize: "14px" }} />
        </span>
      </button>
    </div>
  );
};

TopBar.propTypes = {
  handleModalToggle: PropTypes.func.isRequired,
};

export default TopBar;
