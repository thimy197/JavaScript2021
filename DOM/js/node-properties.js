/**
 * Khi bạn biết mình cần làm gì 
 * -> tìm thuộc tính tương ứng trong node 
 *  bằng cách console.log() node hiện tại 
 *  sau đó tìm properties/method sẽ cần
 * -> search ý mong muốn của bạn trong google để tìm properties cần
 * 
 */


/**
 * DOM CSS
 * 
 */
var boxElement = document.querySelector('.box');
console.log(boxElement.style);
// .style để lấy thông tin style css của element

boxElement.style.width = '100px';
boxElement.style.height = '100px';
boxElement.style.backgroundColor = 'red';

// cách khác để sửa thông tin style
// Object.assign(<node>.style, {<css style>});
Object.assign(boxElement.style, {
    width: '100px',
    height: '100px',
    backgroundColor: 'green',
});

// -->Những thông tin style ở trên sẽ đc thêm vào inline style css
console.log(boxElement.style.backgroundColor);
