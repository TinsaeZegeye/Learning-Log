import { useState } from "react";

export default function App() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (includeNumbers) {
      chars += "0123456789";
    }

    if (includeSymbols) {
      chars += "!@#$%^&*()_+[]{}<>?";
    }

    let generated = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generated += chars[randomIndex];
    }

    setPassword(generated);
  };

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Mini Password Generator</h1>

        <div className="password-box">
          <input type="text" value={password} readOnly />
          <button onClick={copyToClipboard}>Copy</button>
        </div>

        <div className="controls">
          <label>
            Length: {length}
            <input
              type="range"
              min="6"
              max="32"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </label>

          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Include Numbers
          </label>

          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            Include Symbols
          </label>

          <button className="generate-btn" onClick={generatePassword}>
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}
