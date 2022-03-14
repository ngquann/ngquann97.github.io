document.addEventListener('keydown', function(event){
    // console.log('event')
    if (event.keyCode == 13) {
        console.log('Ối giời ơi')
    } else {
        console.log('Ối làng ơi')
    }
})
// document.addEventListener('keypress', function(event){
//     console.log('event')
// })
// document.addEventListener('keyup', function(event){
//     console.log('event')
// })

// SỰ KIỆN SCROll
const btn = document.getElementById('btn')
window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 300) {
        btn.classList.remove('hide')
    } else {
        btn.classList.add('hide')
    }
})

// Nhấn nút Top quay về đầu trang
btn.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})