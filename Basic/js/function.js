/**
 * FUNCTION
 * - Nằm trong 1 khối mã
 * - Chỉ thực hiện 1 chức năng duy nhất
 */

// đối tượng arguments
// console.log(arguments); //->error
function writeLog(){
    console.log(arguments);// print arguments of function
    
    var myString = '';
    for(var param of arguments){
        myString += `${param}, `;
    }
    console.log(myString);
}

writeLog("arg1", "arg2");// những tham số này sẽ được in ra trong arguments
// 1. Declaration function
// đặt điểm hosting giúp cho DeclarationFunction có thể gọi sử dụng trc khi chúng đc khai báo
showMessageDecl();
function showMessageDecl(){
    console.log(" 1. Declaration function");
}

// 2. Expression function
// khai báo function phải được viết trên lời call function
// các cách dưới đây ghi rất gắn gọn, nhưng để dễ đọc thì vẫn nên gán thêm tên cho mỗi lần khai báo function
var showMessage = function(){
    console.log(" 2. Expression function");
}
showMessage();


setTimeout(function(){
    
});

var myObject = {
    cusFunction : function(){

    }
};

// polyfill: tự định nghĩa function để chạy một số function trên trình duyệt cũ

