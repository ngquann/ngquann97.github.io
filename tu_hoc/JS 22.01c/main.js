// Thêm class “table-bordered” cho <table>
const table = document.querySelector('.table')
table.classList.add('table-bordered')
// Thêm class “bg-dark” cho <tr> đầu tiên
const tr1 = document.querySelector('tbody > tr')
tr1.classList.add('bg-dark')

// Thêm 1 hàng mới trong table với nội dung như sau : ‘Sean Reyes’ (@sreyes)
const trNew = document.createElement('tr')
trNew.innerHTML = `<tr>
    <td>6</td>
    <td>Sean</td>
    <td>Reyes</td>
    <td>@sreyes</td>
</tr>`
table.appendChild(trNew)
// Cập nhật “Leona Dixon’s handle” thành “@dixonl” (hàng 3 - cột Handle)
const leona = document.querySelector('tbody tr:nth-child(4) td:last-child')
leona.innerText = '@dixonl'

// Di chuyển “Rosa Reed” lên đầu bảng và đảm bảo tất cả các mục nhập số trong cột đầu tiên được cập nhật tương ứng.

// Đổi chỗ 2 cột “First” và “Handle” cho nhau

// Các row có index là số lẻ ( trừ hàng tiêu đề cột )thì có background = “#f2f2f2”