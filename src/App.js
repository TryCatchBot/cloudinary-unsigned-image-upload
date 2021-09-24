import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import { Image } from "cloudinary-react";
// import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {CloudinaryImage} from "@cloudinary/url-gen/assets/CloudinaryImage";
import URLConfig from "@cloudinary/url-gen/config/URLConfig";
import CloudConfig from "@cloudinary/url-gen/config/CloudConfig";

function App() {


  // Create a Cloudinary instance and set your cloud name.
  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: 'projectnairon'
  //   }
  // });

  // cld.image returns a CloudinaryImage with the configuration set.
  // const myImage = cld.image('sample');

  // The URL of the image is: https://res.cloudinary.com/demo/image/upload/sample




  // Set the Cloud configuration and URL configuration
  // let cloudConfig = new CloudConfig({cloudName: 'projectnairon'});
  // let urlConfig = new URLConfig({secure: true});

  // // Instantiate and configure a CloudinaryImage object.
  // let myImage = new CloudinaryImage('sample', cloudConfig, urlConfig);

  // // The URL of the image is: https://res.cloudinary.com/demo/image/upload/sample




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

  // const data = data.secure_url
  const el = document.querySelector('#data');


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
