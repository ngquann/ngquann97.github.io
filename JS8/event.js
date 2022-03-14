// btn-1
function sayHello() {
    alert("Xin chào các cháu")
}

// btn-2
const btn2 = document.getElementById("btn-2");
btn2.onclick = function() {
    alert('Xin chào con con')
} 

// btn-3
const btn3 = document.getElementById('btn-3')
btn3.addEventListener('click', function() {
    alert('Xin chào các mày')
})