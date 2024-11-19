import SideBar from "./component/sidebar/SideBar";
import Checkbox from "./component/multiple/Checkbox";
import TopBar from "./component/sidebar/TopBar";
import SmallScreenModal from "./component/sidebar/SmallScreenModal";

import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className=" min-h-screen ">
      <div className="flex lg:flex-row flex-col ">
        <SideBar />

        <div className="lg:w-2/3 w-full p-6 mt-24 sm:w-[80%] mx-auto">
          <TopBar handleModalToggle={handleModalToggle} />
          <Checkbox />,
        </div>
      </div>
      <SmallScreenModal
        showModal={showModal}
        handleModalToggle={handleModalToggle}
      />
    </div>
  );
}

export default App;
