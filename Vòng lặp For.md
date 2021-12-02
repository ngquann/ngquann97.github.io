### Vòng lặp For/in (duyệt Object)
- Thường sử dụng để lấy ra những **key** của đối tượng
- Ví dụ:
> var myInfo = {
    name: 'Quân',
    age: 24,
    add: 'Hà Nội',
}
> for (var x in myInfo) {
    //code
}

> - Có bao nhiêu **key** thì vòng for chạy bấy nhiêu lần và gán key dưới dạng **chuỗi**
> - Chạy với mảng hoặc chuỗi thì key sẽ ra **số**
>
### Vòng lặp For/of (duyệt Array)
- Sử dụng khi lấy ra phần tử của mảng hay từng chữ cái của chuỗi.
- **Không sử dụng thông thường với Object**
> Dùng Object.keys(...) hoặc Object.values(...)
- Cú pháp: 
> for(var value of ...)