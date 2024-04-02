
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBldG_HEUVUa5kaKRO4u3lHUQYWrEbeI24",
    authDomain: "smartcity-1ed3b.firebaseapp.com",
    projectId: "smartcity-1ed3b",
    storageBucket: "smartcity-1ed3b.appspot.com",
    messagingSenderId: "1035622158746",
    appId: "1:1035622158746:web:25a08dd26171139e04aa23"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click' , function(e){

   set(ref(db, 'user/' + document.getElementById("username").value),
   {

     username: document.getElementById("username").value,
     email :document.getElementById("email").value,
     PhoneNumber: document.getElementById("phone").value,

   });
     alert("Login Successfull  !");  
  })
