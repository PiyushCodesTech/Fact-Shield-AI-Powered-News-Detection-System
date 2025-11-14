import LoadingSpinner from "./LoadingSpinner";

export default function ResultPanel({ result, loading }) {
  return (
    <div className="bg-[#0b0b0d] border border-gray-800 rounded-2xl w-full lg:w-1/2 p-6 shadow-lg transition-all duration-300">
      <h2 className="text-xl font-semibold text-gray-200 flex items-center gap-2 mb-6">
        <span className="text-cyan-400">🛡</span> Analysis Result
      </h2>

      {/* Loading State */}
      {loading && <LoadingSpinner />}

      {/* Before submitting anything */}
      {!loading && !result && (
        <div className="text-center text-gray-500 py-20">
          <div className="text-5xl mb-4">🔍</div>
          Results will appear here once you submit the text.
        </div>
      )}

      {/* After Result */}
      {!loading && result && (
        <div className="space-y-6 animate-fadeIn">
          
          {/* Prediction Badge */}
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-medium text-gray-300">Prediction:</h3>

            <span
              className={`px-4 py-1 rounded-full text-sm font-semibold
                ${
                  result.label === 1
                    ? "bg-green-600/20 text-green-400 border border-green-600"
                    : "bg-red-600/20 text-red-400 border border-red-600"
                }
              `}
            >
              {result.label === 1 ? "Real News" : "Fake News"}
            </span>
          </div>

          {/* Confidence Progress Bar */}
          <div>
            <p className="text-gray-400 text-sm mb-2">
              Confidence: {Math.round(result.confidence * 100)}%
            </p>
            <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
              <div
                className={`h-3 rounded-full transition-all duration-700
                  ${
                    result.confidence < 0.5
                      ? "bg-red-500"
                      : result.confidence < 0.75
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }
                `}
                style={{ width: `${result.confidence * 100}%` }}
              ></div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
