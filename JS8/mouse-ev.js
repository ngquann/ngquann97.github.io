// document.addEventListener('mousedown', function(){
//     console.log('Mousedown')
// })
// document.addEventListener('mouseup', function(){
//     console.log('Mouseup')
// })
// document.addEventListener('mousemove', function(){
//     console.log('Mousemove')
// })
document.addEventListener('mousemove', function(event){
    // xóa hết hình trong đi sau đó mới tạo
    const boxes = document.querySelectorAll('.box')
    Array.from(boxes).map(box => document.body.removeChild(box))
    // tạo thẻ div
    const box = document.createElement('div')
    // thêm class box vào thẻ div vừa tạo
    box.classList.add('box')
    // gắn vào DOM
    document.body.appendChild(box)
    // cập nhật vị trí tại nơi ấn chuột
    box.style.top = `${event.offsetY - 50}px`;
    box.style.left = `${event.offsetX - 50}px`;


    console.log(event)
})

