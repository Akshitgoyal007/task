user_name= document.getElementById("user_name"); //username
email=document.getElementById("email");//email
password = document.getElementById("password"); //password
Register = document.getElementById("Register"); //submit 


function login() {
    $.getJSON("login.json", function(jsdata) {
        json = jsdata;
        user = i1.value;
        password = i2.value;
        if (user == json.user["username"] && password == json.user["password"]){
            console.log("success")

        }
               
    })
}

console.log(login("akshit",12345))