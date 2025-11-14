import { useState } from "react";
import Header from "./components/Header";
import TextInputPanel from "./components/TextInputPanel";
import ResultPanel from "./components/ResultPanel";
import Footer from "./components/Footer";
import { classifyNews } from "./utils/classifyNews";

export default function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  

  const analyzeHandler = async (text) => {
    setLoading(true);
    setResult(null);

    const res = await classifyNews(text);
    setResult(res);

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex flex-col lg:flex-row justify-center items-center gap-10 p-6 max-w-6xl mx-auto w-full">
        <TextInputPanel onAnalyze={analyzeHandler} loading={loading} />
        <ResultPanel result={result} loading={loading} />
      </main>

      <Footer />
    </div>
  );
}
