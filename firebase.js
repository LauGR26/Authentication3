import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCijxlCqFkr6-8wQ6Ojxz-yIgweeCWKQqo",
  authDomain: "iniciodesesiong1.firebaseapp.com",
  projectId: "iniciodesesiong1",
  storageBucket: "iniciodesesiong1.appspot.com",
  messagingSenderId: "348790498373",
  appId: "1:348790498373:web:82c1afb3e89dd0ef81af2c"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export class ManageAccount {
  register(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "/index.html";
        alert("Registro exitoso.");
      })
      .catch((error) => {
        console.error(error.message);
        alert("Error al registrar" );
      });
  }

  authenticate(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "/Templates/home.html";
        alert("Has iniciado sesión correctamente.");
      })
      .catch((error) => {
        console.error(error.message);
        alert("Error al iniciar sesión");
      });
  }

  signOut() {
    signOut(auth)
      .then(() => {
        window.location.href = "/Templates/home.html";
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
