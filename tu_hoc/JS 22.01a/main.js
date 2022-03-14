let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]

const boxes = document.querySelector('.boxes')
const points = document.querySelector('.points')
const btn = document.getElementById('btn')



// Render số box = số lượng màu ra ngoài màn hình bằng javascript (5 box)
// Box được tạo bởi thẻ div, có class=“box”, background tương ứng với từng mã màu
function renderBox(arrayColors) {
    for(let i = 0; i < arrayColors.length; ++i) {
        const box = document.createElement('div')
        box.classList.add('box')
        box.style.backgroundColor = arrayColors[i]
        boxes.appendChild(box)

    }
}
renderBox(colors)


// Cập nhật số lượng total box trong thẻ <span> có class “points”
function renderPoint() {
    const boxs = document.querySelectorAll('.boxes .box')
    points.innerText = boxs.length

}
renderPoint()

// Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1
boxes.addEventListener('click', function(e){
    boxes.removeChild(e.target)
    renderPoint()
})


// Khi click vào nút “more box” thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors), đồng thời số lượng total box cũng tăng lên 5

btn.addEventListener('click', function(){
    renderBox(colors)
    renderPoint()
})