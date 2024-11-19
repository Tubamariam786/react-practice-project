import PropTypes from "prop-types";
import Bill from "./Bill";

const SmallScreenModal = ({ showModal, handleModalToggle }) => {
  return (
    <div
      className={`fixed ${
        showModal ? "top-0" : "top-[-100%]"
      }  left-0 w-full bg-gray-200 lg:hidden pb-5  shadow transition-all ease-linear duration-[215ms]`}
    >
      <button
        className=" mt-4 mr-4 p-1 rounded-lg border float-end bg-transparent"
        onClick={handleModalToggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="mt-20 px-8">
        <Bill />
      </div>
    </div>
  );
};

SmallScreenModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleModalToggle: PropTypes.func.isRequired,
};

export default SmallScreenModal;
