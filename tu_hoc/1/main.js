// let p = document.getElementById('text')
// p.style.backgroundColor = '#777'
// p.setAttribute('font-size', '2rem')
// p.innerHTML = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.'

// let li = document.getElementsByTagName('li')
// for (var key in li ) {
//     li[key].style.color = 'blue'
// }

// let item8 = document.createElement('li')
// item8.innerText = 'Item 8'
// let item9 = document.createElement('li')
// item9.innerText = 'Item 9'
// let item10 = document.createElement('li')
// item10.innerText = 'Item 10'
// let item4plus = document.createElement('li')
// item4plus.innerText = 'Item 4plus'


let ul = document.getElementById('list')
// let li1 = ul.querySelector('li:first-child')
// let li3 = ul.querySelector('li:nth-child(3)')
// let li4 = ul.querySelector('li:nth-child(4)')
// let li5 = ul.querySelector('li:nth-child(5)')


// li1.style.color = 'red'
// li3.style.backgroundColor = 'blue'
// ul.removeChild(li4)
// ul.insertBefore(item4plus, li5)


const add = document.createElement('button')
add.innerText = "Add"
add.type = 'button'

const input = document.createElement('input')
input.placeholder = "Input đê"
input.type = 'text'

ul.insertAdjacentElement("afterend", add)
ul.insertAdjacentElement("afterend", input)

// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)
add.addEventListener('click', function(e) {
    const value = input.value.trim()
    if (value == '') {
        alert('Nhập tử tế cho bố mày xem nào')
    } else {
        const li = document.createElement('li')
        li.textContent = value
        ul.appendChild(li)
    }

    input.value = ''
    input.focus()
})


// Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul

const remove = document.createElement('button')
remove.innerText = "xóa đây"
add.insertAdjacentElement('afterend', remove)

remove.addEventListener('click', () => {
    const lastLi = document.querySelector('#list li:last-child')
    if (lastLi) {
        ul.removeChild(lastLi)
    }
})

// Thêm 1 nút Hide trên đầu của danh sách ul


// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
const hide = document.createElement('button')
hide.innerText = "HIDE đi"
ul.insertAdjacentElement('beforebegin', hide)

hide.addEventListener('click', () => {
    if (hide.innerText == "HIDE đi") {
        ul.style.display = 'none'
        hide.innerText = "Show đi"
    } else {
        ul.style.display = 'block'
        hide.innerText = "HIDE đi"
    }

})

// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide
