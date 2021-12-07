const heading = document.getElementById('heading')
// console.log(heading);

const paras = document.getElementsByTagName('p')
console.log(paras)

Array.from(paras).map(ele => console.log(ele))

const parasClass = document.getElementsByClassName('para')
console.log(parasClass)

// Heading Selector
// const headingSelector = document.querySelector("#heading")
// console.log(headingSelector)

// const headingSelector1 = document.querySelector(".para")
// console.log(headingSelector1)

const para3 = document.querySelector(".para ~ p")
console.log(para3)

// const ul2 = document.querySelector("body > ul")
// console.log(ul2)

const li44 = document.querySelector(".box li:last-child")
console.log(li44)
const box = document.querySelector(".box")

// console.log(box.nextElementSibling)
// console.log(box.previousSibling)
// console.log(box.nextSibling)


console.log(heading.innerHTML)
console.log(heading.innerText)
console.log(heading.textContent)

const ul1 = document.querySelector(".box ul")
console.log(ul1)
console.log(ul1.innerHTML)
console.log(ul1.innerText)
console.log(ul1.textContent)

heading.innerHTML = "xin chào các cháu"
// heading.innerHTML = `<span style = "color:red"> xin chào các mày </span>`
// console.log(heading.innerHTML)
heading.style.color = "yellow";
heading.style.fontSize = "50px"


const paraNew = document.createElement('p')
paraNew.innerText = "new para đây"
// document.body.prepend(paraNew)
document.body.appendChild(paraNew)
document.body.insertBefore(paraNew, para3)

const li33 = document.querySelector('.box ul li:nth-child(3)')
console.log(li33)
const li55 = document.createElement('li')
li55.innerText = "Thẻ li 55"
li44.appendChild(li55)

const li33plus = document.createElement('li')
li33plus.innerText = "Thẻ li 33 plus"
li44.prepend(li33plus)

const link = document.createElement('a')
link.setAttribute('href', 'https://www.google.com.vn/')
link.innerText = 'Google.com'
link.target = '_blank'
document.body.insertBefore(link, box)