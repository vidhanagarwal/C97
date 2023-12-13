
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAaftlqSKjQ6EYZohBtbE09MK_pbQv2FIY",
      authDomain: "kwitter-8c3a0.firebaseapp.com",
      databaseURL: "https://kwitter-8c3a0-default-rtdb.firebaseio.com",
      projectId: "kwitter-8c3a0",
      storageBucket: "kwitter-8c3a0.appspot.com",
      messagingSenderId: "891997367503",
      appId: "1:891997367503:web:deb47ebcafe2cfe5c99bba"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";


    function addRoom(){
      var room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"

      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    } 
       
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}