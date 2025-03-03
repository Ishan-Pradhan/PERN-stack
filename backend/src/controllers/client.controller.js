import * as clientService from "../services/client.services.js";

export const getClients = async (req, res) => {
  try {
    const clients = await clientService.getClients();
    console.log(clients);
    return res.status(200).json(clients);
  } catch (error) {
    console.log("Error fetching clients", error);
    return res.status(500).json({ error: error.message });
  }
};
export const createClient = async (req, res) => {
  try {
    const clientData = req.body;
    const newClient = await clientService.createClient(clientData);
    return res.status(201).json(newClient);
  } catch (error) {
    console.log("Error creating client", error);
    return res.status(500).json({ error: error.message });
  }
};
export const updateClient = async (req, res) => {
  try {
    const clientId = req.params.id;
    const clientData = req.body;
    const updatedClient = await clientService.updateClient(
      clientData,
      clientId
    );
    console.log(updatedClient);
    if (!updatedClient) {
      return res.status(404).json({ error: "Client not found" });
    }
    res.status(200).json(updatedClient);
  } catch (error) {
    console.log("Error updating client", error);
    return res.status(500).json({ error: error.message });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const clientId = req.params.id;
    const deleted = await clientService.deleteClient(clientId);
    if (!deleted) {
      return res.status(404).json({ error: "Client not found" });
    }
    return res.status(204).send();
  } catch (error) {
    console.log("Error deleting client", error);
    return res.status(500).json({ error: error.message });
  }
};

export const searchClient = async (req, res) => {
  try {
    const searchTerm = req.query.q;
    const clients = await clientService.searchClient(searchTerm);
    return res.status(200).json(clients);
  } catch (error) {
    console.log("Error searching clients", error);
    return res.status(500).json({ error: error.message });
  }
};
