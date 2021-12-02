// Bài 1: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?
// checkElementExist([1,2,3,4,5], 5) => true
// checkElementExist([1,2,3,4,5], 6) => false
const checkElementExist = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        let x = a.join('')
        if (x.indexOf(b) != -1) {
            return true
        }
    }
    return false
}
console.log(checkElementExist([1, 2, 3, 4, 5], 6))
// Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào
// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []
const getElementGreater = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        let x = [];
    
    }
    
}
    getElementGreater([1, 2, 3, 4, 5], 3)
// Bài 3: Viết function để tạo mã màu HEX ngẫu nhiên.
// randomHexCode() => #728a98
// randomHexCode() => #a72938

// Bài 4: Viết function để tạo mã màu RGB ngẫu nhiên.
// randomRgbCode() => rgb(213,43,133)
// randomRgbCode() => rgb(12,32,122)
const randomRgbCode = () => {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return ` rgb(${r},${g},${b}) ` // teamplate string
}
console.log(randomRgbCode())