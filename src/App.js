import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import { Image } from "cloudinary-react";

function App() {
  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "imkbgohe");

    Axios.post(
      "https://api.cloudinary.com/v1_1/projectnairon/image/upload",
      formData
    ).then((response) => {
      console.log(response);
    });
  };

  return (
    // <div className="App">

    // </div>
    <div className="hey-txt">
      <input
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
      ></input>
      <button onClick={uploadImage}>Upload Image</button>

      <Image
        style={{width: 200}}
        cloudName="projectnairon"
        publicId="https://res.cloudinary.com/projectnairon/image/upload/v1632328078/izn1wyw5ncgjsd7ruvlc.png"
      />
    </div>
  );
}

export default App;
