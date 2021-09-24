/**
 * ARRAY
 */

// chú ý: 
// - đặt tên là số nhiều
// - có thể chứa nhiều loại khác nhau
var languages = [
    'javascript',
    'JS',
    'JAVA',
    null,
    undefined,
    function(){

    },
    {},
    3
];

var languages1 = new Array(
    'javascript',
    'JS',
    'JAVA',
);
// nếu thực hiện in như sau, array se tự convert sang String do sd +
console.log("1. Print array: "+languages1);
console.log(languages1);

console.log("2. check datatype of arr: "+typeof languages); // object
console.log("2. check datatype of arr: "+typeof languages1); // object

// nếu cần phải kiểm tra đó có thực sự là array hay ko, thì ta sd Array.isArray()
console.log("2. check is array: "+Array.isArray(languages)); // true -> chính là array
console.log("2. check not array: "+Array.isArray({})); // false -> chính là object

console.log("3. Length Array: "+languages.length);
console.log("4. get element in array: "+languages[1]);

var myArr = ["1", "2", 3, 4];
// convert sang String, các element cách nhau bằng dấu ","
console.log("5. convert arr to string: "+myArr.toString());
// nối chuỗi
console.log("6. combine string: "+myArr.join('-'));
console.log("6. combine string: "+myArr.join(', '));

// Lấy và xóa phần tử cuối mảng
console.log("7. pop: "+myArr.pop());
console.log("7. after pop: "+myArr.toString());
// CHÚ Ý:::::::::::::::::::::::
// Nếu pop/shift xóa hết element trong mảng thì lần xóa tiếp theo sẽ trả về undefine
// console.log("7. pop: "+myArr.pop());
// console.log("7. pop: "+myArr.pop());
// console.log("7. pop: "+myArr.pop());
// console.log("7. pop: "+myArr.pop());
// console.log("7. pop: "+myArr.pop());
// console.log("7. pop: "+myArr.pop());
// console.log(myArr);

// Thêm 1/nhiều ptu vào cuối mảng, và trả về length arr
console.log("8. push: "+myArr.push("NoSQL", "PHP"));
console.log("8. after push: "+myArr.toString());

// Lấy và xóa phần tử đầu mảng
console.log("9. shift: "+myArr.shift());
console.log("9. after shift: "+myArr.toString());

// Thêm 1/nhiều ptu vào đầu mảng, và trả về length arr
console.log("10. unshift: "+myArr.unshift("NoSQL", "PHP"));
console.log("10. after unshift: "+myArr.toString());

// splice(start, numDelete)
console.log("11. splicing delete: "+myArr.splice(1, 2));
console.log("11. after splicing: "+myArr.toString());

// splice(start, 0, addElement1,addElement2,.... )
console.log("11. splicing add: "+myArr.splice(1, 0, "Python"));
console.log("11. after splicing: "+myArr.toString());
console.log("11. splicing add elements: "+myArr.splice(1, 0, "Python1", "Python2"));
console.log("11. after splicing: "+myArr.toString());

// concat: nối 2 array
var myArrConcat = ['C', 'C++'];
console.log("12. concat: ");
// myArr sẽ nhận được các phần tử từ mảng myArrConcat, nhưng myArr thực chất là không bị thay đổi
console.log(myArr.concat(myArrConcat));
console.log("12. after concat: "+myArr.toString());

console.log("13. slice from 1: ");
// slicing: lấy vài element trong arr
// .slice(start, end)
console.log(myArr.slice(1));
console.log("13. slice last from 1: ");
console.log(myArr.slice(-1));
console.log("13. after slice: "+myArr.toString());

