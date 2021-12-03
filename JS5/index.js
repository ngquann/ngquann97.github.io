// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.
function max2Numbers(arr) {
    // lấy ra 1 mảng đã sắp xếp
    let arrSort = arr.sort((a, b) => a - b);
    // lấy ra 1 mảng các số không trùng nhau từ mảng đã sắp xếp
    let newArr = arrSort.filter((value, index) => arrSort.indexOf(value) === index)
    // lấy ra kết quả là số có giá trị sau giá trị lớn nhất
    return newArr.filter(item => item === newArr[newArr.length - 2])
}
console.log(max2Numbers([2, 1, 4, 3, 4]))

// Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
function getStringHasMaxLength(arr) {
    return arr.sort((a, b) => b.length - a.length)[0];
}
console.log(getStringHasMaxLength(['aba', 'aa', 'adsada', 'c', 'vcd']))

// Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó
function getRandomElement(arr) {
    // Random index
    let index = Math.floor(Math.random() * arr.length)
    // Lấy ra phần tử có index được random
    return arr[index]
}
console.log(getRandomElement([3, 7, 9, 11]))

// Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó
function similarity (arr1, arr2) {
    // tạo 1 mảng rỗng
    let newArr = []
    // chạy vòng lặp for/of lấy ra value của mảng
    for (const element of arr1) {
        // xét điều điện nếu như phần tử mảng 1 có trong mảng 2 thì lấy ra phần tử đó cho vào mảng rỗng đã tạo
        if(arr2.includes(element)) {
            newArr.push(element)
        }
    }
    return newArr
}
console.log(similarity([1, 2, 3], [3, 4, 5]))

// Bài 5 (2 điểm). Viết function truyền vào 2 tham số:
// Tham số 1: Là 1 chuỗi thời gian (t) có dạng "giờ:phút:giây"
// Tham số 2: Là 1 số x <= 1000
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.
// Bài 6 (2 điểm). Cho mảng users như sau:
users = [
    {
        name : "Bùi Công Sơn",
        age : 30,
        isStatus : true
    },
    {
        name : "Nguyễn Thu Hằng",
        age : 27,
        isStatus : false
    },
    {
        name : "Phạm Văn Dũng",
        age : 20,
        isStatus : false
    }
]
// Viết function truyền vào 1 mảng các object user lấy ra những user có age > 25 và isStatus = true
function getValue (arr) {
    // dùng hàm filter lấy ra 1 mảng gồm các object thỏa mãn điều kiện đề bài
   const result = arr.filter((a, b) => {return a.age > 25 && a.isStatus == true })
   return result
}
console.log(getValue(users))
// Viết function truyền vào 1 mảng các object user. Hãy sắp xếp mảng users có age tăng dần
function isSucces(arr) {
    // dùng hàm sort đế sắp xếp theo chiều tăng dần
    let arrSort = arr.sort((a,b) => a.age - b.age);
    return arrSort
}
console.log(isSucces(users))

// Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
function getCountElement(arr) {
    const counts = {};

    for (const num of arr) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return
}
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]))
