const users = [
    {
        name: 'tý',
        quote: 'Chúng mày tuổi tý',
        image: 'https://randomuser.me/api/portraits/men/41.jpg',
        color: 'green'
    },
    {
        name: 'mão',
        quote: 'Chúng mày tuổi mèo',
        image: 'https://randomuser.me/api/portraits/women/50.jpg',
        color: 'blue'
    },
    {
        name: 'dần',
        quote: 'Chúng mày tuổi dần',
        image: 'https://randomuser.me/api/portraits/women/22.jpg',
        color: 'red'
    },
    {
        name: 'thìn',
        quote: 'Chúng mày tuổi thìn',
        image: 'https://randomuser.me/api/portraits/women/76.jpg',
        color: ' yellow'
    },
    {
        name: 'sửu',
        quote: 'Chúng mày tuổi sửu',
        image: 'https://randomuser.me/api/portraits/men/17.jpg',
        color: 'violet'
    }
]

const body = document.querySelector('body')
const data = document.querySelector('.testimonials-container')
const img = document.querySelector('.authors-container')



function getValue (a) {
    var html = a.map(user => {
        return `
        <div class="testimonials-container" style="display:none">
            <i class="fas fa-quote-left"></i>
    
            
            <p class="text">${user.quote}</p>
    
            
            <strong class="name">${user.name}</strong>

    
        </div>     
        `
    })
    body.innerHTML = html.join('')
    

}

getValue(users)


