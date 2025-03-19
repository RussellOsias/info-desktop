import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAZD0FiX_dTO8iojw4R1W95Ybk75V0sIag",
  authDomain: "info-efb6b.firebaseapp.com",
  projectId: "info-efb6b",
  storageBucket: "info-efb6b.appspot.com",
  messagingSenderId: "8141133981",
  appId: "1:8141133981:web:6e5dd63af5bb7b8d199c74",
  measurementId: "G-BWFYWQ319L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const regEmailInput = document.getElementById('reg-email');
const regPasswordInput = document.getElementById('reg-password');
const regNameInput = document.getElementById('reg-name');
const registerBtn = document.getElementById('registerBtn');
const errorMessage = document.getElementById('error-message');

registerBtn.addEventListener('click', async () => {
  const email = regEmailInput.value;
  const password = regPasswordInput.value;
  const name = regNameInput.value;

  if (!email || !password || !name) {
    console.error("Registration error: All fields are required.");
    errorMessage.textContent = "Please fill in all fields.";
    return;
  }

  try {
    console.log("Attempting to register with email:", email);
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("Registration successful");
    alert("Registration successful! Please log in.");
    window.location.href = "./index.html"; 
  } catch (error) {
    console.error("Registration failed:", error);
    errorMessage.textContent = error.message || "An error occurred during registration.";
  }
});