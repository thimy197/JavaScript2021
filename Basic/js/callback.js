/**
 * callback?
 * 
 * 1. Là hàm
 * 2. Được truyền qua đối số
 * 3. Được gọi lại (trong hàm nhận đối số)
 * 
 */

// 1. Là hàm
function myCallback(value){
    console.log("value: "+value);
}

// 2. ĐƯợc truyền thông qua đối số
function myFunction(param){
    if(typeof param === 'function'){
        param("Java"); // call param như 1 function
    }
}
// 3. Được gọi lại (trong hàm nhận đối số)
myFunction(myCallback);
// Bình thường 1 function có param cần call bằng () và phải tryền param
// Nhưng bây giờ lại thực hiện tryền hàm như 1 biến, và thực hiện gọi hàm trong function cha


/**
 * Custom map() function
 * Steps:
 * 1. ĐỊnh nghĩa hàm mới ở trong prototype
 *  - Định nghĩa function thực thi
 * 2. Định nghĩa callback function (đặt tên bất kỳ)
 *  
 * 3. Gọi lại chính callback function 
 *  - Map function thực thi với function trong cha lúc sử dụng
 *  -> ý là gọi lại callback() được định nghĩa trong cha courses_map.map_custom(...);
 */
// Để định nghĩa hàm mới ta trỏ tới prototype để tạo
Array.prototype.map_custom = function(callback){
    var myArr = [];
    // this ở đây chính là Object đang trỏ tới hàm này
    // ex: courses_map.map_custom() đang trỏ tới nên "this" là courses_map
    this.forEach(function(element, index){
        myArr.push(callback(element));
    });
    return myArr;
};
 var courses_map = [
    'javascript',
    'JS',
    'JAVA'
];

// console.log(courses_map);
var html_courses = courses_map.map_custom(function(value){
    return `<h2>${value}</h2>`;
});
console.log(html_courses);

/**
 * Chú ý về for..in... && for(index...)
 *      Nó sẽ duyệt cả những gì mình định nghĩa thêm
 * Bản chất của foreach là duyệt từng element, chứ ko phải sử dụng .length
 * 
 */
Array.prototype.new_custom_function1 = function(){};
Array.prototype.new_custom_PI = 3.14;
Array.prototype.foreach_custom = function(callback){
    // duyệt tất cả những element tự định nghĩa, cả những element định nghĩa nằm trong prototype
    for (const key in this) {
        // .hasOwnProperty() để check có phải là của chính nó ko
        if (this.hasOwnProperty(key)) {
            const element = this[key];
            callback(element, key, this);
        }
    }
};

var courses_foreach = [
    'javascript',
    'js',
    'java'
];
courses_foreach.new_function_1 = 11111;

var html_courses = courses_foreach.foreach_custom(function(value, index, array){
    console.log(index, value);
});

Array.prototype.every_custom = function(callback){
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            const check = callback(this[key], key, this);
            // check nếu có any 1 element ko thỏa đk
            if(!check){
                return false;
            }
        }
    }
    return true;
};
var courses_every = [
    1,1,2,3,4,5, -1
];
var every_positive = courses_every.every_custom(function(value, index, arr){
    // Trong hàm này không thể sử dụng một số function có sẵn đã định nghĩa trc
    // return arr[index].includes('j');
    return value >= 0;
});
console.log(every_positive);

