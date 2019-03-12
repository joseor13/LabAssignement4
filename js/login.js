var login = /** @class */ (function () {
    function login() {
    }
    login.prototype.login = function () {
        var usernameInput = document.getElementById('username');
        console.log('from login() usernameInput', usernameInput);
        var passwordInut = document.getElementById('password');
        var username = usernameInput.value;
        var password = passwordInut.Value;
        console.log('username', username);
        console.log('password', password);
        if (username === 'jose' && password === 'abc123') {
            this.goToHome();
        }
        else {
            this.displayError();
        }
    };
    login.prototype.displayError = function () {
        var errorBox = document.getElementById('error-box');
        errorBox.innerHTML = 'User Not Found;';
        console.log('errorBox.innerHTML', errorBox.innerHTML);
        errorBox.style = "display: block;";
    };
    login.prototype.goToHome = function () {
        window.location.href = 'home.html';
    };
    return login;
}());
var login = new login();
