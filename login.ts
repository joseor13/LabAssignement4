class login {

    constructor() {

    }
    login() {
        const usernameInput = document.getElementById('username');
        console.log('from login() usernameInput', usernameInput);
        
        const passwordInut = document.getElementById('password');
        
        let username = usernameInput.value;
        let password = passwordInut.Value;

        console.log('username', username);
        console.log('password', password);
    
      
        if(username === 'jose' && password === 'abc123') {
          this.goToHome();
      }else {
          this.displayError();
      }
    }
    displayError() {
        const errorBox = document.getElementById('error-box');
        errorBox.innerHTML = 'User Not Found;';
        console.log('errorBox.innerHTML',
        errorBox.innerHTML
        );
        errorBox.style = "display: block;";
    
    }
    goToHome () {
        window.location.href = 'home.html'
    }
}

const login = new login();