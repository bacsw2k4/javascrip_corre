const username = document.getElementById("username");
const password = document.getElementById("password");
const btnlogin = document.getElementById('btn-login');
btnlogin.addEventListener("click", (e) => {
    if (username.value === "hoidanit@gmail.com" && password.value === "123456") {
        alert("Đăng nhập thành công");

    } else {
        e.preventDefault();
        alert("Tài khoản hoặc mật khẩu sai");
        username.style.borderColor = "Red";
        password.style.borderColor = "Red";
    }
})
