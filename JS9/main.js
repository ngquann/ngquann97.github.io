// Bài 1
// const btn = document.querySelector('button')
// btn.addEventListener('click', function() {

//     document.body.style.backgroundColor = randomRgbCode()
// })
// const randomRgbCode = () => {
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)
//     return ` rgb(${r},${g},${b}) ` 
// }

// Bài 2
// function randomColor () {
//     let hexColor = ""
//     let a = "ABCDEF1234567890"
//     for (let i = 0; i < 6; i++) {
//         let index = Math.floor(Math.random() * a.length)
//         hexColor += a[index]
//     }
//     return `#${hexColor}`
// }
// const btn = document.querySelector('button')
// const hexValue = document.getElementById('hex-value')
// btn.addEventListener('click', function() {
    // const color = randomColor()
//     hexValue.innerText = color
//     document.body.style.backgroundColor = color
// })

const quoteRandom = [
    {  
        author: "Quân",
        content: "Đừng bao giờ ăn kem trước cổng"
    },

    {
        author: "Quân",
        content: "Có làm thì mới có ăn"
    },

    {
        author: "Quân",
        content: "Không làm thì ăn đậu bắp, ăn cám"
    }
]

