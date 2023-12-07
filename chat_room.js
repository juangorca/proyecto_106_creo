user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "¡te damos la bienvenida "+user_name+"!";
function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "añadir el nombre de la sala"
        });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach
(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Inicia el código
    console.log("Nombre de la sala "+room_name);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
   //Finaliza el código
   });});}
getData();
 function logout() {
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "index.html"
 }