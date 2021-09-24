/**
 * Number datatype
 * 
 * 1. Tạo giá trị number
 *  - cách tạo
 *      cách 1: 
 *          var age = 18;
 *      cách 2:
 *          var otherAge = new Number(9);
 *  - dùng cách nào
 *      cũng như giải thích string thì nên dùng cách 1
 *      vì: cách 2 rườm rà và cách 2 phải khởi tạo Object type chứ ko phải number type
 *  - kiểm tra datatype
 *         typeOf
 * 2. Làm việc vs Number
 *  - to string: convert sang string
 *  - to fixed: làm tròn số thập phân
 */
var result = 20/'ABC';
console.log("1. Example NaN: "+result); // -> NaN : kiểu số không hợp lệ
// vậy để kiểm tra 1 kết quả có hợp lệ nay ko ta sử dụng function isNaN()
// không thể sử dụng phép kiểm tra thông thường
console.log("1. Check result is NaN: "+isNaN(result));

result = 3.555555;
console.log("2. To String: "+result.toString());
// default làm tròn lên số nguyên, 3.5->4, 3.3->3
console.log("2. To Fixed: "+result.toFixed());
console.log("2. To Fixed: "+result.toFixed(1));
