function InitializeLocalTestdata(){ //Purely Back-End function [use this to reset your Local storage for testing purposes] beware will completely reset database
    localStorage.clear();
    
    var Reset = document.createElement("img");
    Reset.src = "tanjiro.jpg";

    const arrReset = {
        username : "Clayton",
        name : "Clayton Strydom",
        email : "animelover420@gmail.com",
        password : "1234",
        profilepic : Reset
    };

    localStorage.setItem("Clayton", JSON.stringify(arrReset));
}

function NotNull(username, password1, password2, email, name,){
    if (username !== ""){
        console.log("1");
        if (password1 !== ""){
            console.log("2");
            if (password2 !== ""){
                console.log("3");
                if (email !== ""){
                    console.log("4");
                    if (name !== ""){
                        console.log("5");
                        return true;
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }  
            }else{
                return false;
            }
        }else{
            return false;
        }
    }else{
        return false;
    }  
}

function SaveLogin(){ //Saves Register to local storage
    let username = document.getElementById('username').value;
    array = CreateSaveArray();

    localStorage.setItem(username, JSON.stringify(array));
}

function CreateSaveArray(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var fileInput = document.getElementById('fileInput').value; //getBase64Image(

    
  //  if (fileInput == null){
  //      fileInput = defaultPic();
  //  }

  //  document.body.appendChild(ProfilePic);
    const arrUserInfo = {
        username : username,
        name : name,
        email : email,
        password : password,
        profilepic : fileInput
    };
    console.log(arrUserInfo);
    return arrUserInfo;
}

function ValidateRegister(username){ //function to check if username & email is unique and if password inputs match

    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("retypePassword").value;
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    const arrUserInfo = localStorage.getItem(username);
    if (NotNull(username, password1, password2, email, name) == true){
        if (arrUserInfo == null){
                if (password1==password2){
                    return "Register Successful";
               }else{
                    return "Passwords do not match!";
                }
        }else{
            return "Username already exists!";
        }
    }else{
        return "Please Fill in your boxes";
    }
}

function defaultPic(){ //assigns random profile pic from the "default" file in the folder
    const random = Math.floor(Math.random() * 6) + 1 //random num from 1 - 6
    var DefaultProfile = document.createElement("img");

    if (random = 1) {
        DefaultProfile.src = "ProfilePictures\\default\\1.jpg";
    }
    if (random = 2) {
        DefaultProfile.src = "ProfilePictures\\default\\2.jpg";
    }
    if (random = 3) {
        DefaultProfile.src = "ProfilePictures\\default\\3.jpg";
    }
    if (random = 4) {
        DefaultProfile.src = "ProfilePictures\\default\\4.jpg";
    }
    if (random = 5) {
        DefaultProfile.src = "ProfilePictures\\default\\5.jpg";
    }
    if (random = 6) {
        DefaultProfile.src = "ProfilePictures\\default\\6.jpg";
    }

    return DefaultProfile;
}

window.onload = function() { //This event function validates that an uploaded ProfilePic is of the correct file type [use (window.onload = "function()) when calling

    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function(e) {
        var file = fileInput.files[0];
        var imageType = /image.*/;

        if (file.type.match(imageType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                fileDisplayArea.innerHTML = "";
                var img = new Image();
                img.src = reader.result;

                fileDisplayArea.appendChild(img);
            }
            reader.readAsDataURL(file); 
        }else {
            fileDisplayArea.innerHTML = "File not supported!"
        }
    });
}

/*
function getBase64Image(img) { //converts any image into a base 64 in order to standardize local storage
var canvas = document.createElement("canvas");
canvas.width = img.width;
canvas.height = img.height;

var ctx = canvas.getContext("2d");
ctx.drawImage(img, 0, 0);

var dataURL = canvas.toDataURL("image/png");

return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
*/
