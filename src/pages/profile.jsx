import { useEffect, useState } from "react";
import API from "../api/axios";

import PartnerCard from "../components/PartnerCard";
import { PartnerForm } from "../components/partnerForm";

function Profile() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [partnerName, setPartnerName] = useState("");
  const [partnerLevel, setPartnerLevel] = useState("beginner");
  const [partnerGoal, setPartnerGoal] = useState("weight-loss");
  const [partnerCity, setPartnerCity] = useState("");

  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const [editingPartner, setEditingPartner] = useState(null);

  // ===========================
  // FETCH PARTNERS
  // ===========================

  const fetchPartners = async () => {
    try {
      setLoading(true);

      const response = await API.get("/partners");

      setPartners(response.data.partners);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch partners");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  // ===========================
  // ADD PARTNER
  // ===========================

  const handleAddPartner = async (partnerData) => {
    try {
      await API.post("/partners", partnerData);

      fetchPartners();

      setPartnerName("");
      setPartnerLevel("beginner");
      setPartnerGoal("weight-loss");
      setPartnerCity("");

      setShowPartnerForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  // ===========================
  // EDIT
  // ===========================

  const handleEditClick = (partner) => {
    setEditingPartner(partner);

    setPartnerName(partner.name);
    setPartnerLevel(partner.fitnessLevel);
    setPartnerGoal(partner.goal);
    setPartnerCity(partner.city);

    setShowPartnerForm(true);
  };

  const handleSaveEdit = async (partnerData) => {
    try {
      await API.put(
        `/partners/${editingPartner._id}`,
        partnerData
      );

      fetchPartners();

      setEditingPartner(null);

      setPartnerName("");
      setPartnerLevel("beginner");
      setPartnerGoal("weight-loss");
      setPartnerCity("");

      setShowPartnerForm(false);

      alert("Partner Updated Successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  // ===========================
  // DELETE
  // ===========================

  const handleDeletePartner = async (id) => {
    try {
      await API.delete(`/partners/${id}`);

      fetchPartners();
    } catch (err) {
      console.log(err);
    }
  };

  // ===========================
  // SEARCH
  // ===========================

  const filteredPartners = partners.filter((partner) =>
    partner.name.toLowerCase().includes(search.toLowerCase())
  );

  // ===========================

   return (
  <h1 style={{ color: "white", fontSize: "50px" }}>
    PROFILE WORKING
  </h1>
);
}

export default Profile;