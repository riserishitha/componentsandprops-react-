import React from "react";
const GalleryBody = ({ imageData }) => {
  return (
    <div>
      {imageData.map((image) => (
        <div key={image.id} className="column">
          <img src={image.img} alt="" />
        </div>
      ))}
    </div>
  );
};
export default GalleryBody;

