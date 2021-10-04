/**
 * Object
 * - Lưu thông tin của 1 đối tượng
 * - key-value
 */

var myObject = {
    name: "Dao My",
    age: 25
}

// cách khai báo thêm thuộc tính cho Object
myObject.email = "daothimy197@gmail.com";
console.log(myObject);
// lấy thông tin thuộc tính
console.log(myObject.name);
console.log(myObject['name']);
// lấy thông tin thuộc tính không tồn tại -> undefined
console.log(myObject.school); // -> undefined

// Lấy value của key từ variable -> []
var myKey = "age";
console.log(myObject.myKey); // hiểu myKey là tên thuộc tính trong myObject
console.log(myObject[myKey]); // sd giá trị của myKey

// cá variable lưu name Key muốn thêm thuộc tính vào Object chúng ta chũng phải sd []
var newKey = "address";
var myAddObject = {
    name: "Dao My",
    age: 25,
    [newKey]:"PC-DP-QN"
};
console.log(myAddObject);

//delete key
delete myAddObject[newKey];
console.log(myAddObject);

// add method into Object
myAddObject.getName = function() {
    return this.name;
};
// call function
console.log(myAddObject.getName());


/**
 * Object Constructor
 * - dùng xây dựng Object
 */

// Thay vì tạo POJO như java thì trong JS tạo ta Object từ function như sau
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
var author = new User('Mỹ', 'Đào', 'avatar nè');
console.log(author);
console.log(author.constructor === User); // true
console.log(author.getName());

/* Có thể sài
 var User = function(){
 }
 */
 var User1 = function(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
var author1 = new User1('Mỹ1', 'Đào1', 'avatar nè1');
console.log(author1);

/**
 * Object prototype - Basic
    * 1. Là gì? Đối tượng nguyên mẫu, nguyên mẫu để tạo lên Object
    * 2. Sử dụng khi nào?
 */

// Việc tạo ra 1 User như trên thì muốn thêm thuộc tính vào Object thì làm thế nào?
User.prototype.email = "daothimy@123.com";
User.prototype.getEmail = function(){
    return this.email;
}
// lúc này author đã có prototype của email, nhưng cũng có thể gọi thông qua Object
console.log(author.email);

author.email1 = "daothimy@456.com";
console.log(author);

var authorNew = new User('Mỹ1', 'Đào1', 'avatar nè1');
User.email1 = "alo@gmail.com"
console.log(authorNew);

