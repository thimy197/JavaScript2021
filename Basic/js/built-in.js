/***
 * Built-in là những hàm đã được xây dựng sẵn
 */
// 1. Alert
// Hộp thoại chỉ có message

// 2. Console: chứa nhiều method, tương tác trên console của Develop tool
console.log('Day la log console');
var i = 100;
console.log(i);

// 3. Confirm
// Hiển thị hộp thoại thông báo như alert(), có button xác nhận
confirm('Message: Xác nhận độ tuổi.');

// 4. Prompt
// Giống Confirm, Có thêm ô input để nhập thông tin
prompt('Message: Xác nhận độ tuổi.');

// 5. Set timeout
// Thực hiện 1 lần sau 1 thời gian setting
setTimeout(function() {
    alert("Hết thời gian");
}, 1000); // 1000 ms

// 6. Set interval
// thực hiện liên tục sau khoảng thời gian setting
setInterval(function(){
    console.info("Thời gian trôi, time: "+Math.random());
}, 1000);