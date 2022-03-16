let products = [
    {
        id: 1,
        title: "Sản phẩm 1",
        des: "Mô tả 1",
        count: 1,
        price: 350000,
        image: "https://product.hstatic.net/1000406613/product/134598326_843943736438802_4583672680956729671_n_21c066c7bee9423294bd5d3ee02e9c64.jpg"
    },
    {
        id: 2,
        title: "Sản phẩm 2",
        des: "Mô tả 2",
        count: 1,
        price: 250000,
        image: "https://muaonlinevn.com/wp-content/uploads/2021/03/1914666_L.jpg"
    }
]

let promotionCode = {
    A : 10,
    B : 20,
    C : 30,
    D : 40
}
// Truy cập vào các thành phần
const productEL = document.querySelector('.products')
const optionContainer = document.querySelector(".option-container")
const countSpan = document.querySelector('.count')
const subTotalEl = document.querySelector('.subtotal span');
const vatEl = document.querySelector('.vat span');
const discount = document.querySelector('.discount');
const discountEle = document.querySelector('.discount span');
const totalEle = document.querySelector('.total span');
const btnPromotion = document.querySelector('.promotion button');
const inputPromotion = document.querySelector('#promo-code');


// Convert tiền
function convertMoney(numb) {
    return numb.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

// Hiển thị dữ liệu
function renderProduct(arr) {
    // Clear dữ liệu
    productEL.innerHTML = "";
    
    updateTotalItem(arr)

    updateTotalMoney(arr)

    if (arr.length == 0) {
        productEL.insertAdjacentHTML("afterbegin", `Không có sản phẩm nào trong giỏ hàng`);
        // Loại bỏ phần mã giảm giá và tính tiền
        optionContainer.style.display = "none"
        countSpan.innerText = `${updateTotalItem(arr)} items in the bag`
        return;
    }


    const html = arr.map(e => {
        return `
        <li class="row">
        <div class="col left">
            <div class="thumbnail">
                <a href="#">
                    <img src="${e.image}" alt="${e.title}">
                </a>
            </div>
            <div class="detail">
                <div class="name"><a href="#">${e.title}</a></div>
                <div class="description">
                    ${e.des}
                </div>
                <div class="price">${convertMoney(e.price)}</div>
            </div>
        </div>

        <div class="col right">
            <div class="quantity">
                <button class="btn-subtract" onclick="subtrackCount(${e.id})">-</button>
                <p>${e.count}</p>
                <button class="btn-add" onclick="addCount(${e.id})">+</button>
            </div>

            <div class="remove">
                <span class="close" onclick="removeProduct(${e.id})">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </span>
            </div>
        </div>
    </li>
        `
    })
    productEL.innerHTML = html.join('')
    countSpan.innerText = `${updateTotalItem(arr)} items in the bag`

}

// Update số lượng sản phẩm
function updateTotalItem(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        total += p.count;
    }
    return total;
}

// Xóa 1 sản phẩm
function removeProduct(id) {
    for (let i= 0; i < products.length; ++i) {
        if(products[i].id == id) {
            products.splice(i, 1)
        }
    }
    renderProduct(products)
   
}

// Bớt đi số lượng 1 sản phẩm
function subtrackCount(id) {
    for(let i =0; i < products.length; ++i) {
        if(products[i].id == id) {
            products[i].count--
            if(products[i].count == 0) {
                removeProduct(id)
                return;
            }
        }
    }
    renderProduct(products)   
}

// Add thêm số lượng sản phẩm
function addCount(id) {
    for(let i =0; i < products.length; ++i) {
        if(products[i].id == id) {
            products[i].count++
        }
    }
    renderProduct(products)  
    
}

// Tính tổng tiền
function updateTotalMoney(arr) {
    let subTotal = 0
    let discountMoney = 0
    arr.forEach(e => {
        subTotal += e.count * e.price
    
    });

    let data = checkCode()

    if (data) {
        discountMoney = (subTotal * data) / 100;
        discount.classList.remove('hide');
    } else {
        discount.classList.add('hide');
    }

    subTotalEl.innerText = convertMoney(subTotal) 
    vatEl.innerText = convertMoney(subTotal * 0.1)
    discountEle.innerText = convertMoney(discountMoney);
    totalEle.innerText = convertMoney(subTotal + subTotal * 0.1 - discountMoney)

}

function checkCode() {
    let value = inputPromotion.value;
    if (promotionCode[value]) {
        return promotionCode[value];
    } 
    return 0;
    
 }
 
btnPromotion.addEventListener('click', function() {
    updateTotalMoney(products)
})

renderProduct(products)