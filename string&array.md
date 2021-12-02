## String Methods
### 1. String Length
Trả về độ dài của chuỗi
- Cú pháp:
> Str.length
>
### 2. Trích xuất 1 phần của chuỗi
 Có 3 cách để trích xuất 1 phần của chuỗi
 >- slice(start, end)
 >- substring(start, end)
 >- substr(start, length)

 ### - SLice(start, end):
 - Trích xuất 1 phần tử của chuỗi.
 - Trả về phần tử trích xuất trong 1 chuỗi mới.
 - Nhận 2 tham số là vị trí bắt đầu và vị trí kết thúc (có thể không cần vị trí kết thúc).
- Nếu không truyền tham số thứ 2 thì nó sẽ cắt đến cuối chuỗi.
 - Nếu tham số âm thì nó sẽ đếm từ cuối chuỗi.
>
### Substring(start, end):
- Giống với slice nhưng không nhận tham số có giá trị âm.
>
### Substr(start, length):
- Giống với slice
- Nhưng tham số thứ 2 chị định độ dài của phần tử được trích xuất.
>
### 3. Thay thế nội dung chuỗi
- Thay thế một giá trị được chỉ định bằng 1 giá trị khác trong chuỗi.
- Mặc đinh, replace chỉ thay thế giá trị đầu tiên tìm thấy.
- Phân biệt chữ in hoa, in thường.(dùng biểu thức chính quy **/i** để phân biệt).
- Cú pháp:
> str.replace()
>
- BTCQ thay thế tất cả các giá trị phù hợp:
> str.replace(/g,'')
>
### 4. Chuyển sang chữ in hoa, in thường
- Chuyển sang in hoa - cú pháp:
> str.toUpperCase()
- Chuyển sang in thường - cú pháp:
> str.toLowerCase()
>
### 5. Nối 2 hoặc nhiều chuỗi
- Cú pháp:
> str1.concat(str2)
>
**Tất cả các phương thức chuỗi đều trả về một chuỗi mới. Họ không sửa đổi chuỗi gốc. Nói một cách chính thức: Chuỗi là bất biến: Chuỗi không thể thay đổi, chỉ được thay thế.**
>
### 6. Loại bỏ khoảng trắng từ 2 đầu của chuỗi
- Cú pháp:
> str.trim()
>
### 7. Trích xuất các ký tự của chuỗi
- Có 3 phương pháp:
> - chartAt(position): trả về ký tự tại 1 vị trí được chỉ định trong chuỗi, nếu không có trả về chuỗi rỗng.
> - chartCodeAt(position):trả về mã unicode của ký tự tại 1 vị trí được chỉ định trong chuỗi, nếu không có trả về chuỗi rỗng.
> - str[index]: trả về ký tự có chỉ mục được chỉ định, không có trả về undefined
>
### 8. Chuyển 1 nội dung sang chuỗi
- Cú pháp:
content.toString()
>
### 9. Chuyển đổi chuỗi sang mảng
- Cú pháp:
> str.split()
>
### 10. Kiểm tra xem chuỗi có bắt đầu hoặc kết thúc bằng giá trị chỉ định (trả về true hoặc false)
- Cú pháp:
> - str.startsWith(searchValue, start): tham số 1 là giá trị chuỗi cần tìm, tham số 2 là vị trí bắt đầu nếu có.
> - str.endsWith(searchvalue, length): tham số 1 là chuỗi cần tìm. tham số 2 là độ dài của chuỗi cần tìm.
**Có phân biệt in hoa, in thường**
>
### 11. Kiểm tra một chuỗi có chứa chuỗi/ký tự được chỉ định không
- Cú pháp:
> - str.includes(searchvalue, start):
>> - Tham số 1: chuỗi cần tìm
>> - Tham số 2: vị trí bắt đầu tìm (mặc định không)
> - Trả về giá trị Boolean
>
### 12. Lặp lại 1 chuỗi
- Cú pháp:
> str.repeat(count): tham số chỉ định số lượng lặp lại
>
>
## Array Methods
### 1. Độ dài mảng
- Cú pháp:
> arr.length
>
### 2. Nối 2 hoặc nhiều mảng
- Cú pháp:
> arr1.concat(arr2)
>
### 3. Sao chép các phần tử mảng trong mảng, đến và từ các vị trí đã chỉ định
- Cú pháp:
> str.copyWithin(target, start, end):
>> Tham số 1: 
>
>
### 4. Biến mảng thành chuỗi
- Cú pháp:
> str.join()
>
### 5. Thêm phần tử vào mảng
- Cú pháp:
> - arr.push(element): Thêm vào cuối mảng và Trả về độ dài mảng mới
> - arr.unshift(element): Thêm vào đầu mảng và Trả về độ dài mảng mới
>
### 6. Loại bỏ phần tử trong mảng
- Cú pháp:
> - arr.pop(): Loại bỏ phần tử cuối mảng và trả về giá trị bị loại bỏ
> - arr.shift(): Loại bỏ phần tử đầu mảng và trả về giá trị bị loại bỏ
>
### 7. Truy nhập và thay đổi giá trị phần tử của mảng bằng chỉ mục 
- Cú pháp:
> arr[index]
>
### 8. Kiểm tra xem các phần tử trong mảng có vượt qua điều kiện cần kiểm tra
- Cú pháp:
> array.every(function(currentValue, index, arr), thisValue):
>> function(): Một hàm được chạy cho mỗi phần tử trong mảng.
>> currentValue: Giá trị của phần tử hiện tại.
>> index: chỉ mục của phần tử hiện tại.
>> arr: mảng của phần tử hiện tại
>
### 9. Tạo 1 mảng mới với các phần tử vượt qua điều kiện kiểm tra
- Cú pháp:
> array.filter(function(currentValue, index, arr), thisValue)

### 10. Trả về giá trị đầu tiên/ chỉ số đầu tiền của mảng vượt qua điều kiện kiểm tra
- Cú pháp:
> array.find(function(currentValue, index, arr),thisValue)
> array.findIndex(function(currentValue, index, arr),thisValue)
> - **Trả về dưới dạng giá trị - giá trị đầu tiên tìm thấy**
>
### 11. Gọi 1 hàm lặp qua các phần tử mảng
- Cú pháp:
> array.forEach(function(currentValue, index, arr),thisValue)
>
### 12. Kiểm tra xem một mảng có chứa phần tử được chỉ định hay không
- Cú pháp:
> arr.includes(element, start)
>
### 13. Tạo một mảng mới với kết quả của việc gọi 1 hàm cho mỗi phàn tử mảng ban đầu
map() được sử dụng khi muốn làm thay đổi giá trị của các phần tử trong mảng theo một logic nào đó. Logic được thể hiện dưới dạng một callback, giá trị trả về của callback sẽ là giá trị mới cho phần tử mảng tương ứng.
- Cú pháp:
> arr.map()
>
### 14. Sắp xếp các phần tử của mảng
- Cú pháp:
> arr.sort()
>
### 15. Nếu 1 phần tử trong mảng thỏa mãn điều kiện trả về true (trả về Boolean)
- Cú pháp:
> array.some()
> 
### 16. Tất cả phải thỏa mãn điều kiện. Chỉ 1 phần tử không thỏa mãn trả về false
- Cú pháp:
> array.every()
>
### 17. Gom các phần tử của mảng thành giá trị duy nhất
Cú pháp:
> array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

>> - function(total, currentValue, index, arr): Bắt buộc, là callback sẽ thực thi trên từng phần tử mảng.
total: Bắt buộc, là giá trị của tham số initialValue trong lần chạy đầu tiên, hoặc là giá trị trả về của callback này ở phần tử trước.
>> - currentValue: Bắt buộc, là giá trị của phần tử hiện tại
>> - index: Không bắt buộc, là vị trí của phần tử hiện tại.
>> - arr: Không bắt buộc, là mảng mà phần tử hiện tại thuộc về.
>> - initialValue: Không bắt buộc, là giá trị ban đầu cho biến total trong callback.
>
??
>
https://phambinh.net/bai-viet/lam-viec-voi-array-trong-javascript/#map