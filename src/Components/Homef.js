import React, { useState } from "react";
export default function Homef() {
  const [name, setName] = useState("hello");
  const [data, setData] = useState(null);
  const [nameFlag, setNameFlag] = useState(true);
  function handleNameChange(name) {
    console.log("Click happened" + name.currentTarget.value);
    setName(name);
  }

  return (
    <div>
      {" "}
      <body>
        <div id="progress"></div>

        <div class="center">
          <div id="register">
            {setNameFlag && (
              <div id="inputContainer">
                <input
                  type="text"
                  style={{ float: "left" }}
                  placeholder="What's your name?.."
                  onChange={handleNameChange}
                  value={setName}
                />
                <br />
                <button
                  style={{
                    float: "left",
                    "border-radius": "20px",
                    "background-color": "#503291",
                    color: "white",
                  }}
                ></button>
              </div>
            )}
          </div>
        </div>

        <br />
      </body>
    </div>
  );
}
