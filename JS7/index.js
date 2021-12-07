// Câu 1. Tạo 1 thẻ p có id="text", có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu
const para = document.querySelector('#text')
 
// Đặt màu văn bản thành #777
para.style.color = '#777'

// Đặt kích thước phông chữ thành 2rem
para.style.fontSize = '2rem'

// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
para.textContent = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.'

// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
const liElements = document.querySelectorAll('li')
liElements.forEach(li => li.style.color = 'blue')

// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
// Sử dụng javascript để thực hiện những công việc sau
/* <ul id="list">
   <li>Item 1</li>
   <li>Item 2</li>
   <li>Item 3</li>
   <li>Item 4</li>
   <li>Item 5</li>
   <li>Item 6</li>
   <li>Item 7</li>
</ul> */

// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const addLi = document.querySelector('#list')
for (let  i = 8; i<= 10; i++) {
    let li = document.createElement('li')
    li.innerText = `Item ${i}`
    addLi.appendChild(li)
}

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
addLi.firstElementChild.style.color = 'red'

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const li3 = addLi.querySelector(':nth-child(3)')
li3.style.backgroundColor = 'blue'
console.log(li3);

// Remove thẻ <li> 4
const li4 = addLi.querySelector(':nth-child(4)')
addLi.removeChild(li4)

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const newLi = document.createElement('li')
newLi.innerText = "Replace item"
console.log(newLi);
li3.insertAdjacentElement("afterend", newLi)
console.log(addLi);