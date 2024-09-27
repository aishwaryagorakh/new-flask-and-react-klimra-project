import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [record, setRecord] = useState("");
  const [fetchedRecord, setFetchedRecord] = useState(null);
  const [message, setMessage] = useState("");

  // Handle input field change
  const handleInputChange = (e) => {
    setRecord(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .post("http://127.0.0.1:5000/record", { record })
      .then((response) => {
        setMessage("Record added successfully");
        setRecord(""); // Clear the input field after submitting

        // Remove the message after 3 seconds
        setTimeout(() => {
          setMessage("");
        }, 3000);
      })
      .catch((error) => {
        setMessage("Error adding record");

        // Remove the error message after 3 seconds (optional)
        setTimeout(() => {
          setMessage("");
        }, 3000);
      });
  };

  // Handle GET request to fetch last inserted record
  const fetchLastRecord = () => {
    axios
      .get("http://127.0.0.1:5000/record")
      .then((response) => {
        setFetchedRecord(response.data.record);
      })
      .catch((error) => {
        setFetchedRecord("Error fetching record");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple Record App</h1>

      {/* Section to Insert a Record */}
      <div>
        <h2>Insert a Record</h2>
        <input
          type="text"
          value={record}
          onChange={handleInputChange}
          placeholder="Enter a record"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {/* Display message after submitting a record */}
      {message && <p>{message}</p>}

      {/* Section to Fetch the Last Record */}
      <div>
        <h2>Get the Last Record</h2>
        <button onClick={fetchLastRecord}>Fetch Last Record</button>

        {/* Display fetched record */}
        {fetchedRecord && (
          <div
            style={{
              marginTop: "10px",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            <h3>Last Record:</h3>
            <p>{fetchedRecord}</p>
          </div>
        )}
      </div>
    </div>
  );
}
