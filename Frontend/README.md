Fact Shield – Frontend (React App for Real-Time Fake News Detection)

Fact Shield is an AI-powered fake news detection platform.
This React-based frontend provides an intuitive UI where users can paste or type news content and instantly check whether the news is Real or Fake.

It communicates with the Flask backend through API calls for real-time predictions.

🎯 Frontend Objective

Provide a simple and interactive UI for users

Send news text to Flask backend API

Display Real/Fake predictions with confidence

Show loader, error messages, and alerts

Deliver a responsive and clean UI

🖥️ Tech Stack
Category	Tools
Framework	React.js
 Tailwind 
API Handling	 Fetch API
Backend	Flask (communicated via REST API)
Build Tool	Vite  






⚙️ How It Works

User inputs news text.

React sends the text to backend API → /predict.

Backend returns:

prediction → Real or Fake

confidence score

Frontend displays output with color-coded result.

🔌 API Configuration
You probably have something like this inside your React code:
const API_URL = "http://127.0.0.1:5000/predict"; 



🚀 How to Run the Frontend
1️⃣ Install dependencies
npm install

2️⃣ Start the React development server
npm start

3️⃣ Access the web app
http://localhost:3000

🔄 Connecting Frontend with Backend

Ensure Flask backend is running on:

http://127.0.0.1:5000




🎨 UI Features

✔ Modern and clean input box
✔ Analyze button
✔ Loading spinner
✔ Real/Fake output card
✔ Responsive on mobile
✔ Easy-to-use design





🛠️ Customization

You can easily update:

Colors and styling

Font and theme

Component layout

Add history or saved predictions

Add dark mode



🧩 Troubleshooting
❗ “No response from backend”

Fix:

Backend must run on port 5000

Enable CORS in Flask:

from flask_cors import CORS
CORS(app)

❗ “CORS policy error”

Install CORS:

pip install flask-cors


Add:

from flask_cors import CORS
CORS(app)



✅ Conclusion

The Fact Shield frontend provides a smooth and user-friendly interface for detecting fake news in real-time.
It integrates seamlessly with the backend and is designed to be scalable, responsive, and easy to modify.