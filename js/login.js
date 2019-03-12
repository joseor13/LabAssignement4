var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.login = function () {
        var usernameInput = document.getElementById('username');
        console.log('from login() usernameInput', usernameInput);
        var passwordInut = document.getElementById('password');
        var username = usernameInput.value;
        var password = passwordInut.value;
        console.log('username', username);
        console.log('password', password);
        if (username === 'jose' && password === '123abc') {
            this.goToHome();
        }
        else {
            this.displayError();
        }
    };
    Login.prototype.displayError = function () {
        var errorBox = document.getElementById('error-box');
        errorBox.innerHTML = 'User Not Found!';
        console.log('errorBox.innerHTML', errorBox.innerHTML);
        errorBox.style = "display: block;";
        var interval = setInterval(function () {
            errorBox.style = "display: none;";
            clearInterval(interval);
        }, 5000);
    };
    Login.prototype.goToHome = function () {
        window.location.href = 'home.html';
    };
    return Login;
}());
var login = new Login();
