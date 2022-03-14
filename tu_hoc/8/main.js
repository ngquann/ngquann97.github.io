// Chức năng của web bán hang
/**
 * 1. Thay đổi số lượng sản phẩm trong giỏ
 * 2. Nhập mã giảm giá
 * 3. Xóa mặt hàng khỏi giỏ Hàng
 * 4. Hiển thị số lượng sản phẩm trong giỏ
 * 5. Tính tổng tiền giỏ hàng
 * 
 */

/**
 * // Đối tượng sản phẩm
 * - ID
 * - Tên
 * - Hình ảnh
 * - Mô tả
 * - Giá
 * - Số lượng
 */

// Mocup danh sách sản phẩm
const promotionCode = [
    {
        name: '80',
        value: 0.8
    },
    {
        name: '50',
        value: 0.5
    },
    {
        name: '30',
        value: 0.3
    },
    {
        name: '20',
        value: 0.2
    }
]

let products = [
    {
        id: 1,
        name: 'Quần Short Tennis Ergo',
        image: './images/image-1.jpg',
        desc: 'Quần short thể thao, 100% cotton',
        price: 250000,
        total: 2
    },
    {
        id: 2,
        name: 'Áo thun 3 Sọc thể thao Primeblue Designed To Move',
        image: './images/image-2.jpg',
        desc: 'Áo thun thoáng mát, thấm mồ hôi, thích hợp cho việc chơi thể thao',
        price: 400000,
        total: 1
    },
    {
        id: 3,
        name: 'Áo Khoác WIND.RDY Back to Sport',
        image: './images/image-3.jpg',
        desc: 'Áo khoác gió, mặc rất ấm',
        price: 700000,
        total: 2
    }
]

// Render sản phẩm

const productsElement = document.querySelector('.products') // Trỏ đến thẻ ul đang ôm list các sản phẩm
const count = document.querySelector('.count') // Trỏ đến phần hiển thị có bao nhiêu sản phẩm trong giỏ
const optionContainer = document.querySelector('.option-container') // Trỏ đến phần ôm mã giảm giá và tính tiền
// const summary = document.querySelector('.summary')
const subtotal = document.querySelector('.subtotal span') // Trỏ đến phần hiển thị tổng giá tiền chưa giảm giá
const vat = document.querySelector('.vat span') // Trỏ đến phần hiển thị tiền giảm giá
const total = document.querySelector('.total span') //Trỏ đến phần hiển thị tổng giá tiền đã giảm giá
const inputs = document.querySelectorAll('.quantity input') // Trỏ đến ô input thay đổi số lượng sản phẩm

const promoCodeInput = document.querySelector('#promo-code') // Trỏ đến phần của mã giảm giá
const buttonPromocode = document.querySelector('button') // Trỏ đến ô button sau khi nhập mã giảm
const discount = document.querySelector('.discount') // Trỏ đến phần số tiền được discount bên tính toán
const discountValue = document.querySelector('.discount span') // Trỏ đến phần hiển thị số tiền được discount bên tính toán
discountValue.innerText = 0 // Cho phần hiển thị giá trị tiền giảm giá về bằng không
let codeValue = 0


function renderProduct(arr) {
    productsElement.innerHTML = ''

    if (arr.length == 0) {
        productsElement.innerHTML = 'Không có sản phẩm nào trong giỏ hàng'
        count.innerText = arr.length + 'items in the bag'
        optionContainer.innerHTML = ''
        return
    }
    count.innerText = `${arr.length} items in the bag`
    
    arr.forEach(product => {
        productsElement.innerHTML += `
        <li class="row">
                    <div class="col left">
                        <div class="thumbnail">
                            <a href="#">
                                <img src="${product.image}" alt="${product.name}">
                            </a>
                        </div>
                        <div class="detail">
                            <div class="name"><a href="#">${product.name}</a></div>
                            <div class="description">
                                ${product.desc}
                            </div>
                            <div class="price">${product.price}</div>
                        </div>
                    </div>
    
                    <div class="col right">
                        <div class="quantity">
                            <input type="number" class="quantity" value="${product.total}"
                            onchange = 'changeTotalProduct(${product.id}, event)'>
                        </div>
    
                        <div class="remove" onclick= "deleteProduct(${product.id})">
                            <span class="close">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </li>
        `
    })
}
renderProduct(products)

function deleteProduct(id) {
    // Duyệt mảng để tìm sản phẩm cần xóa
    products.forEach((product, index) => {
        if(product.id == id) {
            products.splice(index,1)
            renderProduct(products)
        }
    })
}

function changeTotalProduct(id, event) {
    let newQuantity = event.target.value

    if (newQuantity < 0) {
        alert('Nhập số lượng > 0')
        renderProduct(products)
        return
    }

    if(newQuantity == 0) {
        deleteProduct(id)
    }

    products.forEach(product => {
        if(product.id === id) {
            product.total = newQuantity
        }
    })

    renderProduct(products)
}



