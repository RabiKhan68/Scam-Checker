import React, { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import CustomAlert from "./CustomAlert";
import ScamResult from "./ScamResult";

const ScamChecker = (props) => {
  const [activeTab, setActiveTab] = useState("Image");
  const [inputValue, setInputValue] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [result, setResult] = useState(null);

  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showAlert = (message, type = "success") => {
    setAlert({ show: true, message, type });
  };

  // 🔥 YOUR LOCAL AI LOGIC
  const analyzeLocally = (text) => {
    let score = 0;
    let flags = [];

    const lower = text.toLowerCase();

    if (lower.includes("urgent")) {
      score += 25;
      flags.push("Uses urgent language");
    }

    if (lower.includes("win") || lower.includes("prize")) {
      score += 25;
      flags.push("Too good to be true offer");
    }

    if (lower.includes("otp") || lower.includes("password")) {
      score += 30;
      flags.push("Requests sensitive information");
    }

    if (lower.includes("click") || lower.includes("link")) {
      score += 20;
      flags.push("Contains suspicious link request");
    }

    return { score, flags };
  };

  // 🔥 MAIN CHECK FUNCTION
  const handleCheck = async () => {
    if (activeTab === "Image" && !imageFile) {
      showAlert("Please upload an image", "error");
      return;
    }

    if (activeTab !== "Image" && !inputValue.trim()) {
      showAlert("Please enter input", "error");
      return;
    }

    showAlert("Analyzing...", "warning");

    const local = analyzeLocally(inputValue);

    try {
      const res = await fetch("/api/check-scam", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: inputValue,
          type: activeTab,
        }),
      });

      const data = await res.json();
      const aiText = data.result || "";

      let verdict = "Safe";

      if (aiText.toLowerCase().includes("scam")) verdict = "Scam";
      else if (aiText.toLowerCase().includes("suspicious"))
        verdict = "Suspicious";

      const finalScore = Math.min(100, local.score + 40);

      setResult({
        verdict,
        score: finalScore,
        explanation: aiText,
        flags: local.flags,
      });

      showAlert("Analysis Complete ✅", "success");

    } catch (err) {
      console.error(err);
      showAlert("AI failed ❌", "error");
    }
  };

  const reportScam = (result) => {
  try {
    const existingReports =
      JSON.parse(localStorage.getItem("reportedScams")) || [];

    // 🔥 Prevent duplicates
    const alreadyExists = existingReports.some(
      (r) => r.input === inputValue
    );

    if (alreadyExists) {
      showAlert("Already reported!", "warning");
      return;
    }

    const newReport = {
      id: Date.now(),
      input: inputValue,
      type: activeTab,
      verdict: result.verdict, // ✅ FIXED (you used explanation before ❌)
      explanation: result.explanation,
      date: new Date().toISOString(),
    };

    existingReports.push(newReport);

    localStorage.setItem("reportedScams", JSON.stringify(existingReports));

    showAlert("Reported successfully!", "success");

  } catch (err) {
    console.error(err);
    showAlert("Report failed!", "error");
  }
};

  return (
    <div className="min-h-screen bg-gray-600 flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-8">

      {/* LEFT SIDE */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-white">{props.description}</span> <br />
          <span className="text-gray-900">Ask {props.name}</span>
        </h1>

        <p className="text-gray-600 mb-8">
          Free, straightforward scam checking in seconds.
        </p>

        {/* FORM */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">

          {/* TABS */}
          <div className="flex mb-4 border-b border-gray-200">
            {["Image", "Website", "Text", "Phone"].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-2 text-center font-medium ${
                  activeTab === tab
                    ? "border-b-2 border-gray-500 text-gray-900"
                    : "text-gray-600"
                }`}
                onClick={() => {
                  setActiveTab(tab);
                  setInputValue("");
                  setImageFile(null);
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* INPUT AREA */}
          <div
            className="border-2 border-dashed border-gray-200 rounded-lg p-12 flex flex-col items-center justify-center text-gray-400 mb-4 cursor-pointer hover:bg-gray-100"
            onClick={() => {
              if (activeTab === "Image") {
                document.getElementById("fileInput").click();
              }
            }}
          >
            <AiOutlineUpload size={32} className="mb-2" />

            {activeTab === "Image" && (
              <>
                <p>
                  Drag and drop your images here <br />
                  or click to browse
                </p>
                {imageFile && (
                  <p className="text-green-500 mt-2 text-sm">
                    {imageFile.name}
                  </p>
                )}
              </>
            )}

            {activeTab === "Website" && (
              <input
                type="text"
                placeholder="Enter website URL..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full mt-3 px-3 py-2 rounded border text-black"
              />
            )}

            {activeTab === "Text" && (
              <textarea
                placeholder="Paste the text here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                rows={4}
                className="w-full mt-3 px-3 py-2 rounded border text-black"
              />
            )}

            {activeTab === "Phone" && (
              <input
                type="tel"
                placeholder="Enter phone number..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full mt-3 px-3 py-2 rounded border text-black"
              />
            )}
          </div>

          {/* FILE INPUT */}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => setImageFile(e.target.files[0])}
          />

          {/* BUTTON */}
          <button
            onClick={handleCheck}
            className="w-full bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            Check now →
          </button>
        </div>

        {/* RESULT UI */}
        <ScamResult result={result} onReport={reportScam} />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 hidden md:flex justify-center">
        <img
          src="/confused_man.jpg"
          alt="Scam Illustration"
          className="mt-10 w-[350px] h-[450px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* ALERT */}
      <CustomAlert
        show={alert.show}
        message={alert.message}
        type={alert.type}
        onClose={() => setAlert({ ...alert, show: false })}
      />
    </div>
  );
};

export default ScamChecker;