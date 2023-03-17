    function Login(username, password){ //Checks if username is in system and if the given password matches the one saved in the system
        let UserInfo = JSON.parse(localStorage.getItem(username));

        console.log("Pee Pee ");

        console.log(username);
        console.log(password);
        
        if (NotNull(username, password) == true){
            if (UserInfo !== null){
                if (UserInfo["password"] == password){
                    return "Login Successful!"
                    console.log("Pee Pee 4");
                }
                else if(UserInfo["password"] !== password){
                    return "Password Incorrect!"
                    console.log("Pee Pee 5");
                }
            }
            else if(UserInfo === null){
                return "Username does not exist!"
                console.log("Pee Pee 6");
            }
        }
        else if(NotNull(username, password) == false){
            return "Please Fill in your boxes"
            console.log("Pee Pee 7");
        }
    }

    function NotNull(username, password){
        if (username !== " "){
            if (password !== " "){
                return true;
                console.log("Pee Pee 1");
            }
            else{
                return false;
                console.log("Pee Pee 2");
            }
        }
        else{
            return false;
            console.log("Pee Pee 3");
        }  
    }