import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import TableList from "./components/TableList";
import ModalForm from "./components/ModalForm";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalMode(mode);
  };

  const handlesubmit = () => {
    if (modalMode === "add") {
      console.log("Add");
    } else {
      console.log("Update");
    }
  };

  return (
    <div>
      <Navbar onOpen={() => handleOpen("add")} />
      <TableList handleOpen={() => handleOpen("edit")} />
      <ModalForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode={modalMode}
        onSubmit={handlesubmit}
      />
    </div>
  );
}

export default App;
