from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)


model = pickle.load(open("model.pkl", "rb"))
vectorizer = pickle.load(open("vector.pkl", "rb"))

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()


    if not data or "text" not in data:
        return jsonify({"error": "Missing 'text' field"}), 400

    text = data["text"]


    vector = vectorizer.transform([text])
    
    
    prediction = model.predict(vector)[0]
    score = model.decision_function(vector)[0]

  
    import math
    confidence = 1 / (1 + math.exp(-score))

    return jsonify({
    "label": int(prediction),    # convert numpy int64 → python int
    "confidence": round(float(confidence), 4)
})


if __name__ == "__main__":
    app.run(debug=True)
