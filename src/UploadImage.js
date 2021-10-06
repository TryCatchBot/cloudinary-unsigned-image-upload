import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
// import Button from "@material-ui/core/Button";
import "../../../Styles/imageUpload.css";

export default function UploadImage () {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };



  return (
    <div className="img-upload">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button id="upload-btn"
              style={
                (isDragging ? { color: "red" } : null)
              }
              onClick={onImageUpload}
              {...dragProps}
            >
              Upload File or image
            </button>
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="80" />
                <div className="image-item__btn-wrapper">
                  <button style={{color:"#0f52ba"}} onClick={() => onImageUpdate(index)}>
                    Update
                  </button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
