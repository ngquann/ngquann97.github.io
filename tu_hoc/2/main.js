const cong = document.querySelector('.nextBtn')
const tru = document.querySelector('.prevBtn')
const value = document.getElementById('counter')

function changeColor(a) {
  
    if(a > 0) {
        value.style.color = 'green'
    } else if (a == 0) {
         value.style.color = '#333333'
    } else {
        value.style.color = 'red'
    }
}

cong.addEventListener('click', () => {
   ++value.innerText
   changeColor(value.innerText)
})

tru.addEventListener('click', () => {
   --value.innerText
   changeColor(value.innerText)
})

