import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import { Image } from "cloudinary-react";
// import  UploadImage from "./UploadImage";
// import {AdvancedImage} from '@cloudinary/react';
// import {Cloudinary} from "@cloudinary/url-gen";
// import {CloudinaryImage} from "@cloudinary/url-gen/assets/CloudinaryImage";
// import URLConfig from "@cloudinary/url-gen/config/URLConfig";
// import CloudConfig from "@cloudinary/url-gen/config/CloudConfig";

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

  const newConfig = {
    name: "Joshua",
    gender: "Male",
    Employer: "YConnector Ltd"
  }

 

  
  var imgSecure = {};

  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = () => {
    var formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "imkbgohe");

    

    // Axios.post(
    //   "https://api.cloudinary.com/v1_1/projectnairon/image/upload",
    //   formData
    // ).then((response) => {
    //   imgSecure = response.data.secure_url;
    //   console.log(imgSecure);
    //   console.log(response);
    // });

    // formData = {imgSecure, formData}

    Axios.post(
      "https://api.cloudinary.com/v1_1/projectnairon/image/upload",
      formData
    ).then((response) => {
      imgSecure = response.data.secure_url;
      console.log("I am from the global object", imgSecure);
      console.log(response);
    });
  };

  
  // const data = data.secure_url
  const el = document.querySelector('#data');

  const config = {
    name: "Joshua",
    gender: "Male",
    Employer: "YConnector Ltd"
  }

  // const multiple = () => {
  //   Promise.all([Axios.get("https://reqres.in/api/users?page=2"),
  //   Axios.post("https://reqres.in/api/users?page=2", config)
  // ]).then((res) => console.log(res[0],res[1]))
  // };



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
      {/* <UploadImage /> */}
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
