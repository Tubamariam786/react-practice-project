import Bill from "./Bill";

const Sidebar = () => {
  return (
    <div className="lg:w-1/3 min-h-screen  bg-gray-100 border-e border-[#cbcccf99] p-6 hidden lg:block">
      <div className="mt-20 px-12">
        <Bill />
      </div>
    </div>
  );
};

export default Sidebar;
