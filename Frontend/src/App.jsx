import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TableList from "./components/TableList";
import ModalForm from "./components/ModalForm";
import axios from "axios";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [clientData, setClientData] = useState(null);

  const handleOpen = (mode, client) => {
    setClientData(client);
    setIsOpen(true);
    setModalMode(mode);
  };

  const handlesubmit = async (newClientData) => {
    if (modalMode === "add") {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/clients",
          newClientData
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.put(
          `http://localhost:8000/api/clients/${clientData.id}`,
          newClientData
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Navbar onOpen={() => handleOpen("add")} onSearch={setSearchTerm} />
      <TableList handleOpen={handleOpen} searchTerm={searchTerm} />
      <ModalForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode={modalMode}
        clientData={clientData}
        onSubmit={handlesubmit}
      />
    </div>
  );
}

export default App;
