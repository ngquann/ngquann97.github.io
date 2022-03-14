// 1. Thêm 3 job bổ sung vào phần 'job' của trang bằng cách sao chép 'job-card' ban đầu.
const job = document.querySelector('.jobs')
const jobcard = document.querySelector('.job-card')
const jobcard1 = jobcard.cloneNode(true)
const jobcard2 = jobcard.cloneNode(true)
const jobcard3 = jobcard.cloneNode(true)

job.appendChild(jobcard1)
job.appendChild(jobcard2)
job.appendChild(jobcard3)

// 2. Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
jobcard1.querySelector('h3').innerText = 'JavaScript Developer'
jobcard2.querySelector('h3').innerText = 'Java Developer'
jobcard3.querySelector('h3').innerText = 'Python Developer'

// 3. Cập nhật Jobs listed thành tổng số công việc hiện có trong trang
const jobcardAll = document.querySelectorAll('.job-card')
document.querySelector('#jobs-listed span').innerText =  jobcardAll.length

// 4. Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi
const search = document.getElementById('search')
console.log(search.value)
const titleFind = document.querySelectorAll('.job-card h3')

search.addEventListener('input', function(e) {
    let inputText = e.target.value.toLowerCase()
    
    titleFind.forEach(valueTitle => {
        const parent = valueTitle.closest('.job-card')
        if (valueTitle.innerText.toLowerCase().includes(inputText)) {
            parent.classList.remove('hide')
        } else {
            parent.classList.add('hide')

        }
        
    })
})

// 5. Bấm vào Nút "All jobs" để reset ô tìm kiếm và hiển thị ra tất cả các công việc
const showAll = document.getElementById('show-all')

showAll.addEventListener('click', () => {
    search.value = ''
    jobcardAll.forEach(a => {
        a.classList.remove('hide')
    })
})