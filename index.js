var userlist = document.getElementById("users");
console.log(userlist);
for(var i in users){
    console.log(users[i].username);
    var btn = document.createElement("BUTTON");
    btn.innerHTML = users[i].username;
    btn.id = users[i].id - 1;
    btn.onclick = function(){
        console.log(this.id);
        localStorage["user"] = this.id;
        window.location.href="editpage.html";
    }
    userlist.appendChild(btn);
}