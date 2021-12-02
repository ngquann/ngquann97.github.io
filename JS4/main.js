const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

// 1. Viết function tính thứ hạng trung bình của cả lớp
function calcu(arr) {
    let total = 0
    for(let i = 0; i < arr.length; i++) {
        total += arr[i].grade
    }
    return total/arr.length
}

// 2. Viết function tính thứ hạng trung bình của nam trong lớp
function calcu1(arr1) {
    let total = 0
    let count = 0
    for (const element of arr1) {
        if (element.sex === 'M') {
            total += element.grade
            count += 1
        }
    }
    return total /count
}
console.log(calcu1(grades))

// 3. Viết function tính thứ hạng trung bình của Nữ trong lớp
function calcu2(arr2) {
    let total = 0
    let count = 0
    for (const element of arr2) {
        if (element.sex === 'F') {
            total += element.grade
            count += 1
        }
    }
    return total /count
}
console.log(calcu2(grades))

// 4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
function mHigher(arr) {
    let maleArray = arr.filter(a => a.sex === 'M')
    let newArray = maleArray.sort((a, b) => a.grade - b.grade)
    return newArray.filter(value => value.grade === newArray[newArray.length - 1].grade)
}

console.log(mHigher(grades))

// 5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
function mHigher(arr) {
    let maleArray = arr.filter(a => a.sex === 'F')
    let newArray = maleArray.sort((a, b) => a.grade - b.grade)
    return newArray.filter(value => value.grade === newArray[newArray.length - 1].grade)
}

console.log(mHigher(grades))
// 6. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
// 7. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
// 8. Viết function thứ hạng cao nhất của cả lớp
function mHigher(arr) {
       // Sắp xếp theo thứ hạng tăng dần
    let newArray = arr.sort((a, b) => a.grade - b.grade)
     // Lọc ra học viên cao nhất = giá trị index cuối cùng
    return newArray.filter(value => value.grade === newArray[newArray.length - 1].grade)
}

console.log(mHigher(grades))

// 9. Viết function thứ hạng thấp nhất của cả lớp
function mLower(arr) {
    // Sắp xếp theo thứ hạng tăng dần
    let newArray = arr.sort((a, b) => a.grade - b.grade)
    // Lọc ra học viên thấp nhất = giá trị index (0)
    return newArray.filter(value => value.grade === newArray[0].grade)
}

console.log(mLower(grades))

// 10. Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
function femaleList(arr) {
    return femaleSex = arr.filter(a => a.sex === 'F')
}
console.log(femaleList(grades))

// 11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
function sortName(arr) {
    return NameSort = arr.sort((a, b) => a.name.localeCompare(b.name))
}
console.log(sortName(grades))

// 12. Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
function sortGrade(arr) {
    return gradeSort = arr.sort((a, b) => b.grade - a.grade)
}
console.log(sortGrade(grades))

// 13. Viết function lấy ra học viên Nữ có tên bắt đầu bằng "J"
function checkJFirst(arr) {
    const femaleJ = femaleList(arr)
    return result = femaleJ.filter(value => value.name.startsWith('J'))
}
console.log(checkJFirst(grades))

// 14. Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
function top5 (arr) {
     let newArray = arr.sort((a, b) => a.grade - b.grade)
     return newArray.filter(value => value.grade >= newArray[newArray.length - 5].grade)
}
console.log(top5(grades))
