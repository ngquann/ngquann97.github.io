//Thêm label cho các trường username, password, confirm password (sử dụng thẻ label để thêm các tiêu đề tương ứng cho các ô input)



// Kiểm tra xem password và confirm pass có trùng nhau hay không
const userName = document.getElementById('username')
const passWord = document.getElementById('password')
const confirmPass = document.getElementById('confirmPassword')
const btn = document.getElementById('btn')


function validate() {
    let isTrue = true;

    if (userName.value.trim() == '' ) {
        alert('Xin nhap dung User name');
        isTrue = false
        
    }
    if(passWord.value !== confirmPass.value) {
        isTrue = false; 
        alert('Nhap sai mat khau xac nhan')
    }
     if (isTrue) {
         alert('Dang nhap thanh cong')
     }
}
btn.addEventListener('click',validate)


 // Đảm bảo nút ‘Đăng ký’ bị disable cho đến khi người dùng nhập dữ liệu hợp lệ vào tất cả các trường đầu vào.


// Sau khi nhập đầy đủ thì ‘Đăng ký’ được enable.



// Khi user nhập đủ thông tin hợp lệ và bấm vào nút submit thì tạo 1 hộp thoại thông báo đăng ký thành công