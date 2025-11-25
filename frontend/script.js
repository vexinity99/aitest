document.getElementById("generateBtn").addEventListener("click", async () => {
  const prompt = document.getElementById("prompt").value.trim();
  const output = document.getElementById("output");

  if (!prompt) {
    alert("Please enter some lesson text.");
    return;
  }

  output.textContent = "Generating quiz...";

  try {
    const res = await fetch("http://localhost:3000/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    output.textContent = data.output;
  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
});
