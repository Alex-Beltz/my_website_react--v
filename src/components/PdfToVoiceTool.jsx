import React, { useState } from "react";
import "../styles/App.css";
import "../styles/PdfToVoiceTool.css";
// import pdfjs from "pdfjs-dist/build/pdf";
import pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import { saveAs } from "file-saver";
import responsiveVoice from "responsivevoice";

export default function PdfToVoiceTool() {
  const [audioData, setAudioData] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileDrop = async (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];

    console.log(file);

    if (!file.type.startsWith("application/pdf")) {
      alert("Please drop a PDF file");
      return;
    }

    const pdfData = await file.arrayBuffer();
    // const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
    const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
    const numPages = pdf.numPages;

    let text = "";
    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i);
      const pageText = await page.getTextContent();
      text += pageText.items.map((item) => item.str).join(" ");
      setProgress((i / numPages) * 100); // Update progress percentage
    }

    const audioBlob = await textToSpeech(text);
    setAudioData(audioBlob);
    setProgress(0); // Reset progress percentage
  };

  const handleDownload = () => {
    if (audioData) {
      const url = URL.createObjectURL(audioData);
      const link = document.createElement("a");
      link.href = url;
      link.download = "audio.mp3";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const textToSpeech = async (text) => {
    return new Promise((resolve, reject) => {
      responsiveVoice.speak(text, "UK English Female", {
        onend: () => {
          const audioBlob = new Blob([responsiveVoice.voice.wav], {
            type: "audio/wav",
          });
          resolve(audioBlob);
        },
        onerror: () => {
          reject(new Error("Text-to-speech conversion failed"));
        },
        onprogress: (percent) => {
          setProgress(percent); // Update progress percentage
        },
      });
    });
  };

  return (
    <div
      className="pdfDropBox shadow"
      onDrop={handleFileDrop}
      onDragOver={(event) => event.preventDefault()}
    >
      {audioData ? (
        <>
          <p className="pdfDropBoxText">Conversion complete</p>
          <button onClick={handleDownload}>Download audio</button>
        </>
      ) : (
        <>
          <p className="pdfDropBoxText">
            Drag a PDF file here to convert to voice
          </p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="pdfDropBoxText">{Math.round(progress)}% complete</p>
        </>
      )}
    </div>
  );
}
