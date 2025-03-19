// renderer/script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZD0FiX_dTO8iojw4R1W95Ybk75V0sIag",
  authDomain: "info-efb6b.firebaseapp.com",
  projectId: "info-efb6b",
  storageBucket: "info-efb6b.appspot.com",
  messagingSenderId: "8141133981",
  appId: "1:8141133981:web:6e5dd63af5bb7b8d199c74",
  measurementId: "G-BWFYWQ319L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const authContainer = document.getElementById('auth-container');
const dashboardContainer = document.getElementById('dashboard-container');
const errorMessage = document.getElementById('error-message');

// Show Auth Page
function showAuth() {
  authContainer.classList.remove('hidden');
  dashboardContainer.classList.add('hidden');
}

// Show Dashboard
function showDashboard() {
  authContainer.classList.add('hidden');
  dashboardContainer.classList.remove('hidden');
}

// Login Button
loginBtn.addEventListener('click', async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email || !password) {
    errorMessage.textContent = "Please enter both email and password.";
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    showDashboard();
  } catch (error) {
    console.error("Login failed:", error);
    errorMessage.textContent = error.message || "An error occurred during login.";
  }
});

// Logout Button
logoutBtn.addEventListener('click', async () => {
  try {
    await signOut(auth);
    showAuth();
  } catch (error) {
    console.error("Logout failed:", error);
  }
});

// Listen for auth state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    showDashboard();
  } else {
    showAuth();
  }
});