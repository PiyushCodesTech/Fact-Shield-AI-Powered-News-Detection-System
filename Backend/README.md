Fact Shield – Backend (Flask API for Real-Time Fake News Detection)

An AI-powered backend system built using Flask, Machine Learning, and NLP to classify news articles as Real or Fake in real time.

This backend provides REST APIs that accept text input, preprocess it, vectorize it, run predictions using the trained ML model, and return results with confidence scores.

🚀 Backend Objective

Provide a Fast & Lightweight Flask API for fake-news detection

Load & serve a pre-trained Passive Aggressive Classifier model

Preprocess text using NLTK & TF-IDF Vectorizer

Integrate with frontend for real-time prediction

⚙️ Architecture (Backend Only)
User Input → Flask API → Preprocessing → TF-IDF Vectorizer → ML Model → Response JSON

Key Backend Functions

clean_text() → Cleans input text

TF-IDF Vectorizer → Converts text to numerical features

ML Model → Predicts Real/Fake

Flask API → Returns JSON response to the frontend

📁 Backend Folder Structure
Backend/
│── app.py
│── model.pkl
│── vector.pkl
│── requirements.txt
│── README.md
│
├── templates/
│     ├── index.html
│     └── result.html
│
└── static/
      └── style.css

🧠 Model Details

Algorithm: Passive Aggressive Classifier

Vectorizer: TF-IDF

Dataset: Kaggle Fake & True News Dataset

Accuracy: 99.51%

The model was trained separately and exported as:

model.pkl (classifier)

vector.pkl (TF-IDF vocabulary)

Both files are loaded by the Flask API during runtime.

🧩 Technologies Used (Backend)
Category	    Tools
Language	    Python
Framework	    Flask
ML Libraries	scikit-learn, nltk
Data Libraries	pandas, numpy
Deployment	    Localhost 
Others	        pickle


🖥️ How to Run Backend Locally
1️⃣ Install all dependencies
pip install -r requirements.txt

2️⃣ Run the Flask server
python app.py

3️⃣ Open in browser
http://localhost:5000



📊 Key Backend Features

✔ Pre-trained ML model loading
✔ Lightweight & fast API
✔ Input text preprocessing
✔ Real-time fake-news classification
✔ Confidence score calculation
✔ Easy integration with frontend

🛠️ Future Enhancements (Backend)

Add JWT-based authentication

Add API rate limiting

Add support for URLs & scraping

Improve confidence scoring mechanism

Deploy Flask backend on Render / Railway

✅ Conclusion

This backend powers the Fact Shield Fake News Detection System by providing a robust API for machine learning predictions. It integrates seamlessly with the frontend and delivers accurate, real-time classification using advanced NLP techniques.