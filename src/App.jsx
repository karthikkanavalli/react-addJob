import { useState } from "react";
import AddJob from "./components/addJob";


const App = () => {

  const [isModalOpen, setModalOpen] = useState(false);
const handleOrderClick = () => {
  
  setModalOpen(true);
};

const closeModal = () => {
  setModalOpen(false);
  
};
  return (
    <>
      {!isModalOpen && (
        <div className="flex justify-center items-center h-screen">
          <button
            onClick={handleOrderClick}
            className="bg-btnColor text-white px-4 py-2 rounded-md hover:font-bold"
          >
            New Job
          </button>
        </div>
      )}
      <AddJob isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App