// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.
const sortStudents = ['Nam', 'Hoa', 'Tuấn','Đức', 'Dũng'];
const result = sortStudents.sort((a, b) => b.localeCompare(a) );
console.log(result);

// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const shuffled = list.sort(() => Math.random() - 0.5)
console.log(shuffled)

// Bài 3: Viết function để lấy phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
const arr1 = [1, 2, 3, 5]
const arr2 = [1, 2, 4, 3]

function symmetricDifference(arr1, arr2) {
    let newArr = []
    for (var element of arr1) {
        if(!arr2.includes(element)) {
            newArr.push(element)
        }
    }
    for (var element of arr2) {
        if(!arr1.includes(element)) {
            newArr.push(element)
        }
    }
    return newArr
}


// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]
// Cach 1:
function union(a, b) {
    var ArrRong = []
    var newArr = a.concat(b)
    for (var i = 0; i < newArr.length; i++) {
      if (ArrRong.indexOf(newArr[i]) === -1) {
        ArrRong.push(newArr[i])
      }
    }
    return ArrRong
  }
  console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]))
 
// Cach 2
var arrFilter = newArray.filter((item, index) => newArray.indexOf(item) === index);
console.log(arrFilter)