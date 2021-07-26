var zname = document.getElementById('z-name');
var zemail = document.getElementById('z-name');
var zphone = document.getElementById('z-name');
var zkhoahoc = document.getElementById('z-name');
var zprice = document.getElementById('z-name');

function ckName(elementName) {
    let regaxN = "[0-9]"
    if (elementName.value.match(regaxN) || elementName.value == "") {
        elementName.focus();
        elementName.style.outlineColor = "red";
        return false;
    }
    return true;
}

function ckSDT(elementSDT) {
    let regax = '^0[0-9]{9}$'
    if (!elementSDT.value.match(regax) || elementSDT.value == "") {
        elementSDT.focus();
        elementSDT.style.outlineColor = "red";
        return false;
    }
    return true;
}

function ckHocPhi(elementHocPhi) {
    if (elementHocPhi.value == "" || elementHocPhi.value < 0) {
        elementHocPhi.focus();
        elementHocPhi.style.outlineColor = "red";
        return false;
    }
    return true;
}

function ckKhoaHoc(elementKhoHoa) {
    if (elementKhoHoa.value == "") {
        alert("Khong duoc de rong");
        elementKhoHoa.style.outlineColor = "red";
        return false;
    }
    return true;
}

function chkEmail(elementEmail) {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!elementEmail.value.match(regex)) {
        elementEmail.focus();
        elementEmail.style.outlineColor = "red";
        return false;
    }
    return true;
}

function hople() {
    var name = document.forms[0].txtName;
    var email = document.forms[0].txtEmail;
    var sdt = document.forms[0].txtPhone;
    var hocPhi = document.forms[0].txtPrice;
    var khoahoc = document.forms[0].txtKhoahoc;
    if (ckName(name)) {
        if (chkEmail(email)) {
            if (ckSDT(sdt)) {
                if (ckKhoaHoc(khoahoc)) {
                    if (ckHocPhi(hocPhi)) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}