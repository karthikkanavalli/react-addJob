import { useState } from "react";

const MultiSelectableDisplay = () => {
  // State to store selected items
  const [selectedData, setSelectedData] = useState([]);

  // Sample data (this could be options from a dropdown)
  const sampleDataOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];

  // Handle selection of data
  const handleSelect = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedData(selectedOptions);
  };

  // Handle individual cancel
  const handleCancel = (dataToRemove) => {
    setSelectedData((prevSelectedData) =>
      prevSelectedData.filter((data) => data !== dataToRemove)
    );
  };

  return (
    <div>
      <h3>Select Options:</h3>
      {/* Multi-select dropdown */}
      <select
        multiple
        value={selectedData}
        onChange={handleSelect}
        style={{ width: "200px", height: "150px" , scrollbarGutter: "stable both-edges"}}
      >
        {sampleDataOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Display selected items with individual cancel buttons */}
      <div style={{ marginTop: "20px" }}>
        {selectedData.length > 0 && (
          <div
            style={{
              border: "1px solid #ccc",

              padding: "10px",
              display: "flex",
              flexDirection: "column",
            scrollbarGutter: "stable both-edges",
            }}
          >
            {selectedData.map((data, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                  border: "1px solid #ccc",
                  padding: "5px",
                }}
              >
                <p style={{ margin: "0 10px 0 0" }}>{data}</p>
                <button
                  onClick={() => handleCancel(data)}
                  style={{
                    cursor: "pointer",
                    padding: "5px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                  }}
                >
                  Cancel
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelectableDisplay;
