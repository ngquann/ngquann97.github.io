# CÚ PHÁP TRONG ES6
### 1. Let/const
So sánh Var/Let, Const:
- Đều có thể dùng khai báo và gán giá trị cho biến.
- Phạm vi truy cập biến (Scope) trong Code block: if else, loop, {}, ... khác nhau.
- Khác nhau về hosting(var được hỗ trợ, let/const thì không).
- Không thể sử dụng toán tử gán lần 2 cho **const** (var và let thì được).
>
### 2. Template string
Dùng dấu **backtick** để nối chuỗi.
VD: 
> let name = "Quân";
> let intro = ` Tôi là ${name}
> console.log(intro) => Tôi là Quân
>
### 3. Default parameter
> Default Parameter là giá trị mặc định của tham số khi truyền vào các function.
>
### 4. Spread operator
> Có syntax là dấu 3 chấm **...**
>
Spread Operator cho phép chuyển đổi một chuỗi thành nhiều argument (trong trường hợp gọi với hàm) hoặc thành nhiều phần tử (cho array). Thêm vào nữa nó cũng cho phép làm nhiệm vụ destructure.
- Tác dụng:
> - Sao chép mảng hoặc object.
> - Nối các mảng hoặc các object.
> - **Không thể làm array và object với nhau**
>> - let obj = {a:1, b:2, c:3} 
>> - let copy = [...obj] // this won't work!
>
### 5. Rest Parameter
Có thể khai báo một hàm với số lượng tham số không xác định.
>Để khai báo các tham số còn lại của một function thì bạn đặt dấu 3 chấm **...** trước biến đại diện.
> - let functionName = (param1, param2, ...other) => {
    //
}
>
> Trường hợp tham số truyền vào vừa đủ thì Rest Parameter sẽ có giá trị là một mảng rỗng => [ ]
>
### 6. Arrow function
- Dùng viết hàm ngắn gọn và dễ hiểu hơn, thêm 1 dấu arrow **=>** trong hàm.
- Cú pháp với nhiều tham số:
> - ES5:
var multiTestEs5 = function(a, b) {
return a * b;
};
> - ES6:
const multiTestEs6 = (a, b) => { return a * b };
>
- Cú pháp với 1 tham số:
> - ES5:
var x = function y(thamsố) {
return tham số.split(' ');
};
> - ES6:
const m = thamsố => thamsố.split(" ");
console.log(m("Nóng Lạnh"));  => Kết quả: ["Nóng", "Lạnh"]