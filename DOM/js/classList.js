var boxElement = document.querySelector('.box');
console.log(boxElement.classList);

// boxElement.classList: quản lý class của element

// add
// contains
// remove
// toggle: có->xóa, ko có->thêm

boxElement.classList.add('red', 'blue');
console.log(boxElement.classList.value);
console.log(boxElement.classList.contains('red'));
boxElement.classList.remove('blue');
console.log(boxElement.classList.value);

// setInterval() hành động lặp lại sau tg bao nhiêu
// setTimeOut() hành động sẽ đc thực hiện sau tg bao nhiêu
setInterval(()=>{
    boxElement.classList.toggle('red');
}, 3000);