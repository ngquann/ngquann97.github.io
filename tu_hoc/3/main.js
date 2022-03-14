const pElement = document.querySelector('p')
const array = pElement.innerText.split('')



const newArray = array.filter(arr => arr != '.' && arr != ',' && arr != '!' && arr != '?')

const value = newArray.join('').split(' ')
console.log(value)

const array8 = value.filter(item => item.length >= 8)

function changeColor(item) {
    let index = pElement.innerHTML.indexOf(item)
    if (index >= 0) {
        pElement.innerHTML =
            pElement.innerHTML.slice(0, index) +
            '<span class="highlight">' +
            pElement.innerHTML.slice(index, index + item.length) +
            '</span>' +
            pElement.innerHTML.slice(index + item.length)
    }

}

array8.forEach((item) => {
    changeColor(item);
});

// const link = document.createElement('a')
// link.href = 'https://www.facebook.com/'
// link.innerText = 'Vao fb'
// pElement.appendChild(link)

// const div = document.createElement('div')
// div.innerText = 'Đoạn văn có tổng ký tự là: ' + value.length
// pElement.appendChild(div)

// pElement.innerHTML = pElement.innerHTML.replaceAll('?', '🤔' )
// pElement.innerHTML = pElement.innerHTML.replaceAll('!', '😲' )