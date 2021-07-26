function Kiem_tra() {
    var x = prompt("Nhập giá trị: ");
    if (isNaN(x) == false) {
        alert(x + " là một số")
    } else {
        alert(x + " không phải là một số")
    }
    var x = prompt("Nhập giá trị: ");
    if (isNaN(x) == false) {
        alert(x + " là một số")
    } else {
        alert(x + " không phải là một số")
    }
}


function math() {
    var x = prompt("Nhập giá trị: ");
    if (isNaN(x) == false) {
        alert(x + " là một số")
    } else {
        alert(x + " ERRROR")
    }

    if (isNaN(x) == false) {
        alert(x + " là một số")
    } else {
        alert(x + " không phải là một số")
    }
    var a = Math.sqrt(x)
    alert("SQRT = " + a)
    var b = Math.pow(x, 2)
    alert("Pow = " + b)
    var c = Math.round(x)
    alert("Round = " + c)
}

function xep_loai() {

}

function ptb2() {
    var a = prompt("Nhập a= ");
    var b = prompt("Nhập b= ");
    var c = prompt("Nhập c= ");

    var delta = Math.pow(b, 2) - (4 * a * c);
    if (delta < 0) {
        alert("Vô nghiệm");
    } else if (delta == 0) {
        alert("Có nghiệm kép" + (-b / (2 * a)));
    } else {
        alert("Có 2 nghiệm phân biệt");
        alert("X1 = " + (-b + Math.sqrt(delta)) / (2 * a));
        alert("X2 = " + (-b - Math.sqrt(delta)) / (2 * a));
    }
}