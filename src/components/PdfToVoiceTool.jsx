import React, { useState } from "react";
import pdfjs from "pdfjs-dist";
import { saveAs } from "file-saver";

export default function PdfToVoiceTool() {
  const [audioData, setAudioData] = useState(null);

  const handleFileDrop = async (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    if (!file.type.startsWith("application/pdf")) {
      alert("Please drop a PDF file");
      return;
    }

    const pdfData = await file.arrayBuffer();
    const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
    const numPages = pdf.numPages;

    let text = "";
    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i);
      const pageText = await page.getTextContent();
      text += pageText.items.map((item) => item.str).join(" ");
    }

    const audioBlob = await textToSpeech(text);
    setAudioData(audioBlob);
  };

  const handleDownload = () => {
    if (audioData) {
      saveAs(audioData, "audio.mp3");
    }
  };

  const textToSpeech = async (text) => {
    // code to convert text to audio using a text-to-speech API or library
    // returns an audio blob
  };

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      onDrop={handleFileDrop}
      onDragOver={(event) => event.preventDefault()}
    >
      {audioData ? (
        <>
          <p>Conversion complete</p>
          <button onClick={handleDownload}>Download audio</button>
        </>
      ) : (
        <p>Drag a PDF file here to convert to voice</p>
      )}
    </div>
  );
}
