import "./App.css";
import { useState } from "react";
import ContactList from "./components/contactlist";
import SelectedContact from "./components/selectedcontact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact 
          selectedContactId={selectedContactId} 
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}