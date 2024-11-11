import {  useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

let initialState = {
  companyName: "",
  programme: "",
  designation: "",
  package: "",
  skills: [],
  driveDate: "",
  lastDate: "",
};

const AddJob = ({ isOpen, onClose }) => {
  let [formData, setFormData] = useState(initialState);
  const [inputValue, setInputValue] = useState("");
  const [skills, setSkills] = useState(["js", "html", "css"]);
  const [selectedOption, setSelectedOption] = useState("Range");
  if (!isOpen) return null;

  let handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  let handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    

    const onPackageChange = (event, isRange = false) => {

      if (isRange && formData.package) {
        setFormData({
          ...formData,
          package: `${formData.package} to ${event.target.value}`,
        });
      } else {
        setFormData({ ...formData, package: event.target.value });
      }
    };


  let onEnterKeyHit = (event) => {
    if (event.key === `Enter`) {
      setSkills([...skills, inputValue]);
      setInputValue("");
    }
  };

  let handleAddJob = () => {
    const finalFormData = { ...formData, skills };
    console.log(finalFormData);
    };
    


  return (
    <div
      className="w-svw h-full bg-opacity-30 bg-black m-auto -z-10"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onClose();
      }}
    >
      <div
        className="w-1/2 h-full z-20 text-bl ack opacity-100 bg-white m-auto p-8 flex flex-col gap-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex justify-between ">
          <h1 className="text-start font-medium">Add Job Description</h1>
          <div className="font-bold text-2xl pe-4" onClick={onClose}>
            <IoCloseSharp />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-semibold">Name</h1>
          <input
            type="text"
            className="border border-slate-400 rounded-md px-2 py-1"
            placeholder="company Name"
            name="companyName"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-semibold">Programme</h1>
          <input
            type="text"
            className="border border-slate-400 rounded-md px-2 py-1"
            placeholder="Programme"
            name="programme"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-semibold">Designation</h1>
          <input
            type="text"
            className="border border-slate-400 rounded-md px-2 py-1"
            placeholder="designation"
            name="designation"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-semibold">Stream</h1>
          <input
            type="text"
            className="border border-slate-400 rounded-md px-2 py-1"
            placeholder="stream"
            name="stream"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-semibold">Skills</h1>
          <input
            type="text"
            className="border border-slate-400 rounded-md px-2 py-1"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={onEnterKeyHit}
            placeholder="Type something and press Enter"
          />
          {skills.length > 0 && (
            <div className="w-full h-8 rounded-md my-2 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="border border-gray-400 bg-gray-200 min-w-24 rounded-lg flex px-3 justify-center items-center gap-2 "
                >
                  <p className="text-sm font-semibold">{skill}</p>
                  <span
                    className="cursor-pointer pt-1"
                    onClick={() =>
                      setSkills(skills.filter((_, i) => i !== index))
                    }
                  >
                    <IoCloseSharp />
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <h1 className="text-base font-semibold">Batch</h1>
          <select
            name="batch"
            id=""
            className="border border-slate-400 rounded-md px-2 py-1 "
            onChange={handleChange}
          >
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
        </div>

        <div className="flex flex-col">
          <h1 className="text-base font-semibold">Package</h1>
          <div className="flex-col flex gap-4">
            <div>
              <label>
                <input
                  type="radio"
                  name="packageOption"
                  value="Fixed"
                  checked={selectedOption === "Fixed"}
                  onChange={() => {
                    setSelectedOption("Fixed");
                    setFormData({ ...formData, package: "" });
                  }}
                />
                Fixed
              </label>

              <label>
                <input
                  type="radio"
                  name="packageOption"
                  value="Range"
                  checked={selectedOption === "Range"}
                  onChange={() => {
                    setSelectedOption("Range");
                    setFormData({ ...formData, package: "" });
                  }}
                />
                Range
              </label>
            </div>

            <div className="flex gap-4">
              <select
                name="packageFixed"
                className="border border-slate-400 rounded-md px-2 py-1 w-1/2"
                onChange={(e) => onPackageChange(e)}
              >
                <option value="">Select Fixed Package</option>
                <option value="4 Lac">4 Lac</option>
                <option value="6 Lac">6 Lac</option>
                <option value="8 Lac">8 Lac</option>
                <option value="10 Lac">10 Lac</option>
              </select>

              {selectedOption === "Range" && (
                <select
                  name="packageRange"
                  className="border border-slate-400 rounded-md px-2 py-1 w-1/2"
                  onChange={(e) => onPackageChange(e, true)}
                >
                  <option value="">Select Range Package</option>
                  <option value="8 Lac">8 Lac</option>
                  <option value="10 Lac">10 Lac</option>
                  <option value="12 Lac">12 Lac</option>
                  <option value="14 Lac">14 Lac</option>
                </select>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-base font-semibold">Date of Drive</h1>
          <input
            type="date"
            className="border border-slate-400 rounded-md px-2 py-1"
            placeholder="driveDate"
            name="driveDate"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-semibold">Last date of Application</h1>
          <input
            type="date"
            className="border border-slate-400 rounded-md px-2 py-1"
            placeholder="lastDate"
            name="lastDate"
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            onClick={handleAddJob}
            type="submit"
            className="bg-btnColor  hover:font-bold  text-white font-semibold py-2 px-5 rounded-md float-end"
          >
            Add Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
