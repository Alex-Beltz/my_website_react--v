import React, { useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

export default function ImageResizerTool() {
  const [images, setImages] = useState([]);
  const [resizedImages, setResizedImages] = useState([]);
  const [resizeOption, setResizeOption] = useState("100x100");

  const handleImageDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setImages(files);
    setResizedImages([]);
  };

  const handleImageResize = async () => {
    const resized = await Promise.all(
      images.map(async (image) => {
        const dataUrl = await readFileAsDataURL(image);
        const [width, height] = resizeOption.split("x").map(Number);
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        const img = await createImage(dataUrl);
        context.drawImage(img, 0, 0, width, height);
        const resizedDataUrl = canvas.toDataURL();
        const resizedBlob = await dataURLToBlob(resizedDataUrl);
        return { name: `${image.name}_${resizeOption}`, blob: resizedBlob };
      })
    );
    setResizedImages(resized);
  };

  const handleDownload = async () => {
    const zip = new JSZip();
    resizedImages.forEach((resizedImage) => {
      zip.file(resizedImage.name, resizedImage.blob);
    });
    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, "resized_images.zip");
  };

  const readFileAsDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const createImage = (src) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = (error) => reject(error);
      image.src = src;
    });
  };

  const dataURLToBlob = (dataUrl) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", dataUrl, true);
      xhr.responseType = "blob";
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(new Error("Failed to convert data URL to blob"));
        }
      };
      xhr.onerror = () => {
        reject(new Error("Failed to convert data URL to blob"));
      };
      xhr.send();
    });
  };

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        marginTop: "10%",
        backgroundColor: "#92ba92",
      }}
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleImageDrop}
    >
      {resizedImages.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: "-40%",
            marginBottom: "2rem",
          }}
        >
          <div style={{ fontWeight: "bold" }}>Resized Images:</div>
          <button onClick={handleDownload}>Download my resized images</button>
        </div>
      )}
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          marginLeft: "-50%",
        }}
      >
        <div
          style={{
            width: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>Drop images here</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>Select resize option:</div>
            <select
              value={resizeOption}
              onChange={(event) => setResizeOption(event.target.value)}
            >
              <option value="100x100">100x100</option>
              <option value="150x300">150x300</option>
              <option value="300x500">300x500</option>
            </select>
            <button onClick={handleImageResize}>Resize images</button>
          </div>
        </div>
        {images.length > 0 && (
          <div
            style={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              marginLeft: "-25%",
            }}
          >
            <div>Selected images:</div>
            {images.map((image) => (
              <div key={image.name}>{image.name}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
