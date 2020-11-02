var loginForm = document.getElementById("loginForm");
var userName = document.getElementById("userName").value;
var userPass = document.getElementById("userPass").value;

function userCheck(){
    if (userName == 'bishway' && userPass == '1234') {
        document.location("/views/newsfeed.ejs")
    }

    else{
        document.write("Invalid user")
    }
}