/**
 * DOM events
 * 
 * 1. Attribute events
 * 2. Assign event using the element node
 * Khuyến khích sử dụng cách 2, tách ra 1 file để dễ quản lý
 */

var clickEventElements = document.querySelectorAll('.click-event');
console.log(clickEventElements);

clickEventElements.forEach(element =>{
    // gán từng sự kiện trên phần tử trong list clickEventElements
    element.onclick = function() {
        console.log(element.innerText);
    };
});

