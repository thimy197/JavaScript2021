/**
 * Đối tượng Date
 */

var date = new Date();
console.log(date); // trả về là String

console.log(date.getTime());
console.log(date.getMonth()+1);
console.log(date.getFullYear());
console.log(date.getDate()+"/"+(date.getMonth()+1) +"/"+date.getFullYear());

/**
 * Switch...case...
 * sử dụng toán tử === để thực hiện so sánh
 *      === thì việc so sánh "1" vs 1 = false
 *      == việc so sánh "1" vs 1 = true
 */

/**
 * For
 * 1. for
 * 2. for/in: lặp key
 * 3. for/of: lặp value
 */

var myLanguage = [
    "Java",
    "Java0",
    "Java1",
    "Java2",
    "Java3",
    "Java4"
];

for (var key in myLanguage) {
        console.log(myLanguage[key]);
}

for (var value of myLanguage) {
    console.log(value);
}

// Tách từng từ trong 1 chuỗi
var strJava = 'Java';
for (var key in strJava) {
    // In từng chữ cái trong strJava
    console.log(strJava[key]);
}
for (var value of strJava) {
    // In từng chữ cái trong strJava
    console.log(value);
}

// Nếu là 1 Object thì sẽ phải lấy mảng của key hoặc value để lặp chứ ko lặp trực tiếp đc
var myObject = {
    name: "Dao My",
    age: 25
}
console.log(Object.keys(myObject));
console.log(Object.values(myObject));
for(var valueKey of Object.keys(myObject)){
    // console.log(myObject[valueKey]);
    console.log(valueKey);

}
for(var value of Object.values(myObject)){
    console.log(value);
}