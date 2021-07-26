var a = null,
    b = null,
    c = null,
    tinh = null
var bt = " ";

function toan_hang(x) {
    if (a == null)
        a = x
    else b = x;
}

function toan_tu(x) {
    tinh = x;
}

function thuc_hien() {
    switch (tinh) {
        case '+':
            var kq = parseInt(a) + parseInt(b);
            alert('tong = ' + kq);
            break;
        case '-':
            var kq = a - b;
            alert('hieu = ' + kq);
            break;
        case '*':
            var kq = a * b;
            alert('tich= ' + kq);
            break;
        case '/':
            var kq = a / b;
            alert('thuong= ' + kq);
            break;
        default:
            alert(tinh + 'khong phai toan tu ');
            break;
    }
}

function lam_lai() {
    a = null;
    b = null;
    tinh = null;
}