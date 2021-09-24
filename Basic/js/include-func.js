/**
 * Chỉ áp dụng cho String/Array
 * 
 */

var title = "this is title";
console.log(title.includes("is")); // true
// bắt đầu tìm kiếm từ vị trí nào
console.log(title.includes("is", 3)); // true

var myArr = ["java", "JS", "PHP"];
console.log(myArr.includes("JS")); // true
