window.onload = function (){
    document.querySelector("#submitIn").addEventListener("click", function(event){
        event.preventDefault();
        checkLogin();
    });
    document.querySelector("#submitUp").addEventListener("click", function(event){
        event.preventDefault();
        checkRegister();
});
}

function checkRegister() {

    var podaci = [];

    var poljeName = document.querySelector("#name");
    var poljeUsername = document.querySelector("#username");
    var poljeEmail = document.querySelector("#mailUp");   
    var poljePassword = document.querySelector("#passUp");
    var poljePasswordAgain = document.querySelector("#confPassUp");

    var reName, reUsername, reEmail, rePassword;

    reName = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{1,12}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{1,19})+$/;
    reUsername = /^\w{4,}\S$/;
    reEmail = /^\w+([.-]?[\w\d]+)*@\w+([.-]?[\w]+)*(\.\w{2,4})+$/;
    rePassword = /^(?=.*\d)(?=.*[a-zčćžšđ])(?=.*[A-ZČĆŽŠĐ])[0-9a-zčćžšđA-ZČĆŽŠĐ]{8,}$/;

    var imeError = document.querySelector("#nameError");  
    var userError = document.querySelector("#usernameError");
    var mailError = document.querySelector("#emailError");
    var passError = document.querySelector("#passwordError"); 
    var passAgainError = document.querySelector("#passwordAgainError");

    if(poljeName.value == ""){
        poljeName.classList.add("error");
        imeError.innerHTML = "You must enter your name!";

    }
    else{
        if(!reName.test(poljeName.value)){
            imeError.innerHTML = "The name is not in a correct format!";
            poljeName.classList.add("error");
        }else{
            poljeName.classList.remove("error");
            imeError.innerHTML = "";
            podaci.push(poljeName);
        }
    }

    if(poljeUsername.value == ""){
        poljeUsername.classList.add("error");
        userError.innerHTML = "You must enter your username!";

    }
    else{
        if(!reUsername.test(poljeUsername.value)){
            userError.innerHTML = "The username is not in a correct format!";
            poljeUsername.classList.add("error");
        }else{
            poljeUsername.classList.remove("error");
            userError.innerHTML = "";
            podaci.push(poljeUsername);
        }
    }

    if(poljeEmail.value == ""){
        poljeEmail.classList.add("error");
        mailError.innerHTML = "You must enter your email!";

    }
    else{
        if(!reEmail.test(poljeEmail.value)){
            mailError.innerHTML = "The email is not in a correct format!";
            poljeEmail.classList.add("error");
        }else{
            poljeEmail.classList.remove("error");
            mailError.innerHTML = "";
            podaci.push(poljeEmail);
        }
    }
  

    if(poljePassword.value == ""){
        poljePassword.classList.add("error");
        passError.innerHTML = "You must enter your password!";

    }
    else{
        if(!rePassword.test(poljePassword.value)){
            passError.innerHTML = "The password is not in a correct format!";
            poljePassword.classList.add("error");
        }else{
            poljePassword.classList.remove("error");
            passError.innerHTML = "";
            podaci.push(poljePassword);
        }
    }
  

    if (poljePassword.value !== poljePasswordAgain.value){
        passAgainError.innerHTML= "Passwords do not match!";
        poljePasswordAgain.classList.add("error");
    }
    else {
        poljePasswordAgain.classList.remove("error");
    }

}

function checkLogin() {

    var podaci = [];

    var poljeLoginEmail = document.querySelector("#mailIn");
    var poljeLoginPassword = document.querySelector("#passIn");

    var reEmail, rePassword;

    reEmail = /^\w+([.-]?[\w\d]+)*@\w+([.-]?[\w]+)*(\.\w{2,4})+$/;
    rePassword = /^(?=.*\d)(?=.*[a-zčćžšđ])(?=.*[A-ZČĆŽŠĐ])[0-9a-zčćžšđA-ZČĆŽŠĐ]{8,}$/;

    var logMailError = document.querySelector("#loginMailError");
    var logPassError = document.querySelector("#loginPassError");

    if(poljeLoginEmail.value == ""){
        poljeLoginEmail.classList.add("error");
        logMailError.innerHTML = "You must enter your email!";

    }
    else{
        if(!reEmail.test(poljeLoginEmail.value)){
            logMailError.innerHTML = "The email is not in a correct format!";
            poljeLoginEmail.classList.add("error");
        }else{
            poljeLoginEmail.classList.remove("error");
            logMailError.innerHTML = "";
            podaci.push(poljeLoginEmail);
        }
    }

    if(poljeLoginPassword.value == ""){
        poljeLoginPassword.classList.add("error");
        logPassError.innerHTML = "You must enter your password!";

    }
    else{
        if(!rePassword.test(poljeLoginPassword.value)){
            logPassError.innerHTML = "The password is not in a correct format!";
            poljeLoginPassword.classList.add("error");
        }else{
            poljeLoginPassword.classList.remove("error");
            logPassError.innerHTML = "";
            podaci.push(poljeLoginPassword);
        }
        
    }

}