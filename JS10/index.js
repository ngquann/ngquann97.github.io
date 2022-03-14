
Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        console.log('index:', index)
    }
}





var course = [
    'Javascript',
    'PHP',
    'Ruby'
];

course.forEach2(function(course, index, array) {
    console.log(course, index, array)
})