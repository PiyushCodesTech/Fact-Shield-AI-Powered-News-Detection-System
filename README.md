This guide explains how to run both the Backend (Flask API) and Frontend (React App) for the FactShield Fake News Detection System.

📂 Project Structure
FactShield/
│
├── Backend/      → Flask API (Model + Prediction)
└── Frontend/     → React Web App (UI)

🖥️ 1. Run the Backend (Flask API)
Step 1: Open Terminal
cd Backend

Step 2: Create a virtual environment
python -m venv venv

Step 3: Activate the environment
Windows:
venv\Scripts\activate

Mac/Linux:
source venv/bin/activate

Step 4: Install dependencies
pip install -r requirements.txt

Step 5: Start the Flask server
python app.py

✔️ Backend will run at:
http://127.0.0.1:5000

🌐 2. Run the Frontend (React App)
Step 1: Open a new terminal
cd Frontend

Step 2: Install dependencies
npm install

Step 3: Start the React app
npm run dev

✔️ Frontend will run at:
http://localhost:5173

🔗 Connecting Frontend & Backend

The frontend automatically sends API requests to:

http://127.0.0.1:5000/predict


Make sure both apps are running:

Backend: http://127.0.0.1:5000

Frontend: http://localhost:5173

🎉 Your Project is Now Running!

You can now paste any news text into the UI and analyze it.
