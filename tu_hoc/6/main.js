// Cho mảng màu:

// javascript let colors = [ '#3498db', '#9b59b6', '#e74c3c', '#2c3e50', '#d35400', ]

// Yêu cầu

// - Render số box = số lượng màu ra ngoài màn hình bằng js (5 box)

// box được tạo bởi thẻ div, có class="box", background tương ứng với từng mã màu

// Cập nhật số lượng total box trong thẻ có class "points"

// Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1

// Khi click vào nút "more box" thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors), đồng thời số lượng total box cũng tăng lên 5

let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];
const boxes = document.querySelector('.boxes')
const points = document.querySelector('.points')
const moreBoxes = document.querySelector('#btn')

// Tạo hàm in ra 1 box tùy theo màu

function setBox(color) {
    const div = document.createElement('div')
    div.classList.add('box')
    div.style.backgroundColor = color
    boxes.appendChild(div)
    div.addEventListener('click', () => {
        boxes.removeChild(div)
        const box = document.querySelectorAll('.box')
        points.innerText = box.length
    })
}
function set5box(arr) {
    for(let color of arr) {
        setBox(color)
    }

}

moreBoxes.addEventListener('click', () =>{
    set5box(colors)
    const box = document.querySelectorAll('.box')
    points.innerText = box.length
})
