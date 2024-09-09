function myfunction() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var errormessage = document.getElementById("errormessage");

  if (username === "sabin" && password === "pudasaini") {
    window.location.href = "logout.html";
  } else {
    errormessage.style.display = "block";
  }
}

function Loggedout() {
  window.location.href = "login.html";
}

function showpass() {
  var a = document.getElementById("password");
  if (a.type === "password") {
    a.type = "text";
  } else {
    a.type = "password";
  }
}

// //nav open close ko lagi try gareko tara vayena hahahahaha

// function hamicon() {
//   var hamicon = document.getElementsByClassName(".mid-nav");

//   let navopen = false;

//   if (navopen === false) {
//     hamicon.style.left = "0%";
//     navopen = true;
//   } else {
//     hamicon.style.left = "-100%";
//     navopen = false;
//   }
// }
