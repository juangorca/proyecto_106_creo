// Configuración de Firebase de tu app web
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
 var firebaseConfig = {
    apiKey: "AIzaSyBVY0kkfAhsUVdxBTtpKXBk75EmkZRoSK4",
    authDomain: "proyecto-base-de-datos-100.firebaseapp.com",
    projectId: "proyecto-base-de-datos-100",
    storageBucket: "proyecto-base-de-datos-100.appspot.com",
    messagingSenderId: "882924434248",
    appId: "1:882924434248:web:5def3658b0033c4331397d",
    measurementId: "G-2V2EN42WKT"
  };

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
    /*
    localStorage.setItem("user_name", user_name);


    window.location = "chat_room.html";
    */
}



