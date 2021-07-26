const check = () => {
    var data = new Array();
    data[0] = document.getElementById('name').value;
    data[1] = document.getElementById('email').value;
    data[2] = document.getElementById('password').value;
    data[3] = document.getElementById('cpassword').value;

    var myerror = new Array();
    myerror[0] = "<span style='font-weight:bold'>Bạn chưa nhập tên</span>";
    myerror[1] = "<span style='font-weight:bold'>Bạn chưa nhập email</span>";
    myerror[2] = "<span style='font-weight:bold'>Bạn chưa nhập mật khẩu</span>";
    myerror[3] = "<span style='font-weight:bold'>Mật khẩu chưa khớp</span>";

    var nearby = new Array("z-name", "z-email", "z-password", "z-cpassword");
    for (var i = 0; i < myerror[3]; i++) {
        var error = myerror[i];
        var div = nearby[i];
        if (data[i] == "") {
            document.getElementById(div).innerHTML = error;
        } else {
            document.getElementById(div).innerHTML = "OK!";
        }
    }

    let n = /\d/;
    if (isNaN(data[0]) == false || data[0].match(n)) {
        document.getElementById('z-name').innerText = 'nno!!'
        return false;
    }
    document.getElementById('z-name').innerText = 'ok!!'
    return true;

}


const checkEmail = () => {
    var email = document.getElementById('email').value;
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(regex)) {
        document.getElementById('z-email').innerHTML = ('Example@gmail.com');
        email.focus();
        return false;
    } else {
        document.getElementById('z-email').innerHTML = ('OK!');
    }
}


const checkPassword = () => {
    var pw = document.getElementById("password").value;
    var cfpw = document.getElementById("cpassword").value;

    if (cfpw == pw) {
        document.getElementById('z-cpassword').innerHTML = "Mật khẩu đã khớp";
    } else {
        document.getElementById('z-cpassword').innerHTML = "Mật khẩu chưa khớp";
    }
}