## Document Object Model (DOM)
### 1. Định nghĩa
> DOM là tiêu chuẩn được định nghĩa bởi W3C, được dùng để truy xuất và thao tác trên các tài liệu có cấu trúc dạng HTML hay XML bằng các ngôn ngữ lập trình thông dụng như Javascript, PHP…

> DOM được tổ chức theo dạng cây (DOM tree), mỗi thành phần trên cây gọi là một node, có 3 loại
>> - document node
>
>> - element node
>
>> - text node
>
### 2. Truy cập vào các phần tử của DOM
> - document.getElementById: truy nhập qua id
> - document.getElementByTagName: truy nhập qua tag name
> - document.getElementsByClassName: truy nhập qua class
> - document.querySelector & document.querySelectorAll: truy nhập qua bộ chọn CSS Selector
>
### 3. Quan hệ giữa các phần tử
> - parentNode: Node cha
> - childNodes: Các node con
> - firstChild: Node con đầu tiên
> - lastChild: Node con cuối cùng
> - nextSibling: Node anh em liền kề sau
> - previousSibling: Node anh em liền kề trước
>
### 4. Thao tác với các phần tử DOM
- Get/Set nội dung phần tử
> - innerHTML
> - innerText
> - textContent
>
- Tạo phần tử: document.creatElement([tagName])

- Thêm phần tử vào DOM:

> - parentNode.appendChild(newNode)
> - parentNode.prepend(newNode)
> - parentNode.insertBefore(newNode, referNode)
> - targetElement.insertAdjacentHTML(position, text)
> - targetElement.insertAdjacentElement(position, text)
> - targetElement.insertAdjacentText(position, text)

- Xóa phần tử:
> - parentNode.remove(childNode)

- Thay thế phần tử

> - parentNode.replace(newNode, oldNode)

- Thay đổi CSS

> - element.style.property = value