document.getElementById("generateBtn").addEventListener("click", async () => {
  const prompt = document.getElementById("prompt").value.trim();
  const output = document.getElementById("output");

  if (!prompt) {
    alert("Please enter some lesson text.");
    return;
  }

  output.textContent = "Generating quiz...";

  try {
    // Use relative path to Vercel API route
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    if (!res.ok) {
      throw new Error(`Server responded with ${res.status}`);
    }

    const data = await res.json();
    output.textContent = data.output;
  } catch (err) {
    output.textContent = "Error: " + err.message;
    console.error(err);
  }
});
