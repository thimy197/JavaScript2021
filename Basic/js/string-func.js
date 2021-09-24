/**
 * CHUỖI TRONG JS
 * 1. Tạo chuỗi
 *  - cách tạo chuỗi
 *      cách 1: 
 *              var fullname = "My Dao";
 *      cách 2     
 *              var fullname1 = new String("My Dao");
 *  - Nên dùng
 *      cách 1 ngắn gọn
 *      cách 2 phải tạo instant, cách 1 sẽ khởi tạo nhanh hơn
 *  - Kiểm tra datatype
 *      cách 1 là 1 String
 *      cách 2 là 1 Object
 * 2. Một số case sd "backslash"(\)
 *      var fullName = "this is 'string'"; -> this is 'string'
 *      var fullName1 = "this is \"string\'"; -> this is "string'
 *      var fullName2 = "This is \"; -> error
 *                      = "this is \\"; -> this is \ (2 dấu \ sẽ quy định thành 1 dấu \)
 *      
 * 3. Xem độ dài chuỗi - .length
 *      "this is string".length
 * 4. Chú ý độ dài khi viết code
 *   Nên xuống dòng khi chuỗi quá dài
 * 5. Template string ES6
 *  sử dụng dấu + :"string 1"+"string 2"
 *  ES6- sử dụng dấu huyền và $: `i am ${firstname} ${lastname}`
 */
var firstname = "Dao";
var lastname = "My"
// Nếu sử dụng $ thì nó sẽ tự động convert sang chuỗi để thực hiện cộng giá trị
console.log(`i am ${firstname} ${lastname}`);

/**
 * Cách làm việc với string
 * keyword: JS string method
 * 
 * 1. Length
 * 2. Find index, nếu không tìm đc sẽ return -1
 * 3. Cut string
 * 4. Replace
 * 5. convert to upper case
 * 6. convert to lower case
 * 7. Trim
 * 8. Split
 * 9. Get a character by index
 */
var myString = "This is JS and JS ";
var findIndex = "JS";
console.log('1. length: '+myString.length);

// return first index of findIndex in myString
console.log("2. Find index: "+myString.indexOf(findIndex));
// return second index of findIndex in myString
// @param position là giá trị bắt đầu tìm trở về cuối cuối, 
//                  vì vị trí đầu tiên là 8 nên tìm sau vị trí 8 này sẽ tìm đc vị trí tiếp theo
console.log("2. Find second index: "+myString.indexOf(findIndex, 9));
// return last index of findIndex in myString
console.log("2. Find last index: "+myString.lastIndexOf(findIndex));
console.log("2. search index: "+myString.search(findIndex));
/**
 * search vs indexof
 * 1. search không có truyền param thứ 2-position
 * 2. search có thể truyền vào biểu thức chính quy(sẽ tìm hiểu ở bài sau)
 */

// slice(start, end)
// slice(start)
// slice(0) -> get all
// slice(-start, -end) -> cắt ngược từ phải sang trái
 console.log("3. Cut string: "+myString.slice(10));
 console.log("3. Cut string from last index : "+myString.slice(-3, -1));

//  chỉ replace findIndex vị trí đầu tiên
 console.log("4. replace : "+myString.replace(findIndex, "JavaScript"));
//  Để replace all ta sử dụng biểu thức chính quy
 console.log("4. replace : "+myString.replace(/JS/g, "JavaScript"));

 console.log("5. convert to upper case: "+ myString.toUpperCase());
 console.log("6. convert to lower case: "+ myString.toLowerCase());

 console.log("7. Trim: "+myString.trim());


//  Split
var arrLanguages = 'JavaScript, PHP, SQL';
// cắt chuỗi và tách thành array
console.log("8. Split: "+arrLanguages.split(',')); // ->['JavaScript', ' PHP', ' SQL']
console.log("8. Split character: "+arrLanguages.split('')); // cắt từng từ ->['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', ',', ' ', 'P', 'H', 'P', ',', ' ', 'S', 'Q', 'L']

// Get a character by index
console.log("9. Get a character by index: "+arrLanguages.charAt(1)); //->a
console.log("9. Get a character by index: "+arrLanguages[0]); //->a
console.log("9. TypeOf Get a character: "+typeof arrLanguages.charAt(1)); //->a
// chú ý về việc sử dụng [], cần phải truyền giá trị < length của string
// còn về .charAt() nếu truyền vào index vượt quá length thì nó trả về chuỗi rỗng
console.log("9. overflow when Get a character by index arr: "+arrLanguages[40]);
console.log("9. TypeOf overflow: "+typeof arrLanguages[40]);
console.log("9. overflow when Get a character by index charAt: "+arrLanguages.charAt(40));



