function ckUser(elementUser) {
    if (elementUser.value == "" || elementUser.value <= 8) {
        elementUser.focus();
        elementUser.style.outlineColor = "red"
        return false;
    }
    return true;
}

function ckPass(elementPass) {
    if (elementPass.value == "") {
        elementPass.focus();
        elementPass.style.outlineColor = "red";
        return false;
    }
    return true;
}

function ckRepass(elementRePass) {
    let pass = document.getElementById('password').value;
    if (elementRePass.value == "" || elementRePass.value != pass) {
        elementRePass.focus();
        elementRePass.style.outlineColor = 'red';
        return false;
    }
    return true;
}

function hople() {
    var user = document.forms[0].txtUser;
    var pass = document.forms[0].txtPass;
    var repas = document.forms[0].txtRepass;
    if (ckUser(user)) {
        if (ckPass(pass)) {
            if (ckRepass(repas)) {
                return true;
            }
        }
    }
    return false;
}