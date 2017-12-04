var name = document.getElementById("pname");
var username = document.getElementById("usrnm");
var email = document.getElementById("mail");
var website = document.getElementById("website");
console.log(users[Number(localStorage["user"])].name);

name.value=users[Number(localStorage["user"])].name;
username.value=users[Number(localStorage["user"])].username;
email.value=users[Number(localStorage["user"])].email;
website.value=users[Number(localStorage["user"])].website;

function saveInfo(){
    if(name.value === users[Number(localStorage["user"])].name){
        users[Number(localStorage["user"])].username = username.value;
        users[Number(localStorage["user"])].email = email.value;
        users[Number(localStorage["user"])].website = website.value;
        localStorage["success"] = "OK";
        window.close();
    }

    }
}