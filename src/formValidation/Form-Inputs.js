import "./app.css";
import Alert from "./ALert";
import { useState } from "react";

export default function FormValid() {
  const [Input, SetInput] = useState({
    Name: "",
    PhoneNumber: "",
    Age: "",
    Check: "",
  });
  const [alert, SetAlert] = useState(false);
  const [message, setMessage] = useState("");
  function handleClick(e) {
    e.preventDefault();
    SetAlert(true);
      //   ==============
      setMessage("")
    if (Input.Age < 18 || Input.Age > 100) {
      return setMessage("ERROR: The  Age Is Not Valid");
    } else if (Input.PhoneNumber.length > 12 || Input.PhoneNumber.length < 10) {
        setMessage("ERROR: The Phone Number Is Not Valid")
    }
  }
  const disable = Input.Age === "" || Input.Name === "" || Input.Age === "";
  return (
    <>
      <div
        onClick={() => {
          if (alert) {
            SetAlert(false);
          }
        }}
        className="parentInputs"
      >
        <h2 style={{ textAlign: "center", fontSize: "23px" }}>
          Requesting a loan
        </h2>
        <hr />
        <form>
          <input
            placeholder="Name"
            value={Input.Name}
            onChange={(e) => {
              SetInput({ ...Input, Name: e.target.value });
            }}
          />
          <input
            placeholder="Phone Number"
            value={Input.PhoneNumber}
            onChange={(e) => {
              SetInput({ ...Input, PhoneNumber: e.target.value });
            }}
          />
          <input
            placeholder="Age"
            value={Input.Age}
            onChange={(e) => {
              SetInput({ ...Input, Age: e.target.value });
            }}
          />
          <label
            className="checkBox"
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "13px",
            }}
          >
            <input
              style={{
                width: "40px",
                height: "15px",
                accentColor: "teal",
              }}
              type="checkbox"
              value={Input.Check}
              onChange={(e) => {
                SetInput({ ...Input, Check: e.target.checked });
              }}
            />
            Are You Employee
          </label>
          <select>
            <option>Less Than 500$ </option>
            <option>Between 1000$ to 2000$ </option>
            <option>Above 2000$ </option>
          </select>
          <button
            onClick={handleClick}
            disabled={disable}
            className={disable ? "disable" : ""}
          >
            Submit
          </button>
        </form>
        <Alert isViable={alert} ERROR={message} />
      </div>
    </>
  );
}
