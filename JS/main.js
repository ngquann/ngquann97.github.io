// Tìm số lớn nhất trong mảng
function array(a) {
    let x = a[0]
    for (let i = 0; i < a.length; i++) {
        if (a[i] > x) {
            x = a[i]
        }
    }
    return x;
}
console.log(array([1, 2, 3, 4, 5]))
// Tìm số nhỏ nhất trong mảng
function array1(a) {
    let y = a[0]
    for (let i = 0; i < a.length; i++) {
        if (a[i] < y) {
            y = a[i]
        }
    }
    return y;
}
console.log(array1([1, 2, 3, 4, 5]))

// Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số
// dư tương ứng khi chia mảng cũ cho 2
// Vd : [4,2,5,6,2,7] => [0,0,1,0,0,1]
function array3(a) {
    let b = [];
    for (let i = 0; i < a.length; i++) {
        let c = a[i] % 2;
        b.push(c)
    }
    return b
}
console.log(array3([2, 43, 45, 23]))
// Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
function repeatString(str) {
    let string = []
    for (let i = 0; i <10; i++) {
        string.push(str)
    }
    return string.join('')
}
console.log(repeatString('a'))
// Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu
// gạch ngang.
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'
function repeatString1(str) {
    let string = []
    for (let i = 0; i <10; i++) {
        string.push(str)
    }
    return string.join('-')
}
console.log(repeatString1('a'))
