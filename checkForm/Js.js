const hople = () => {
    let username = document.getElementById('username');
    let age = document.getElementById('age');
    let address = document.getElementById('address');

    if (username.value == "") {
        username.focus;
        username.style.border = '1px solid red';
        return false;
    } else if (username.value.length < 8) {
        username.focus;
        username.style.border = '1px solid red'
        return false;
    } else {
        username.focus;
        username.style.border = '1px solid green'
    }

    if (age.value == "") {
        age.focus;
        age.style.border = '1px solid red'
        return false;
    } else if (age.value < 0) {
        age.focus;
        age.style.border = '1px solid red'
        return false;
    } else {
        age.focus;
        age.style.border = '1px solid green';
    }

    if (address.value == "") {
        address.focus;
        address.style.border = '1px solid red'
        return false;
    } else {
        address.focus;
        address.style.border = '1px solid green';
    }

    let chon = document.getElementById('rate');
    let rate_value
    if (chon.value == '1') {
        rate_value = document.getElementById('ch1').value;
        return true;
    } else if (chon.value == '2') {
        rate_value = document.getElementById('ch2').value;
        return true;
    } else {
        alert('chọn lại!!!');
        return false
    }
    // if (chon[0].checked || chon[1].checked) {
    //     document.write(user());
    //     alert('them thanh cong');
    //     return true;
    // } else {
    //     alert('vui long chon !!!');
    //     return false;
    // }
}

const user = () => {
    let username = document.getElementById('username');
    let age = document.getElementById('age');
    let address = document.getElementById('address');
    let chon = document.getElementsByName('ok');

    document.write('Họ và tên: ' + us + '</br>');
    document.write("Tuổi: " + a + '</br>');
    document.write("Địa chỉ: " + address.value + '</br>');
    document.write("Giới tính: " + ch + '</br>');

}