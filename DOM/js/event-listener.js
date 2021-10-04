/**
 * Event listener
 * 
 * Được sử dụng khi:
 * 1. Xử lý nhiều việc khi 1 event xảy ra
 * 2. Lắng nghe + Hủy bỏ lắng nghe event
 * 
 * DOM event thường đc sử dụng trong nhưng case đơn giản
 */

var btnElement = document.getElementById('btn');

// DOM event khi thực hiện nhiều việc
// btnElement.onclick = function(){
//     console.log("viec 1");
//     console.log("viec 2");
//     alert("viec 3");
// }
// // sau 3s thì loại bỏ event onlick
// setTimeout(function(){
//     // ghi đè hàm trống để loại bỏ event
//     btnElement.onclick = function(){}
// }, 3000);

btnElement.addEventListener('click', function(e){
    console.log("event 1");
});

btnElement.addEventListener('click', function(e){
    console.log("event 2");
});

function viec3(){
    console.log("event 3");
}
// Note: truyền viec3() thì sẽ thực hiện call hàm,
// -> truyền hàm ko có param thì hiểu nó là 1 biến
btnElement.addEventListener('click', viec3);

// sau 3s thì loại bỏ event onlick
setTimeout(function(){
    // khi muốn sử dụng cả 2 hàm addEventListener và removeEventListener
    // thì chúng ta phải tách nội dung ra thành 1 function riêng
    // làm thê này thì mới bieets đc đang thực hiện hủy event nào, có nhiều event trong addEventListener
    // ==> đây là 1 điểm mà DOM event ko làm đc
    btnElement.removeEventListener('click', viec3);
}, 3000);
