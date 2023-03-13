let login = document.querySelector(".login form");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let flag1 = false;
////////////////////////////////////////////
login.addEventListener("click", function (e) {
  if (e.target.getAttribute("id") == "Email") {
    if (document.querySelector(".email input").value == "") {
      document.querySelector(".email label").classList.add("toUp");
    } else if (document.querySelector(".email input").value != "") {
      document.querySelector(".email label").classList.add("toUp");
    }
  } else if (e.target.getAttribute("id") != "Email") {
    if (document.querySelector(".email input").value == "") {
      document.querySelector(".email label").classList.remove("toUp");
    } else if (document.querySelector(".email input").value != "") {
      document.querySelector(".email label").classList.add("toUp");
    }
  }
  /*****************************************************************/
  if (e.target.getAttribute("id") == "Password") {
    if (document.querySelector(".password input").value == "") {
      document.querySelector(".password label").classList.add("toUp");
    } else if (document.querySelector(".password input").value != "") {
      document.querySelector(".password label").classList.add("toUp");
    }
  } else if (e.target.getAttribute("id") != "Password") {
    if (document.querySelector(".password input").value == "") {
      document.querySelector(".password label").classList.remove("toUp");
    } else if (document.querySelector(".password input").value != "") {
      document.querySelector(".password label").classList.add("toUp");
    }
  }
});
