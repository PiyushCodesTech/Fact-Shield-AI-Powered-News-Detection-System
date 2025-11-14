export async function classifyNews(text) {
  try {
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return { error: "Failed to connect to backend" };
  }
}
