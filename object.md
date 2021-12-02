# Object
- Là một tập hợp các thuộc tính (property) và phương thức (methods)
- Thuộc tính bao gồm các cặp khóa - giá trị chứa tên và giá trị.
>
Có 3 cách khai báo:
> - Sử dụng từ khóa {}
>> const dog = { }
> - Sử dụng từ khóa new Object()
>> const cat = new Object();
> - Sử dụng phương thức static
>> const horse = Object.create({ })
>
**Thêm 1 cặp key - value ở ngoài**
> objectname.key = 'value'
>
**Lấy 1 value ra ngoài**
> console.log(objectname.key)
> Sử dụng dấu [] để thêm key và value 1 biến bên ngoài
>
**Xóa 1 cặp key-value**
Bằng từ khóa delete.objectname.key
>
## This trong Object
Trỏ đến đối tượng thực hiện trong ngữ cảnh hiện tại
>
## Các phương thức trong Object
### Obkect.hasOwnProperty(""): trả về Boolean
- Dùng để kiểm tra 1 key có tồn tại trong Object không.
