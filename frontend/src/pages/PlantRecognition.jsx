import { useState } from "react";

const API_BASE = "http://127.0.0.1:8000";

const PlantRecognition = () => {
  const [image, setImage] = useState(null);
  const [plantName, setPlantName] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Upload a plant image to get started 🌱" },
  ]);
  const [question, setQuestion] = useState("");

  // 🔹 IMAGE → BACKEND → PLANT IDENTIFY
  const handleIdentify = async () => {
    if (!image) {
      alert("Please upload an image");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", image);

    try {
      const res = await fetch(`${API_BASE}/plant/identify`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      setPlantName(data.plant);

      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: `🌿 Plant Identified: ${data.plant}\n\n${data.info}`,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "❌ Error identifying plant" },
      ]);
    }

    setLoading(false);
  };

  // 🔹 CHAT → BACKEND → LLM (EMBEDCHAIN)
  const handleAsk = async () => {
    if (!question || !plantName) return;

    setMessages((prev) => [...prev, { from: "user", text: question }]);
    setQuestion("");

    try {
      const res = await fetch(`${API_BASE}/plant/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question,
          plant: plantName,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { from: "bot", text: data.answer },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "❌ Error fetching answer" },
      ]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-2 gap-6">

      {/* LEFT: IMAGE UPLOAD */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Upload Plant Image</h3>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="preview"
            className="mt-4 rounded h-48 object-cover"
          />
        )}

        <button
          onClick={handleIdentify}
          disabled={loading}
          className="mt-4 w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 disabled:opacity-50"
        >
          {loading ? "Identifying..." : "Identify Plant"}
        </button>
      </div>

      {/* RIGHT: CHAT */}
      <div className="bg-white p-6 rounded shadow flex flex-col">
        <h3 className="text-xl font-semibold mb-4">Plant Info Chat</h3>

        <div className="flex-1 overflow-y-auto space-y-2 mb-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-2 rounded whitespace-pre-line ${
                msg.from === "bot"
                  ? "bg-green-100"
                  : "bg-blue-100 text-right"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="border flex-1 p-2 rounded"
            placeholder={
              plantName
                ? "Ask about this plant..."
                : "Identify a plant first..."
            }
            disabled={!plantName}
          />
          <button
            onClick={handleAsk}
            disabled={!plantName}
            className="bg-green-700 text-white px-4 rounded hover:bg-green-800 disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantRecognition;
