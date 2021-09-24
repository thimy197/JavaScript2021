// Khai báo biến
var fullName = 'Dao Thi My';

// alert(fullName);

// ++ --
// prefix & postfix

/**
 * prefix: ++a, --a
 * x = ++a
 * step1: a = a + 1
 * step2: x = a
 */

/**
 * postfix: a++, a--
 * x = a++; 
 * step1: x = a
 * step2: a = a + 1
 */

var i=0;
         
i = i++ - --i + ++i - i--;
// i = 0 - 0 + 1 - 1 = 0

console.log("i = "+i);

/**
 * Lũy thừa trong JS
 * x **= 5; -> x = x^5
 */
function luyThua(i){
    console.log("Lũy thừa của "+i+" = "+(i**2));
}
luyThua(9); // 9^2 = 81

// Có thể định nghĩa function theo cách dưới đây
var luyThua1 = function(){
    console.log("Function lũy thừa");
}
luyThua1();

/** 
 * Chú ý về điều kiện 
 * 1/Khi thực hiện so sánh "==" thì sẽ được conver cùng 1 kiểu để kiểm tra -> chỉ kiểm tra giá trị
 * 2/Khi thực hiện so sánh "===" thì sẽ kiểm tra cả về giá trị và cả datatype
 * 3/Các giá trị sau sẽ hiểu là false trong câu điều kiện
 *      0
 *      false
 *      '' or ""
 *      undefine
 *      null
 *      NaN
 * 3/
 */
var chuoi = 1;
if(chuoi == "1"){
    console.log('chuỗi bằng số'); // this is result
}else{
    console.log('Chuỗi Không bằng số');
}

if(chuoi){
    console.log("chuoi được hiểu là true");
}
chuoi = 0
if(!chuoi){
    console.log("chuoi được hiểu là false");
}

/**
 * Kiểu dữ liệu trong Javascript
 * 
 * 1/ Primitive Data
 * - Number(kể cả int và float)
 * - String('' và "")
 * - Boolean(true và false)
 * - Undefined
 * - Null
 * - Symbol
 * 
 * 2/ Complex Data
 * - Function
 * - Object
 */
// Để hiển thị 
// " => \" 
// ' => \'
// "...'..." => ...'...
// '..."' => ..."
var fullName = "Đào Thị \"Mỹ\"";
console.log(fullName);

// Object: 
// 1/Có key, value
var myObject = {
    name: 'My Dao',
    age: 21,
    address: 'Quang Ngai',
    myFunction: function(){

    }
};
// 2/Array
var arr = [
    'JS', 'PHP', 'Java'
];
// Kiểu tra KDL của biến
console.log(typeof arr);
// Chú ý: null thì typeof của nó là Object
console.log(typeof null);


